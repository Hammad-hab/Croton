const {Exception} = require("../exceptionUtility.js")
const {IdentifierParse, FunctionParse, VariableDeclarationParse,FunctionDeclarationParse, ObjectParse, StatementParse} = require("../Parser/")
const PR_AV_EXTENSIONS = {
    FunctionDeclarationParse,
    VariableDeclarationParse,
    FunctionParse,
    IdentifierParse,
    StatementParse,
    ObjectParse
}
let PR_EN_EXTENSIONS = {
    StatementParse,
    ObjectParse,
    FunctionDeclarationParse,
    VariableDeclarationParse,
    FunctionParse,
    IdentifierParse,
}

function enable(target) {
    // console.log(PR_EN_EXTENSIONS)
    if (!target in PR_AV_EXTENSIONS || !PR_AV_EXTENSIONS[target] && target != "*") return new Exception(`Preprocessor @enable`, `Cannot enable a target extension that does not exist! No such parsing function named ${target}`).throw()
    if (target === "*") {
        PR_EN_EXTENSIONS = PR_AV_EXTENSIONS
        return 0
    }
    const targetExtension = PR_AV_EXTENSIONS[target]
    PR_EN_EXTENSIONS[target] = targetExtension
    return 0
}

function disable(target) {
    if (!target in PR_AV_EXTENSIONS || !PR_AV_EXTENSIONS[target] && target != "*") return new Exception(`Preprocessor @disable`, `Cannot disable a target extension that does not exist! No such parsing function named ${target}`).throw()
    if (target === "*") {
        PR_EN_EXTENSIONS = {}
        return 0
    }
    PR_EN_EXTENSIONS[target] = () => new Exception(`Preprocessor @disable`, `Cannot Parse instance ${target} as it has been disabled`).throw()
    return 0
}
module.exports = {
    enable,
    disable,
    PR_EN_EXTENSIONS
}