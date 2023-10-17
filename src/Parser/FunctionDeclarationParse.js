
module.exports = function FunctionDeclarationParse(
  token,
  tokens_array,
  index,
  parse
) {
  if (token.value === "declare" || token.value === "fn") {
    const generic = tokens_array.indexOf(token);
    let copiedGenerics = generic + 1;
    let fnName = tokens_array[copiedGenerics];
    var NTOKEN;
    if (!fnName || !fnName.type === "Symbol" && !fnName.value === "{" || fnName.type === "Name" ) {
      copiedGenerics += 1;
      NTOKEN = tokens_array[copiedGenerics];
      copiedGenerics += 1;
    } else if (fnName.type === "Symbol" && fnName.value === "{") {
      NTOKEN = fnName
      copiedGenerics += 1
      fnName = "__lambda!"
      // copiedGenerics += 1
    }
    let length = 0;
    if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "{" || NTOKEN.type) {
      let contents = [];
      let character = {
        type: "",
        value: "",
      };
      let bracketController = 1;
      const remainingArray = tokens_array.slice(
        copiedGenerics,
        tokens_array.length
      );
      while (length < remainingArray.length) {
        character = remainingArray[length];
        if (bracketController === 0) break;
        if (character.value === "{") bracketController += 1;
        if (character.value === "}") bracketController -= 1;
        contents.push(character);
        length += 1;
      }
      contents = contents.slice(0, contents.length - 1);
      contents = parse(contents);
      return {
        type: "FunctionDeclaration",
        contents,
        length: fnName !== "__lambda!" ? length + 3 : length + 2,
        name: fnName === "__lambda!" ? fnName : fnName.value,
        lambda: fnName.value === "_lambda",
      };
    }
  }
  return false;
};
