module.exports = function FunctionDeclarationParse(
  token,
  tokens_array,
  index,
  parse
) {
  if (token.value === "declare") {
    const generic = tokens_array.indexOf(token);
    let copiedGenerics = generic + 1;
    const fnName = tokens_array[copiedGenerics];
    copiedGenerics += 1;
    // console.log("ARRAY",tokens_array)
    const NTOKEN = tokens_array[copiedGenerics];
    copiedGenerics += 1;
    let length = 0;
    // console.log("Parsing FunctionDeclaration", fnName.value)
    // console.log(NTOKEN)
    if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "{") {
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
      // console.log("Made it to While Loop")
      while (length < remainingArray.length) {
        character = remainingArray[length];
        if (bracketController === 0) break
        // console.log(bracketController)
        if (character.value === "{") bracketController += 1;
        if (character.value === "}") bracketController -= 1;
        contents.push(character);
        length += 1;
      }
      contents = contents.slice(0, contents.length - 1);
      contents = parse(contents);
      // console.log("Parsed Function", fnName.value)
      return {
        type: "FunctionDeclaration",
        contents,
        length: length + 3,
        name: fnName.value,
      };
    }
  }
  return false;
};
