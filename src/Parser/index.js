const identiferParse = require("./IdentifierParse")
const functionParse = require("./FunctionParse")
const VariableDeclarationParse = require("./VariableDeclarationParse")
const FunctionDeclarationParse = require("./FunctionDeclarationParse")


module.exports = {
    IdentifierParse: identiferParse,
    FunctionParse: functionParse,
    VariableDeclarationParse,
    FunctionDeclarationParse
}