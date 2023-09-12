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
  /* if (parsedToken.type === "VariableDeclaration") {
     return scope.define(parsedToken.name, evaluate(parsedToken.assignee, scope));
  } */

  if (parsedToken.type === "FunctionDeclaration") {
    const fn = globalScope.define(parsedToken.name, (...args) => {
      return SpawnEvaluator(parsedToken.contents)
    })
     return fn
  }

  if (parsedToken.type === "Identifier") {
    const obj = scope.strictSearch(parsedToken.name)
    return new Object(obj, parsedToken.name, parsedToken.type)
  }
  if (parsedToken.type === "ObjectAccessPoint") {
    const baseAccessor = parsedToken.accessors[0]
    parsedToken.accessors.shift()
    const object = scope.strictSearch(baseAccessor.name)
    let target = object
    for (let acc of parsedToken.accessors) {
        if (acc.type === "Identifier") {
           target = target[acc.name]
        } else {
          target = target[acc.value]
        }
    }
  
    return new Object(target, Object.UNDEF, "Identifier")
  }
  
  if (parsedToken) {
    const object = new Object(parsedToken.value, Object.UNDEF, parsedToken.type)
    return object
  }
 }
}

function SpawnEvaluator(parsedTokens, scope=globalScope) {
  // console.log(parsedTokens)

  let line = 1
  let Scope = scope
  for (const parsedToken of parsedTokens) {
      evaluate(parsedToken, Scope, line)
      line += 1
  }
}

module.exports = {
  evaluate, SpawnEvaluator
}