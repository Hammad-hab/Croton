const uuid = require("uuid")
const map = {
    "CALL_FN": 0,
    "LOAD_ARG": 1,
    "LOAD_IDENTIFIER_ARG": 2,
    "LD_RET": 3
}

const registerbt = (bytecode, v, str=true) => {
      return `${str ? bytecode : map[bytecode]}:${v}\n`
}

const Bytecode = (ast, isNested=false, index=0) => {
    let generatedCode = ''
    let LoadedFunction = ''
    for (const item of ast) {
        let gencode = ""
        if (item.type === "Function") {
           if (item.arguments.length > 0) 
            item.arguments.forEach((argument, index) => {
                if (argument.type === "Function") {
                    const xgencode = Bytecode([argument], true, index)
                    generatedCode += xgencode
                }
                if (argument.type === "Identifier") gencode += registerbt("LOAD_IDENTIFIER_ARG", `${argument.name},${index}`)
                else if (argument.baseType) gencode += registerbt("LOAD_ARG", `${argument.value},${index}`)
                else if (argument.type === "String") gencode += registerbt("LOAD_ARG", `"${argument.value}",${index}`)
                else if (argument.type === "ExcludedString") gencode += registerbt("LOAD_ARG", `${argument.value},${index}`)
            })
           gencode += registerbt("LOAD_FN", item.name)
           gencode += registerbt("CALL_FN", "")
           gencode += registerbt("CLEAR_ARG_HEAP", "")
           if (isNested) 
            gencode += registerbt("MV_ARGS_POS", `0,${index}`)
           gencode += registerbt("CLEAR_RET_HEAP", "")
        }

        if (item.type === 'VariableDeclaration') {
           gencode += Bytecode([{type: "Function", name: "define", arguments: [{type: "String", value: item.name}, item.assignee]}])
        //    console.log(item)
        }
        generatedCode +=  gencode
    }
    return generatedCode
}

module.exports = {
    Bytecode
}