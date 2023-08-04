module.exports = function functionParse(token, tokens_array, index, parse) {
    const NTOKEN = tokens_array[tokens_array.indexOf(token) + 1]
    const generic = tokens_array.indexOf(token)
    /**
     * The reason this function checks if the next token is a "(" is to determine if
     * this is a function call as the syntax of a function call is:
     *   fn()
     * Here^, you can see that the condition is accurate as it first checks for an Identifier and then for
     * an opening parenthesis.
     */

    if (NTOKEN && NTOKEN.type === "Parenthesis" && NTOKEN.isOpening) {
        // This is a function!
        let parameters = []
        let parameterController = 1;
        const slicedTokenArray = tokens_array.slice(generic + 1, tokens_array.length)
        let parametersLength = 0

        while (parametersLength < slicedTokenArray.length) {
            const cparam = slicedTokenArray[parametersLength]
            if (cparam.value === "(") parameterController += 1 
            if (cparam.value === ")") parameterController -= 1 
            if (parameterController <= 0) break
            parameters.push(cparam)
            parametersLength += 1
        } 
        parameters = parameters.slice(1, parameters.length - 1)
        return {
            type: "Function",
            name: token.value,
            arguments: parse(parameters),
            parametersLength,
            length : parametersLength + 1 // We add one to the parameters length as it repersents the name of the function
                                          // Essentially, we move another step forward to prevent re-parsing
        }
    }
    return false
}