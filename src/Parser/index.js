const identiferParse = require("./IdentifierParse")
const functionParse = require("./FunctionParse")
const ObjectAccessor = require("./ObjectAccessor")
const VariableDeclarationParse = require("./VariableDeclarationParse")
const FunctionDeclarationParse = require("./FunctionDeclarationParse")
const ObjectParse = require("./ObjectParse")
const StatementParse = require("./StatementParse")


module.exports = {
    IdentifierParse: identiferParse,
    FunctionParse: functionParse,
    VariableDeclarationParse,
    FunctionDeclarationParse,
    ObjectAccessor,
    ObjectParse,
    StatementParse
}