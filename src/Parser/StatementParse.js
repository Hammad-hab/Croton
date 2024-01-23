module.exports = function StatementParse(
    token,
    tokens_array,
    index,
    parse
  ) {
    if (token.value === "if" || token.value === "while" || token.value === "for" || token.value === "else") {
      const generic = tokens_array.indexOf(token);
      let copiedGenerics = generic + 1;
      const NTOKEN = tokens_array[copiedGenerics];
      copiedGenerics += 1;
      let length = 2;
      if (NTOKEN.value === "[" && NTOKEN.type === "Symbol") 
      {
        let NextSymbol = tokens_array[copiedGenerics];
        let executioners = []
        while (NextSymbol.value !== "]" && NextSymbol.type !== "Symbol") {
          NextSymbol = tokens_array[copiedGenerics]
          executioners.push(NextSymbol)
          copiedGenerics += 1
          length += 1
        }
        copiedGenerics += 1
        length += 2
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
        // console.log(tokens_array[lengthx])
        // contents = contents.slice(0, contents.length - 1);
        contents = parse(contents);

        return {
          type: "Statement",
          name: token.value,
          executioners: executioners,
          contents: contents,
          length: length + 1,
        }
      }
    }
    return false;
  };
  