// module.exports = function functionParse(token, tokens_array, index, parse) {
//     const NTOKEN = tokens_array[tokens_array.indexOf(token) + 1]
//     const generic = tokens_array.indexOf(token)
//     /**
//      * The reason this function checks if the next token is a "(" is to determine if
//      * this is a function call as the syntax of a function call is:
//      *   fn()
//      * Here^, you can see that the condition is accurate as it first checks for an Identifier and then for
//      * an opening parenthesis.
//      */
//     // console.log("Parsing FN")
//     if (NTOKEN && NTOKEN.type === "Parenthesis" && NTOKEN.isOpening) {
//         // This is a function!
//         let parameters = []
//         let parameterController = 1;
//         const slicedTokenArray = tokens_array.slice(generic + 1, tokens_array.length)
//         let parametersLength = 0
//         // console.log(slicedTokenArray)

//         while (parametersLength < slicedTokenArray.length) {
//             const cparam = slicedTokenArray[parametersLength]
//             if (cparam.value === "(") parameterController += 1 
//             if (cparam.value === ")") parameterController -= 1
//             if (parameterController <= 0) break
//             parameters.push(cparam)
//             parametersLength += 1
//         } 
//         // console.log(tokens_array.slice(generic, parameters.length))
        
//         parameters = parameters.slice(1, parameters.length - 1)
//         console.log(parameters)
//         parameters = parse(parameters)
//         // console.log("Over")
//         return {
//             type: "Function",
//             name: token.value,
//             arguments: parameters,
//             parametersLength,
//             length : parametersLength + 1  // We add one to the parameters length as it repersents the name of the function                              // Essentially, we move another step forward to prevent re-parsing
//         }
//     }
//     return false
// }
module.exports = function functionParse(token, tokens_array, index, parse) {
    const tokenIndex = tokens_array.indexOf(token);
  
    if (tokenIndex === -1) {
      return false; // Token not found in the array
    }
  
    const nextTokenIndex = tokenIndex + 1;
  
    if (
      nextTokenIndex < tokens_array.length &&
      tokens_array[nextTokenIndex].type === "Parenthesis" &&
      tokens_array[nextTokenIndex].isOpening
    ) {
      // This is a function call
      const parameters = [];
      let parameterController = 1;
      let parametersLength = 0;
  
      for (let i = nextTokenIndex + 1; i < tokens_array.length; i++) {
        const currentToken = tokens_array[i];
  
        if (currentToken.value === "(") {
          parameterController++;
        } else if (currentToken.value === ")") {
          parameterController--;
        }
        parameters.push(currentToken);
  
        if (parameterController === 0) {
          break;
        }
  
        parametersLength++;
      }
  
      
      // Remove the opening and closing parentheses from parameters
      if (parameters[0].value === "(") parameters.shift();
      
      if (parameters[parameters.length - 1].value === ")") parameters.pop();

      const parsedParameters = parse(parameters);
      parsedParameters.forEach(element => {
        element.isArgument = true
      });
      return {
        type: "Function",
        name: token.value,
        arguments: parsedParameters,
        parametersLength: parametersLength,
        length: parametersLength + 3, // Add 2 for the function name and opening parenthesis
      };
    }
  
    return false; // Not a function call
  }
  