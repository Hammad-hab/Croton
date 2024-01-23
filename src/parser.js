const { PREPROCESSORZ, PR_EN_EXTENSIONS } = require("./Preprocessers/index");
const ObjectAccessor = require("./Parser/ObjectAccessor");

/**
 *
 * @param {[{type:"Name" | "String" | "Symbol" | "Preprocesser" | "Numeric", position: Number, value: Number | String}]} tokens_array
 * @returns {[]}
 */
const preprocessor_modifiers = []
function parse(tokens_array) {
  const AST = [];
  const cachedLength = tokens_array.length;
  for (let index = 0; index < cachedLength; ) {
    preprocessor_modifiers.forEach(fn => {
      tokens_array[index] = fn(tokens_array[index])
    })
    // console.log(tokens_array[index])
    const token = tokens_array[index];
    if (!token) {
      index += 1;
      continue;
    }
    // console.log(token)
    if (token.type === "Preprocesser") {
      const preprocessor = PREPROCESSORZ[token.name]
      let data = preprocessor(token.target, token.operation, );
      if (typeof data === "function") {
          preprocessor_modifiers.push(data)
          index += 1;

          continue
      }
      if (data && !data.ast) {
        AST.push(...parse(data));
      } else {
        AST.push(data)
      }
      index += 1;
      continue;
    }
    
    

    // Parsing Numbers. In the end, this condition evaluates if the token is a FloatLiteral or an IntegerLiteral
    if (token.type === "Numeric") {
      let type;
      if (Number.isInteger(token.value)) type = "IntegerLiteral";
      else type = "FloatLiteral";

      AST.push({
        type, // FloatLiteral | IntegerLiteral
        baseType: token.type, // baseType repersents the original type of the lexed token
        value: token.value,
        positionedAt: token.position,
      });
      index += 1;
      continue; // This is to prevent the loop from going forward. If the loop, by some means, did get forward, it'd parse the same token again and again.
    }
    // Parsing Strings. This is the simplest stage of parsing
    if (token.type === "String") {
      AST.push({
        type: token.type,
        value: token.value,
        positionedAt: token.position,
      });
      index += 1;
      continue;
    }

    /**
     * Parsing Names. This step is a bit more complex as the returned value can vary.
     * The Parsed Token could result in a statment, a variable or a function. That is
     * percisely why this part is a bit abstract.
     */

    if (token.type === "Name") {
      for (const key in PR_EN_EXTENSIONS) {
        if (PR_EN_EXTENSIONS[key]) {
          const data = PR_EN_EXTENSIONS[key](token, tokens_array, index, parse);
          if (data) {
            index += data.length;
            AST.push(data);
            break;
          } else {
            continue;
          }
        }
      }
      // index +=1
      continue;
    }

    if (token.type === "Symbol") {
      let data = ObjectAccessor(token, tokens_array, index, parse);
      if (data) {
        AST.push(data);
        index += data.length;
      }
      continue;
    }
    index += 1
  }
  return AST;
}
module.exports = {
  parse,
};
