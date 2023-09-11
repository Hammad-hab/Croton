const { PREPROCESSORZ, PR_EN_EXTENSIONS } = require("./Preprocessers/index");
const { tokenize } = require("./lexer");

/**
 *
 * @param {[{type:"Name" | "String" | "Symbol" | "Preprocesser" | "Numeric", position: Number, value: Number | String}]} tokens_array
 * @returns {[]}
 */
function parse(tokens_array) {
  const AST = [];
  const MAX_DEPTH_EXCEED = 100000000000000;
  const cachedLength = tokens_array.length;
  let Depth = 0;
  for (let index = 0; index < cachedLength; ) {
    const token = tokens_array[index];
    if (token.type === "Preprocesser") {
      data = PREPROCESSORZ[token.name](token.target, token.operation);
      if (data) {
        AST.push(...parse(data))
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
            // console.log(AST)
            break;
          } else {
            continue;
          }
        }
      }
      // index +=1
      continue;
    }
  }
  return AST;
}

module.exports = {
  parse,
};
// str=`
// println(100 201)
// println(100 200)
// println(100 200)
// `
// tokens = tokenize(str)
// // console.log(str[16])
// console.log(
// parse(tokens)

// )