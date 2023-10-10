// const _USING_BUN = true;

const { globalScope } = require("./scope");
const { Object } = require("./datatypes/Object");
const _ = require("lodash");
const fs = require("fs");
const { Exception } = require("../../exceptionUtility");
// if (!_USING_BUN) {
//   const inputln = require("readline-sync");
// }
const Abstract = (property, object) =>
  object instanceof Object ? object[property] : object;
const refine = (...args) => {
  for (let argument of args) {
    args[args.indexOf(argument)] = Abstract("value", argument);
  }
  return args;
};

const reservedWords = [
  "define",
  "_createScope",
  "_switchScope",
  "_deleteScope",
  "_readScope",
  "_getScope",
  "_appendScope",
  "return",
  "Argument",
  "as",
  "if",
  "then",
  "else",
  "elseif",
  "declare",
];

function defineSrc(name, value, scope) {
  name = Abstract(name.type === "Identifier" ? "name" : "value", name);
  if (
    scope.self[name] &&
    scope.self["name"] instanceof Object &&
    scope.self["name"].strong === true
  ) {
    new Exception(
      0,
      `Use Aliasing Operator 'as' to modify Strong variables: <value> as ${name}. Please note that Strong variables can only be modified whence they were created.`
    ).throw();
  }
  if (name in reservedWords) {
    new Exception(
      "_",
      `Cannot name a variable "${name}", it is a reserved Word. Please check the documentation for the reserved words.`
    );
  }
  value = Abstract("value", value);
  scope.define(name, value);
}

const USE = (globalScope) => {
  globalScope.used = true;
  globalScope.define("if", (condition) => {
    return {
      public: {
        baseCondition: condition,
        then: (fn) => {
          let isElseCallable = true;
          if (condition) {
            fn();
            isElseCallable = false;
          }

          const base = {
            public: {
              else: (fn) => {
                if (isElseCallable) fn();
              },
              elseif: (condition) => {
                return globalScope.get("if")(condition);
              },
            },
          };

          return base;
        },
      },
    };
  });

  globalScope.define("foreach", (array, callback) => {
    array = Abstract("value", array);
    if (Array.isArray(array)) {
      array = refine(...array);
    }
    let i = 0;
    for (let element of array) {
      callback(element);
      i += 1;
    }
  });

  globalScope.define("True", true);
  globalScope.define("is_equal", (v1, v2) => {
    return Abstract("value", v1) === Abstract("value", v2);
  });
  globalScope.define("is_greater", (v1, v2) => {
    return Abstract("value", v1) > Abstract("value", v2);
  });
  globalScope.define("is_less", (v1, v2) => {
    return Abstract("value", v1) < Abstract("value", v2);
  });
  globalScope.define("is_less_eq", (v1, v2) => {
    return Abstract("value", v1) <= Abstract("value", v2);
  });
  globalScope.define("is_greater_eq", (v1, v2) => {
    return Abstract("value", v1) >= Abstract("value", v2);
  });

  globalScope.define("NOT", (v1) => {
    return !Abstract("value", v1);
  });

  globalScope.define("println", (...objects) => {
    let value = ``;
    for (const arg of objects) {
      if (!arg) continue
      if (arg instanceof Object) {
        const repr = Abstract("value", Abstract("value", arg));
        value += repr;
      } else {
        value += arg.value ? String(arg.value) : String(arg);
      }
    }

    console.log(value);
  });
  // if (!_USING_BUN) {
  //   globalScope.define("inputln", (prompt) => {
  //     return inputln.question(Abstract("value", prompt));
  //   });
  // }

  /* Mathematical Functions */
  globalScope.define("sum", (...args) => {
    return _.sum(refine(...args));
  });
  globalScope.define("subtract", (...args) => {
    return _.subtract(refine(...args));
  });
  globalScope.define("product", (...args) => {
    return _.multiply(refine(...args));
  });
  globalScope.define("divide", (arg0, arg1) => {
    return _.divide(refine(arg0, arg1));
  });
  globalScope.define("increment", (name, arg0 = 1) => {
    globalScope.define(Abstract("name", name), Abstract("value", arg0));
    return;
  });
  globalScope.define("concat", (v1, v2, joinUsing = "") => {
    const v_1 = Abstract("value", v1);
    const v_2 = Abstract("value", v2);
    return v_1 + Abstract("value", joinUsing) + v_2;
  });

  globalScope.define("Math", {
    public: {
      Trig: {
        sin: (value) => {
          value = Abstract("value", value);
          return Math.sin(value);
        },
        cos: (value) => {
          value = Abstract("value", value);
          return Math.cos(value);
        },
        tan: (value) => {
          value = Abstract("value", value);
          return Math.tan(value);
        },
      },
      JSMath: Math,
      Consts: {
        PI: Math.PI,
        pi: 3.142,
        e: 2.71,
        E: Math.E,
      },
    },
  });

  // globalScope.define("File", {
  //   public: {
  //     read: (name) => {
  //       name = Abstract("value", name);
  //       return fs.readFileSync(name, globalScope.get("defaultEncoding"));
  //     },
  //     write: (name, content) => {
  //       name = Abstract("value", name);
  //       content = Abstract("value", content);

  //       return fs.writeFileSync(name, content);
  //     },
  //     append: (name, content) => {
  //       name = Abstract("value", name);
  //       content = Abstract("value", content);
  //       return fs.appendFileSync(name, content);
  //     },
  //   },
  // });

  globalScope.define("Array", (...args) => {
    return args;
  });
};
module.exports = {
  USE,
  defineSrc,
  Abstract,
  refine,
};
