const {Exception} = require("../exceptionUtility.js")
const {IdentifierParse, FunctionParse, VariableDeclarationParse} = require("../Parser/")
const PR_AV_EXTENSIONS = {
    IdentifierParse,
    FunctionParse,
    VariableDeclarationParse
}
const PR_EN_EXTENSIONS = {
    VariableDeclarationParse,
    FunctionParse,
    IdentifierParse,
}

function enable(target) {
    if (!target in PR_AV_EXTENSIONS || !PR_AV_EXTENSIONS[target]) return new Exception(`Preprocessor @enable`, `Cannot enable a target extension that does not exist! No such parsing function named ${target}`).throw()
    const targetExtension = PR_AV_EXTENSIONS[target]
    PR_EN_EXTENSIONS[target] = targetExtension
}

function disable(target) {
    if (!target in PR_AV_EXTENSIONS || !PR_AV_EXTENSIONS[target]) return new Exception(`Preprocessor @disable`, `Cannot disable a target extension that does not exist! No such parsing function named ${target}`).throw()
    delete PR_EN_EXTENSIONS[target]
}
module.exports = {
    enable,
    disable,
    PR_EN_EXTENSIONS
}