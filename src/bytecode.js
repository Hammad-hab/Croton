const process = require("process")
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
    let ln = 0
    for (const item of ast) {
        let gencode = ""
        if (item.type === "String" || item.baseType) {
           console.log(`\u001b[31m[CrotonTranspiler >> Failure]:\n\tExiting Program because of a potential threat. Unused ${item.type} placed in program. This can cause un-tracked memory allocation.`)
           process.exit(-1)
        }
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
        }
        if (item.type === "Statement" && item.name === "if") {
            generatedCode += Bytecode(item.executioners, true)
            const _generated_asm = generatedCode.split("\n")
            const contents = Bytecode(item.contents)

           gencode += registerbt("IF_GOTO", ((_generated_asm.length - 1) + (contents.split("\n").length - 1)) + 1)
           gencode += registerbt("CLEAR_ARG_HEAP", "")
           gencode += contents
        }

        if (item.type === "Statement" && item.name === "while") {
           const ext = Bytecode(item.executioners, true)
           generatedCode += ext
           const _generated_asm = generatedCode.split("\n")
           const contents = Bytecode(item.contents)
           gencode += registerbt("PRoFT", ((_generated_asm.length - 1) + (contents.split("\n").length - 1)) + 2)
           gencode += registerbt("CLEAR_ARG_HEAP", "")
           gencode += contents
           gencode += registerbt("GOTO", (_generated_asm.length - ext.split("\n").length) - 1)
        }

        if (item.type === "FunctionDeclaration") {
            const contents = Bytecode(item.contents)
            gencode += registerbt("DF_FN", item.name)
            if (contents.includes(`D_FN:${item.name}`)) {
                console.log(`\u001b[31m[CrotonTranspiler >> Warning]:\n\tExiting Program because of a potential threat. Nested function in ${item.name} with the same name.\n\tThis can cause slower performance and lengthy lookups.`)
                // process.exit(-1)

            }
            gencode += contents
            gencode += registerbt("ED_FN", item.name)
        }
        generatedCode +=  gencode
        ln += 1
    }
    return generatedCode
}

module.exports = {
    Bytecode
}