const { Exception } = require("./exceptionUtility");
const { Enviornment } = require("./std");
let scope = Enviornment
function evaluateCondition(parsedCondition) {
  const operation = parsedCondition.operation;
  if (parsedCondition.A.type && parsedCondition.A.type === "Conditional") {
    parsedCondition.A = evaluateCondition(parsedCondition.A);
  }
  if (parsedCondition.B.type && parsedCondition.B.type === "Conditional") {
    parsedCondition.B = evaluateCondition(parsedCondition.B);
  }
  if (operation === ">") {
    return rEval(parsedCondition.A) > rEval(parsedCondition.B);
  }

  if (operation === "<") {
    return rEval(parsedCondition.A) < rEval(parsedCondition.B);
  }
  if (operation === "~") {
    return rEval(parsedCondition.A) === rEval(parsedCondition.B);
  }
  if (operation === ":") {
    const d1 = rEval(parsedCondition.A);
    const d2 = rEval(parsedCondition.B);
    if (typeof d1 === "string" && typeof d2 === "string") {
      return d2.includes(d1)
    }
    else {
      return new Exception(0, `The in operator ":" expects both operands to be of type STRING.`)
    }
  }
}

const functionalEvaluation = (node) => {
  if (!scope[node.name]) {
    return new Exception(
      0,
      `No function named ${node.name} was defined in the Standard Library`
    ).throw();
  }
  const fn = scope[node.name];
  const args = node.arguments.map(rEval);
  return fn(...args);
};
const identifierEvaluation = (node) => {
  if (typeof scope[node.name] != "number") {
    if (!scope[node.name] && scope[node.name] != false) {
      return new Exception(0, `Undefined Identifier ${node.name}`).throw();
    }
  }
  
  const v = scope[node.name]
    return v
 };

const objectAccessorEvaluation = (token) => {
  // console.log("accessor");
  let value = identifierEvaluation({ name: token.base.value });
  for (const property of token.acc) {
    const name = property.value;
    value = value[name];
  }

  return value ? value : value;
};

const rEval = (token, evfn=false) => {
  if (token.type === "Function") return functionalEvaluation(token);
  if (token.type === "Identifier") return identifierEvaluation(token, evfn);
  if (token.type === "VariableDeclaration") return scope.explicitDefine(token.name, rEval(token.assignee));
  if (token.type === "Conditional") return evaluateCondition(token);
  if (token.type === "FunctionDeclaration") return identifierEvaluation(token)
  if (token.value) return token.value;
};
const evaluate = (tokens, ret=false, evfn=false) => {
  const data = [];
  console.log(tokens);
  for (const token of tokens) {
    if (evfn && (token.type === "Identifier" && token.name === "return")) {  
        const Ntoken = rEval(tokens[tokens.indexOf(token) + 1], evfn)
        return Ntoken
    }
    const d = rEval(token,)
    data.push(d);
  }
  if (ret) return data;
};

const evaluateREPL = (tokens) => {
  const output = [];
  for (const token of tokens) {
    const o = rEval(token);
    output.push(o);
    rEval(token);
  }
  return output.join(" ");
};

module.exports = {
  evaluate,
  rEval,
  evaluateREPL,
  scope,
  Enviornment
};

