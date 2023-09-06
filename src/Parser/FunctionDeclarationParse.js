module.exports = function FunctionDeclarationParse(
  token,
  tokens_array,
  index,
  parse
) {
  if (token.value === "declare") {
    const generic = tokens_array.indexOf(token);
    let copiedGenerics = generic+1
    const fnName = tokens_array[copiedGenerics];
    copiedGenerics += 1
    const NTOKEN = tokens_array[copiedGenerics];
    copiedGenerics += 1
    let length = 0;
    if (NTOKEN.type === "Symbol" && NTOKEN.value === "{") {
      let contents = [];
      let character = {
        type: "",
        value: ""
      }
      const remainingArray = tokens_array.slice(copiedGenerics, tokens_array.length);
      while (character.type !== "Symbol" && character.value !== "}") {
        character = remainingArray[length]
        contents.push(character)
        length += 1
      }
      contents = contents.slice(0, contents.length -1)
      contents = parse(contents)
      // console.log(contents)
      return {
        type: "FunctionDeclaration",
        contents,
        length: length + 3,
        name: fnName.value,
      }
    }
  }
  return false;
}; 
