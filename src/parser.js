const { Exception } = require("./exceptionUtility");
const { Enviornment } = require("./std");
const { evaluate } = require("./evaluator");
const fs = require("fs");
const { tokenize } = require("./lexer");
function using(module) {
  // console.log(module);
  const data = fs.readFileSync(module, { encoding: "utf-8" });
  const tk = tokenize(data);
  let pr = parser(tk);
  // console.log(pr);

  const targets = [];
  const targetAlias = [];
  pr.forEach((v) => {
    if (
      v.type === "Function" &&
      v.name === "exports" &&
      v.arguments.length > 0
    ) {
      v.arguments.forEach((arg) =>
        arg.type === "Identifier" || arg.type === "Function"
          ? targetAlias.push(arg.name)
          : new Exception(
              0,
              `Attemtping to export a non-exportable object ${arg.value}`
            ).throw()
      );
    }
  });

  // console.log(targetAlias)
  pr.forEach((v) => {
    if (targetAlias.includes(v.name)) {
      targets.push(v);
    }
  });
  return targets;
}

function functionalParse(array, name) {
  const rArray = array.slice(array.indexOf(name) + 1, array.length);
  let index = 0;
  let paramController = 0;
  let fVal = 0;
  const args = [];

  while (index < rArray.length) {
    const tk = rArray[index];

    if (tk.value === "(") {
      paramController += 1;
    }

    if (tk.value === ")") {
      paramController -= 1;
    }

    if (paramController <= 0) {
      fVal = index;
      break;
    }

    args.push(tk);

    index += 1;
  }

  if (paramController > 0) {
    new Exception(
      index,
      `Missing token ")" at ${index}. 
    Lack of closing braces can lead to unexpected behavior therefore the parser has terminated your action`
    ).throw();
  }

  args.shift();
  const arguments = parser(args);

  return {
    name: name.value,
    arguments: Array.isArray(arguments) ? arguments : [arguments],
    na: fVal + 1,
  };
}

// function programaticParse(array, name) {
//   const rArray = array.slice(array.indexOf(name) + 1, array.length - 1);
//   let index = 0;
//   const Name = rArray[0];
//   let body = [];
//   rArray.shift(); // remove the name to prevent it from becoming one of the tokens
//   while (index < rArray.length) {
//     const tk = rArray[index];
//     if (tk.value === "End" && tk.type === "Name") break;
//     if (tk.value === ":" && tk.type === "Symbol") {
//       index += 1;
//       continue;
//     }

//     body.push(tk);
//     index += 1;
//   }
//   body = parser(body);
//   return {
//     length: body.length,
//     name: Name.value,
//     body: body,
//   };
// }

function properticalPrase(array, token) {
  let rArray = array.slice(array.indexOf(token) - 1, array.length);
  // console.log("fr", rArray);
  let index = 0;
  let accessors = [];
  let accessOperatorController = 0;
  while (index < rArray.length) {
    const tk = rArray[index];
    if (tk.value === "|") {
      accessOperatorController += 1;
      index += 1;
      continue;
    }
    if (
      tk.type === "Name" &&
      rArray[index - 1] &&
      rArray[index - 1].value === "|"
    ) {
      accessOperatorController -= 1;
      accessors.push(tk);
      index += 1;
      continue;
    }

    if (
      accessOperatorController <= 0 &&
      rArray[index + 1] &&
      rArray[index + 1].value != "|"
    ) {
      index += 1;
      break;
    }

    index += 1;
  }
  const BaseAccessor = accessors[0];
  // console.log(accessors.slice(1, accessors.length));
  return {
    length: accessors.length,
    base: BaseAccessor,
    accessors: accessors,
  };
}

class CrotanFunction {
  constructor(name) {
    this.name = name;
    this.contents = null;
  }

  addContents(contents) {
    this.contents = parser(contents);
  }
  __execute(...args) {
    const variables = [];
    args.forEach((v, i) => {
      variables.push(
        ...parser(
          tokenize(
            `arg${i} = ${typeof v === "string" ? '"' : ""}${v}${
              typeof v === "string" ? '"' : ""
            }`
          )
        )
      );
    });
    let doesReturn = true;
    if (this.contents[this.contents.length - 1].name === "noreturn") {
      doesReturn = false;
      this.contents = this.contents.slice(0, this.contents.length - 1);
    }
    variables.push(...this.contents);

    const d = evaluate(variables, true);
    const return_v = d[d.length];
    if (doesReturn) {
      return return_v;
    } else {
      return "undef";
    }
    // if
  }
  declare() {
    const crFunction = this;
    Enviornment.explicitDefine(this.name, function (...args) {
      return crFunction.__execute(...args);
    });
  }
}

