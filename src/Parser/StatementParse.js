module.exports = function StatementParse(
    token,
    tokens_array,
    index,
    parse
  ) {
    if (token.value === "if") {
      const generic = tokens_array.indexOf(token);
      let copiedGenerics = generic + 1;
      const fnName = tokens_array[copiedGenerics];
      const NTOKEN = tokens_array[copiedGenerics];
      copiedGenerics += 1;
      let length = 0;
      if (NTOKEN.type === "Symbol" && NTOKEN.value === "{") {
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
          if (bracketController === 0) break
          if (character.value === "{") bracketController += 1;
          if (character.value === "}") bracketController -= 1;
          contents.push(character);
          length += 1;
        }
        contents = contents.slice(0, contents.length - 1);
        
        contents = parse(contents);
        
        return {
          type: "IfCondition",
          contents,
          length: length + 3,
          name: fnName.value,
        };
      }
    }
    return false;
  };
  