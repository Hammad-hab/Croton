const { Exception } = require("./exceptionUtility");
const { Enviornment } = require("./std");
const callStack = [];

const functionalEvaluation = (node) => {
  if (!Enviornment[node.name]) {
    return new Exception(
      0,
      `No function named ${node.name} was defined in the Standard Library`
    ).throw();
  }
  const fn = Enviornment[node.name];
  const args = node.arguments.map(rEval)
  return fn(...args);
};
const identifierEvaluation = (node) => {
  if (!Enviornment[node.name]) {
    return new Exception(0, `Undefined Identifier ${node.name}`).throw();
  }
  return Enviornment[node.name];
};

const objectAccessorEvaluation = (token) => {
  // console.log("accessor");
  let value = identifierEvaluation({ name: token.base.value });
  for (const property of token.acc) {
    const name = property.value;
    value = value[name];
  }

  return value? value : value;
};

const rEval = (token) => {
  if (token.type === "Function") return functionalEvaluation(token);
  if (token.type === "Identifier") return identifierEvaluation(token);
  if (token.type === "ObjectAccessor") return objectAccessorEvaluation(token);
  if (token.type === "VariableDeclaration")
    return Enviornment.explicitDefine(token.name, rEval(token.assignee));
  if (token.value) return token.value;
};
const evaluate = (tokens, ret=false) => {
  // console.log(tokens)
  const data = []
  for (const token of tokens) {
      data.push(rEval(token));
  }
  if (ret) return data
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
  Enviornment,
};