const { tokenize } = require("./lexer");
const process = require("process");
function functionalParse(array, name) {
  const rArray = array.slice(array.indexOf(name) + 1, array.length);
  let index = 0;
  let paramController = 0
  const args = [];

  while (index < rArray.length) {
    const tk = rArray[index];
    if (tk.value === "(") {
      paramController += 1
    console.log("add")

    }

    if (tk.value === ")") {
      paramController -= 1
      console.log("subtract")

    }
    
    if (paramController <= 0) {
      break
    }
    args.push(tk);

    index += 1;
    
  }

  args.shift()
  const arguments = parser(args)


  return {
    name: name.value,
    arguments: arguments,
    na: index
  };
}

function parser(tk_array) {
  let parsed = [];
  let index = 0;
  while (index < tk_array.length) {

    const token = tk_array[index];
    if (token.type === "Number") {
      parsed.push({
        type: "NumericLiteral",
        value: token.value,
      });
      index += 1;

      continue;
    }

    if (token.type === "String") {
      parsed.push({
        type: "StringLiteral",
        value: token.value,
      });
      index += 1;

      continue;
    }

    if (token.type === "Name") {
      const NTOKEN = tk_array[index + 1];
      if (NTOKEN.type === "Parenthesis") {
        // Funtion call
        const expression = functionalParse(tk_array, token);
        parsed.push({
          type: "CallExpression",
          name: expression.name,
          arguments: expression.arguments,
        });

        index += expression.arguments.length + 1;
        // index += expression.na
      } else {
        parsed.push({
          type: "Identifier",
          value: token.value,
        });
      }
      index += 1;
      continue;
    }

    index += 1;
    
  
  }

  return parsed;
}
const tokens = tokenize(`
say("Hello" input("Hello World" ) input("Hello World" ) )
say("Hello" )
`);
// console.log("tokens: ", tokens);
const parsed = parser(tokens);
// console.log("parsed: ", parsed[0].arguments[1].arguments);