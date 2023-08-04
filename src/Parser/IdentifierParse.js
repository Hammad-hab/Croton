module.exports = function identifierParse(token) {
    return {
        type : "Identifier",
        name: token.value,
        length: 1
    }
}