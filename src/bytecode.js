const uuid = require("uuid")
const map = {
    "CALL_FN": 0,
    "LOAD_ARG": 1,
    "LOAD_IDENTIFIER_ARG": 2,
    "LD_RET": 3
}

const registerbt = (bytecode, v, str=true) => {
      return `${str ? bytecode : map[bytecode]} : ${v}\n`
}

const Bytecode = (ast) => {
    let generatedCode = ''
    let LoadedFunction = ''
    for (const item of ast) {
        let gencode = ""
        if (item.type === "Function") {
            item.arguments.forEach(argument => {
                if (argument.type === "Function") {
                    // const id = uuid.v4()

                    const x = Bytecode([argument])
                    generatedCode += "\n" + x
                    gencode += registerbt("MV_ARG_HEAP", "")
                    gencode += registerbt("CLEAR_RET_HEAP", "")
                    // gencode += registerbt("LOAD_RET", argument.name)
                }
                if (argument.type !== "Identifier" && argument.value) gencode += registerbt("LOAD_ARG", argument.baseType ? argument.value : `${argument.value}`)
                else if (argument.type === "Identifier") gencode += registerbt("LOAD_IDENTIFIER_ARG",`${argument.name}`)
            });
            if (item.name !== LoadedFunction) {
                gencode += registerbt("LOAD_FN", item.name)
                LoadedFunction = item.name
            }
            gencode += registerbt("CALL_FN", "")
            gencode += registerbt("CLEAR_ARG_HEAP", "")
            gencode += registerbt("MV_ARG_HEAP", "")
            gencode += registerbt("CLEAR_RET_HEAP", "")
            
        }

        if (item.type === 'VariableDeclaration') {
            if (item.assignee.type === "Function") {
               const x = Bytecode([item.assignee])
               gencode += x
               gencode += registerbt("LOAD_FN", "define")
               gencode += registerbt("LOAD_ARG", `"${item.name}"`)
               gencode += registerbt("CALL_FN", "")
            } else if (item.assignee.type === "Identifier") {
               gencode += registerbt("LOAD_FN", "define")
               gencode += registerbt("LOAD_IDENTIFIER_ARG", `${item.assignee.name}`)
               gencode += registerbt("LOAD_ARG", `"${item.name}"`)
               gencode += registerbt("CALL_FN", "")
            } else {
               gencode += registerbt("LOAD_FN", "define")
               gencode += registerbt("LOAD_ARG", `${item.assignee.value}`)
               gencode += registerbt("LOAD_ARG", `"${item.name}"`)
               gencode += registerbt("CALL_FN", "")
            }
            gencode += registerbt("CLEAR_ARG_HEAP", "")
            gencode += registerbt("CLEAR_RET_HEAP", "")
        }
        generatedCode += gencode
    }
    return generatedCode
}

module.exports = {
    Bytecode
}