function parser(tk_array) {
  let parsed = [];
  let index = 0;
  let compiledFunctions = {};
  while (index < tk_array.length) {
    const token = tk_array[index];
    if (token.type === "Name" && token.value === "Begin") {
      index += 1;
      continue;
    }
    if (
      tk_array[index + 1] &&
      tk_array[index + 1].type === "Symbol" &&
      (tk_array[index + 1].value === ">" || tk_array[index + 1].value === "<" ||tk_array[index + 1].value === "~" )
    ) {
      // conditional
      const comparitiveA = parser([token])[0];
      let targets = tk_array.slice(index + 2, tk_array.length);
      const parsedNextCondition = parser(targets)[0];

      parsed.push({
        type: "Conditional",
        operation: tk_array[index + 1].value,
        A: comparitiveA,
        B: parsedNextCondition,
      });

      // console.log(tk_a`rray[index + 1]);
      index += 4;
      continue;
    }

    if (token.type === "Name") {
      const NTOKEN = tk_array[index + 1];
      token.parsed = true;

      if (token.value === "declare") {
        const functionName = NTOKEN.value;
        const functionExecutable = new CrotanFunction(functionName);
        compiledFunctions[functionName] = functionExecutable;
        let expStart = tk_array[index + 2];
        if (expStart.type === "Symbol" && expStart.value === "{") {
          const rArray = tk_array.slice(
            tk_array.indexOf(NTOKEN) + 1,
            tk_array.length
          );
          let rindex = 0;
          const tokens = [];
          while (rindex < rArray.length) {
            const tk = rArray[rindex];
            if (tk.value === "}" && tk.type === "Symbol") break;
            tokens.push(tk);
            rindex += 1;
          }
          functionExecutable.addContents(tokens);
          functionExecutable.declare();
          index += 3 + rindex;
          continue;
        } else {
          new Exception(
            NTOKEN.position,
            `Unexpected token ${NTOKEN.value} at ${NTOKEN.position}`
          ).throw();
        }
      }

      if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "|") {
        const expression = properticalPrase(tk_array, NTOKEN);
        parsed.push({
          type: "ObjectAccessor",
          acc: expression.accessors,
          base: expression.base,
        });
        index += expression.length + 2;
        continue;
      }

      if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "=") {
        const name = token.value;
        let targets = tk_array.slice(index + 2, tk_array.length);
        const assignee = parser(targets);
        // console.log(targets);

        parsed.push({
          type: "VariableDeclaration",
          name,
          assignee: assignee[0],
        });
        // index += 2
        if (assignee[0].type === "Function") index += assignee[0].__length;
        // if (assignee[0].type === "ObjectAccessor") index += assignee[0].lp;
        index += 3;
        continue;
      }

      if (NTOKEN && NTOKEN.type === "Parenthesis") {
        // Funtion call
        const expression = functionalParse(tk_array, token);
        let declarer = "undef";
        if (expression.name in compiledFunctions) {
          //  compiledFunctions
          declarer = {
            content: compiledFunctions[expression.name],
          };
        }
        parsed.push({
          type: "Function",
          name: expression.name,
          arguments: expression.arguments,
          __length: expression.na,
          __declarer: declarer,
        });

        index += expression.na;
      } else {
        parsed.push({
          type: "Identifier",
          name: token.value,
        });
        index += 1;
      }

      continue;
    }

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

    index += 1;
  }
  // console.log(parsed)
  copiedParsed = [];
  parsed.forEach((v) => {
    if ((v.type === "Function" && v.name === "using") || v.name === "exports") {
      if (v.name === "using") {
        const importedTargets = using(v.arguments[0].value);

        copiedParsed.push(...importedTargets);
      }
    } else {
      copiedParsed.push(v);
    }
  });

  return copiedParsed;
}

module.exports = {
  parser,
};
