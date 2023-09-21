
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
        // console.log(parameterController, token.value)
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
  
      // console.log(parameterController)
      
      // Remove the opening and closing parentheses from parameters
      if (parameters[0].value === "(") parameters.shift();
      
      if (parameters[parameters.length - 1].value === ")") parameters.pop();
      
      const parsedParameters = parse(parameters);
      // console.log(parsedParameters, token.value)
      parsedParameters.forEach(element => {
        element.isArgument = true
      });

      // console.log("Done!", token.value)

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
  