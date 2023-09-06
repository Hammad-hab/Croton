const { tokenize } = require("../../lexer");
const { parse } = require("../../parser");
const { Scope } = require("./scope");

const scope = new Scope("GlobalScope");
const subScope = new Scope("LocalScope")
scope.define("dftba", console.log);
scope.appendScope(subScope)

function evaluate(parsedToken, scope) {
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
     return scope.define(parsedToken.name, parsedToken.assignee);
  }
  if (parsedToken.type === "Identifier") {
    return scope.strictSearch(parsedToken.name)
  }
  if (parsedToken) return parsedToken.value;

}

const p = parse(
  tokenize(`
    hello = "world"
    dftba(hello)
`)
);
evaluate(p[0], subScope);
evaluate(p[1], subScope);
