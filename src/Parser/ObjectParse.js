module.exports = function ObjectParse(token, tokens_array, index, parse) {
    if (token.value === "Object" || token.value === "Struct" || token.value === "Structure") {
      // console.log("Tila")
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
          contents = parse(contents.slice(0, contents.length -1))
          let properties = []
          for (let i = 0; i < contents.length; i += 2) {
            const Property = contents[i].name;
            const PropertyValue = contents[i + 1];
            properties.push([Property, PropertyValue])
          }
          return {
            type: "ObjectDeclaration",
            properties,
            length: length + 3,
            name: fnName.value,
          }
        }
      }
      return false;
};
