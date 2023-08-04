const { Exception } = require("./exceptionUtility");
const { Enviornment } = require("./std");
const { evaluate } = require("./evaluator");
const fs = require("fs");
const { tokenize } = require("./lexer");
function using(module) {
  const data = fs.readFileSync(module, { encoding: "utf-8" });
  const tk = tokenize(data);
  let pr = parser(tk);
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
    len: args.length,
  };
}

class CrotonFunction {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    this.contents = null;
  }

  addContents(contents) {
    this.lengthTKContext = contents.length;
    this.contents = parser(contents);
    this.lengthPRContext = this.contents.length;
  }
  __execute(...args) {
    // console.log(args[0].name);
    let variables = [];

    args.forEach((v, i) => {
      // typeof v === "function"
      let value = 0
      if (typeof v === "string") {
        value = `'${v}'`
      } else if (typeof v === "function") {
        value = v.sName
      }
      else {
        value = v
      }
      const tk = tokenize(
        `arg${i} = ${value}`
      )
      const pr = parser(tk)

      variables.push(...pr)
    });
    // console.log(variables);
    variables.push(...this.contents);
    let doesReturn = true;
    let hasScope = true;
    if (this.type === "VOID_FN") {
      doesReturn = false;
      hasScope = false;
    }
    if (this.type === "RETN_FN") {
      doesReturn = true;
      hasScope = false;
    }
    const d = evaluate(variables, true, true);
    // console.log(d);

    if (doesReturn) {
      return d;
    } else {
      return "undef";
    }
  }
  declare() {
    const crFunction = this;

    Enviornment.explicitDefine(this.name,crFunction.__execute);
    Enviornment[this.name].sName = this.name
    crFunction.envInstance = Enviornment[this.name];
  }
}

function parser(tk_array) {
  let parsed = [];
  let index = 0;
  let compiledFunctions = {};
  while (index < tk_array.length) {
    const token = tk_array[index];
    if (
      tk_array[index + 1] &&
      tk_array[index + 1].type === "Symbol" &&
      (tk_array[index + 1].value === ">" ||
        tk_array[index + 1].value === "<" ||
        tk_array[index + 1].value === "~" ||
        tk_array[index + 1].value === ":" ||
        tk_array[index + 1].value === "&")
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

      index += 4;
      continue;
    }

    if (token.type === "Name") {
      const NTOKEN = tk_array[index + 1];
      token.parsed = true;

      if (token.value === "declare") {
        const functionType = NTOKEN.value;
        const functionName = tk_array[index + 2].value;
        const functionExecutable = new CrotonFunction(
          functionName,
          functionType
        );
        compiledFunctions[functionName] = functionExecutable;
        let expStart = tk_array[index + 3];
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
          // console.log(functionExecutable.lengthPRContext)
          index += functionExecutable.lengthPRContext + rindex;
          tk_array[index] = { type: "Name", value: functionExecutable.name };
          continue;
        } else {
          new Exception(
            NTOKEN.position,
            `Unexpected token ${NTOKEN.value} at ${NTOKEN.position}. Broken attempt to declare function`
          ).throw();
        }
      }

      if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "=") {
        const name = token.value;
        let targets = tk_array.slice(index + 2, tk_array.length);
        const assignee = parser(targets);
        parsed.push({
          type: "VariableDeclaration",
          name,
          assignee: assignee[0],
        });
        if (assignee[0].type === "Function") index += assignee[0].__length;
        index += 3;
        continue;
      }

      if (NTOKEN && NTOKEN.type === "Parenthesis") {
        const expression = functionalParse(tk_array, token);
        let declarer = "undef";
        if (expression.name in compiledFunctions) {
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
        index += expression.na + 1;
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
