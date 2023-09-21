const { Exception } = require("../exceptionUtility");
module.exports = function ObjectAccessPoint(token, tokens_array, index, parse) {
  const generic = tokens_array.indexOf(token);
  let length = 0;
  if (token.value === "|" && token.type === "Symbol") {
    let character = {
      type: "",
      value: "",
    };
    let accessors = [];
    // console.log(accessors)
    const remainingArray = tokens_array.slice(generic + 1, tokens_array.length);
    //   console.log(remainingArray)
    while (character.type !== "Symbol" && character.value !== "|") {
      //   if (character.type !== "String" && character.type !== "Name") return new Exception(index + length, `Expected Object AccessPoint to be of type String or Name, got ${character.type} instead.`).throw()
      if (character.value === "|") break;
      character = remainingArray[length];
      accessors.push(character);
      length += 1;
    }

    //   if (accessors[accessors.length - 1].type === "Symbol" && accessors[accessors.length - 1].value === "|" /*Last element*/) {
    //        accessors = accessors.slice(0, accessors.length - 1)
    //   }
    accessors.pop();
    return {
      type: "ObjectAccessPoint",
      length: length + 1,
      accessors: parse(accessors),
    };
  }
  return false;
};
