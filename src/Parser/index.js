const identiferParse = require("./IdentifierParse")
const functionParse = require("./FunctionParse")
const ObjectAccessor = require("./ObjectAccessor")
const VariableDeclarationParse = require("./VariableDeclarationParse")
const FunctionDeclarationParse = require("./FunctionDeclarationParse")


module.exports = {
    IdentifierParse: identiferParse,
    FunctionParse: functionParse,
    VariableDeclarationParse,
    FunctionDeclarationParse,
    ObjectAccessor
}