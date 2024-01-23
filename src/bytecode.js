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
    for (const item of ast) {
        let gencode = ""
        if (item.type === "Function") {
            gencode += registerbt("CALL_FN", item.name)
            item.arguments.forEach(argument => {
                if (argument.type === "Function") {
                    const x = Bytecode([argument])
                    gencode += x
                    gencode += registerbt("LD_RET", "^")
                }
                else if (argument.type !== "Identifier") gencode += registerbt("LOAD_ARG", argument.baseType ? argument.value : `"${argument.value}"`)
                else gencode += registerbt("LOAD_IDENTIFIER_ARG", argument.name)
            });
        }

        if (item.type === 'VariableDeclaration') {
           gencode += registerbt("CALL_FN", "define")
           gencode += registerbt("LOAD_ARG", `"${item.name}"`)
           if (item.assignee.type === "Function") {
              const x = Bytecode([item.assignee])
              gencode += x
              gencode += registerbt("LD_RET", "^")
           }
        }
        generatedCode += `${gencode}${ast.length <= 1? "" : "\n"}` 
    }
    return generatedCode
}

module.exports = {
    Bytecode
}