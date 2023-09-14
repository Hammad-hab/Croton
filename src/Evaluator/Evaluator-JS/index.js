const { globalScope, Scope } = require("./scope");
const { Exception } = require("../../exceptionUtility");
const { Object } = require("./datatypes/Object");
const STD = require("./stdlib");
const _ = require("lodash");
STD.USE();

let SCOPE = globalScope;
let scopes = {
  globalScope,
};
const specialVariables = [
  "define",
  "_createScope",
  "_switchScope",
  "_deleteScope",
  "_readScope",
  "_getScope",
  "_appendScope",
  "return",
];

const specialVariablesExecuter = {
  define: function def(name, value, scope = null) {
    let s_cope;
    if (scope && scope instanceof Scope) s_cope = scope;
    else if (scope) s_cope = scopes[scope];
    else s_cope = SCOPE;

    STD.defineSrc(name, value, s_cope);
    return value;
  },
  _createScope: function def(name) {
    scopes[name.value] = new Scope(name.value);
  },
  _switchScope: function def(name) {
    SCOPE = scopes[name];
  },
  _deleteScope: function def(name) {
    SCOPE = scopes["globalScope"];
    delete scopes[name];
  },
  _appendScope: function def(name, name2) {
    const ScopeOne = scopes[name.value];
    const ScopeTwo = scopes[name2.value];
    ScopeTwo.appendScope(ScopeOne);
  },
  _getScope: function def() {
    return SCOPE.name;
  },
};

function evaluate(parsedToken, scope, line) {
  if (parsedToken) {
    if (
      parsedToken.type === "Function" &&
      specialVariables.indexOf(parsedToken.name) !== -1
    ) {
      const fn = specialVariablesExecuter[parsedToken.name];
      switch (parsedToken.name) {
        case "define":
          parsedToken.arguments[0].type = "String"
          parsedToken.arguments[0].value = parsedToken.arguments[0].name
          return fn(
            evaluate(parsedToken.arguments[0], SCOPE),
            evaluate(parsedToken.arguments[1], SCOPE),
            parsedToken.arguments[2] ? parsedToken.arguments[2].value : null
          );
        case "_createScope":
        case "_switchScope":
        case "_deleteScope":
        case "_readScope":
        case "_getScope":
          const args = evaluate(parsedToken.arguments[0], SCOPE);
          return fn(args);
        case "_appendScope":
          const args_ = [
            evaluate(parsedToken.arguments[0], SCOPE),
            evaluate(parsedToken.arguments[1], SCOPE),
          ];
          return fn(...args_);
        default:
          break;
      }
    }
    if (parsedToken.type === "Function") {
      const fn = scope.strictSearch(parsedToken.name);
      parsedToken.arguments.forEach((v, i) => {
        parsedToken.arguments[i] = evaluate(v, scope, line);
      });
      if (fn) {
        return fn(...parsedToken.arguments);
      } else {
        new Exception(line, `Undefined function ${parsedToken.name}.`).throw();
      }
    }

    if (parsedToken.type === "FunctionDeclaration") {
      const fn = SCOPE.define(parsedToken.name, (...args) => {
        const validContents = [];
        for (const content of parsedToken.contents) {
          if (
            content &&
            content.type === "Identifier" &&
            content.name === "Argument"
          ) {
            const generic = parsedToken.contents.indexOf(content);
            const name = parsedToken.contents[generic + 1].name;
            const argumentIndex = parseInt(
              parsedToken.contents[generic + 3].name.replace("arg", "")
            );
            if (!args[argumentIndex]) new Exception(line, `Function ${parsedToken.name} expected ${argumentIndex + 1} argument${argumentIndex + 1 > 1 ? "s" : ""}, got ${args.length} instead`).throw()
            SCOPE.define(name, args[argumentIndex].value);
            delete parsedToken.contents[generic];
            delete parsedToken.contents[generic + 1];
            delete parsedToken.contents[generic + 2];
            delete parsedToken.contents[generic + 3];
          } else {
            validContents.push(content);
          }
        }

       return SpawnEvaluator(validContents, SCOPE, true);
      });
      return fn;
    }

    if (parsedToken.type === "Identifier") {
      const obj = SCOPE.strictSearch(parsedToken.name);
      if (!obj)
        new Exception(
          "line " + line,
          `NULL Reference to Identifier ${parsedToken.name}`
        ).throw();
      return new Object(obj, parsedToken.name, parsedToken.type);
    }
    if (parsedToken.type === "ObjectAccessPoint") {
      const baseAccessor = parsedToken.accessors[0];
      parsedToken.accessors.shift();
      const object = scope.strictSearch(baseAccessor.name);
      let target;
      if (Array.isArray(object)) {
         target = object
      } else {
         target = object["public"];
      }
      if (!target)
        new Exception(
          "line " + line,
          `NULL Reference to Identifier ${
            baseAccessor.name
          } When trying to access ${
            parsedToken.accessors[parsedToken.accessors.length - 1].name
          }`
        ).throw();
      for (let acc of parsedToken.accessors) {
        if (!target)
          new Exception(
            "line " + line,
            `NULL Reference to Identifier ${
              baseAccessor.name
            } When trying to access ${
              parsedToken.accessors[parsedToken.accessors.length - 1].name
            }`
          ).throw();
        if (acc.type === "Identifier") {
          target = target[acc.name];
        } else {
          if (!target)
            new Exception(
              "line " + line,
              `NULL Reference to Identifier ${
                baseAccessor.name
              } When trying to access ${
                parsedToken.accessors[parsedToken.accessors.length - 1].name
              }`
            ).throw();
          target = target[acc.value];
        }
      }

      if (!target)
        new Exception(
          "line " + line,
          `NULL Reference to Identifier ${
            baseAccessor.name
          } When trying to access ${
            parsedToken.accessors[parsedToken.accessors.length - 1].name
          }`
        ).throw();

      return new Object(target, Object.UNDEF, "Identifier");
    }

    if (parsedToken) {
      let value = parsedToken.value
      const object = new Object(
       value,
        Object.UNDEF,
        parsedToken.type
      );
      return object;
    }
  }
}

function SpawnEvaluator(
  parsedTokens,
  scope = globalScope,
  isFunctionEvaluation = false,
  callback = null
) {
  let line = 1;
  let Scope = SCOPE;

  for (const parsedToken of parsedTokens) {
    if (parsedToken && parsedToken.type === "Identifier" && parsedToken.name === "return") {
      const nextToken = parsedTokens[parsedTokens.indexOf(parsedToken) + 1];
      if (!nextToken) return Object.UNDEF
      return evaluate(nextToken, SCOPE)
    }
    evaluate(parsedToken, Scope, line);
    line += 1;
  }
  if (callback) callback();
}

module.exports = {
  evaluate,
  SpawnEvaluator,
};
