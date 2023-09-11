const { globalScope } = require("./scope");
const {Object} = require("./datatypes/Object")
require("./stdlib")()

function evaluate(parsedToken, scope, line) {
 if (parsedToken) {
  if (parsedToken.type === "Function") {
    const fn = scope.strictSearch(parsedToken.name);
    parsedToken.arguments.forEach((v, i) => {
      parsedToken.arguments[i] = evaluate(v, scope);
    });
    if (fn) {
      return fn(...parsedToken.arguments);
    }
  }
  if (parsedToken.type === "VariableDeclaration") {
     return scope.define(parsedToken.name, evaluate(parsedToken.assignee, scope));
  }
  if (parsedToken.type === "Identifier") {
    const obj = scope.strictSearch(parsedToken.name)
    return new Object(obj, parsedToken.name)
  }
  if (parsedToken) {
    const object = new Object(parsedToken.value, Object.UNDEF)
    return object
  }
 }
}

function SpawnEvaluator(parsedTokens) {
  let line = 1
  let Scope = globalScope
  for (const parsedToken of parsedTokens) {
      evaluate(parsedToken, Scope, line)
      line += 1
  }
}

module.exports = {
  evaluate, SpawnEvaluator
}