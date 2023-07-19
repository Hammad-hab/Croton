const simulateStringFromParsedFunction = (token) => {
    let v = ""
    // token.arguments.forEach(element => {
    //     v += element.type === "Identifier" | 
    // });
    const str = token.name + "(" +  + ")"
    return str
}


module.exports = {
    simulateStringFromParsedFunction,
    CrotanFunction
}