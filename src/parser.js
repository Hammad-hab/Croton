const { PREPROCESSORZ, PR_EN_EXTENSIONS } = require("./Preprocessers/index");
const { tokenize } = require("./lexer");

/**
 *
 * @param {[{type:"Name" | "String" | "Symbol" | "Preprocesser" | "Numeric", position: Number, value: Number | String}]} tokens_array
 * @returns {[]}
 */
function parse(tokens_array) {
  const AST = [];
  const cachedLength = tokens_array.length;
  for (let index = 0; index < cachedLength; ) {
    const token = tokens_array[index];
    if (token.type === "Preprocesser") {
      PREPROCESSORZ[token.name](token.target, token.operation);
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
      innerParser: for (const key in PR_EN_EXTENSIONS) {
        if (PR_EN_EXTENSIONS[key]) {
          const data = PR_EN_EXTENSIONS[key](token, tokens_array, index, parse);
          index += data.length;
          if (data) {
            AST.push(data);
            break innerParser;
          } else {
            continue;
          }
        }
      }
      continue;
    }
  }
  return AST;
}
const tk = tokenize(`
@disable VariableDeclarationParse@
@disable identiferParse@
hm()
`);

// console.log(tk);
const or = parse(tk);
console.log(or);
