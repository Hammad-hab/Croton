const { globalScope, Scope } = require("./scope");
const { Exception } = require("../../exceptionUtility");
const { Object } = require("./datatypes/Object");
const STD = require("./stdlib");
const _ = require("lodash");

STD.USE(globalScope);

let SCOPE = globalScope;
let scopes = {
  globalScope,
};
const specialVariables = ["define", "return"];

const specialVariablesExecuter = {
  define: function def(name, value, scope = null) {
    let s_cope;
    if (scope && scope instanceof Scope) s_cope = scope;
    else if (scope) s_cope = scopes[scope];
    else s_cope = SCOPE;
    STD.defineSrc(name, value, s_cope);
    return value;
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
          parsedToken.arguments[0].type = "String";
          parsedToken.arguments[0].value = parsedToken.arguments[0].name;
          return fn(
            evaluate(parsedToken.arguments[0], SCOPE),
            evaluate(parsedToken.arguments[1], SCOPE),
            parsedToken.arguments[2] ? parsedToken.arguments[2].value : null
          );
        default:
          break;
      }
    }

    if (parsedToken.type === "Function") {
      const fn = SCOPE.strictSearch(parsedToken.name);

      parsedToken.arguments.forEach((v, i) => {
        parsedToken.arguments[i] = evaluate(v, SCOPE, line);
      });
      if (fn) {
        if (fn instanceof Object)
           return fn.value(...parsedToken.arguments);
        else return fn(...parsedToken.arguments)
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
            if (!args[argumentIndex])
              new Exception(
                line,
                `Function ${parsedToken.name} expected ${
                  argumentIndex + 1
                } argument${argumentIndex + 1 > 1 ? "s" : ""}, got ${
                  args.length
                } instead`
              ).throw();
            SCOPE.define(name, STD.Abstract("value", args[argumentIndex]));
            parsedToken.contents[generic] = null
            parsedToken.contents[generic + 1] = null
            parsedToken.contents[generic + 2] = null
            parsedToken.contents[generic + 3] = null
          } else {
            validContents.push(content);
          }
        }

        return SpawnEvaluator(validContents, SCOPE, true);
      });
      return fn;
    }

    if (parsedToken.type === "ObjectAccessPoint") {
      const baseAccessor = parsedToken.accessors[0];

      parsedToken.accessors.shift();
      // console.log("Res", evaluate(baseAccessor, SCOPE, line))
      let object;
      if (baseAccessor.type !== "Function") {
        
        object = scope.strictSearch(baseAccessor.name);
      } else {
        object = evaluate(baseAccessor, SCOPE, line);
        if (!("public" in object) && "value" in object) {
          object = object["value"]
        }
        for (const key in object["public"]) {
          object["public"][key] = STD.Abstract("value", object["public"][key]);
        }
      }
      // console.log(object)


      let target = 0;
      if (Array.isArray(object)) {
        target = object;
      } else {
        // console.log(object)
        // if ("value" in object) object = object["value"]
        target = object["public"];
      }
      // console.log(target)
      if (!target)
        new Exception(
          "line " + line,
          `NULL Reference to Identifier ${
            baseAccessor.name
          } When trying to access ${
            parsedToken?.accessors[parsedToken.accessors.length - 1]?.name
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
          if (acc.type === "Function") {
              target = target[acc.name]()
              if (!target) target = 'FN_CALL_NULL'
              if (target["value"] && target["value"]["public"]) {
                 target = target["value"]["public"]
              }

              continue
          }
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

    if (parsedToken.type === "ObjectDeclaration") {
      const obj = {};
      for (const property of parsedToken.properties) {
        obj[property[0]] = evaluate(property[1], SCOPE, line);
      }
      SCOPE.define(parsedToken.name, {
        public: obj,
      });
      // console.log(SCOPE.strictSearch(parsedToken.name))
    }

    if (parsedToken.type === "Identifier") {
      const obj = SCOPE.strictSearch(parsedToken.name);
      if (!obj && typeof obj !== "number" && obj !== 0)
        new Exception(
          "line " + line,
          `NULL Reference to Identifier ${parsedToken.name}`
        ).throw();
      if (typeof obj !== "function")
        return new Object(obj, parsedToken.name, parsedToken.type);
      else return obj;
    }

    if (parsedToken) {
      let value = parsedToken.value;
      const object = new Object(value, Object.UNDEF, parsedToken.type);
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
  let lFunctionRetn;
  let line = 1;

  for (const parsedToken of parsedTokens) {
    if (!parsedToken) continue
    if (
      parsedToken &&
      parsedToken.type === "Identifier" &&
      parsedToken.name === "return" || parsedToken.name === "returnend"
    ) {
      const nextToken = parsedTokens[parsedTokens.indexOf(parsedToken) + 1];
      if (!nextToken) return Object.UNDEF;
      const output =  evaluate(nextToken, SCOPE);
      if (parsedToken.name === "returnend") scopes[SCOPE.name] = null
      return output
    }

    if (
      parsedToken &&
      parsedToken.type === "Identifier" &&
      parsedToken.name === "block"
    ) {
      const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;
      let scope;
      if (name in scopes) {
        SCOPE = scopes[name];
        if (!SCOPE.used) STD.USE(SCOPE);
      } else {
        scope = new Scope(name);
        scopes[name] = scope;
        SCOPE = scope;
        STD.USE(SCOPE);
      }
      parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
      continue;
    }

    if (
      parsedToken &&
      parsedToken.type === "Identifier" &&
      parsedToken.name === "end"
    ) {
      const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;
      if (name === "globalScope") {
        require("../../Preprocessers/index").PREPROCESSORZ.abort(
          "GlobalScope was deleted, the interpreter could not retreat to another base scope"
        );
      }
      if (name in scopes) {
         scopes[name] = null;
      }
      parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
      continue;
    }
    if (
      parsedToken &&
      parsedToken.type === "Identifier" &&
      parsedToken.name === "append"
    ) {
      const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;

      if (name in scopes) {
        scopes[name].appendScope(SCOPE);
      }
      parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
      continue;
    }
    if (
      parsedToken &&
      parsedToken.type === "Identifier" &&
      parsedToken.name === "as"
    ) {
      const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].name;
    
      SCOPE.define(name, STD.Abstract("value", lFunctionRetn))
      parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null
      // parsedToken
      continue;
    }
    lFunctionRetn = evaluate(parsedToken, SCOPE, line);
    line += 1;
  }
  if (callback) callback();
}

module.exports = {
  evaluate,
  SpawnEvaluator,
};
