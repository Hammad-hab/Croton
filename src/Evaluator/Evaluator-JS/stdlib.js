const { globalScope } = require("./scope");
const { Object } = require("./datatypes/Object");
const _ = require("lodash");
const fs = require("fs");
const { Exception } = require("../../exceptionUtility");
// const { FFI } = require("bun:ffi");
// console.log(process.fgets)

const Abstract = (property, object) =>
  object instanceof Object ? object[property] : object;
const refine = (...args) => {
  for (let argument of args) {
    args[args.indexOf(argument)] = Abstract("value", argument);
  }
  return args;
};
// const ffi = new FFI()
// const inputlnFunction = ffi.loadFunction("./csource.so", "inputln");

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
  if (name in reservedWords) {
    new Exception(
      "_",
      `Cannot name a variable "${name}", it is a reserved Word. Please check the documentation for the reserved words.`
    );
  }
  value = Abstract("value", value);
    // console.log(value)
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
              else: fn => {
                if (isElseCallable) fn()
              },
              elseif: (condition) => {
                return globalScope.get("if")(condition)
              }
            }
          }
          
          return base
        },
      },
    };
  });

  globalScope.define("while", (condition, callback) => {
    while(condition) {
      callback()
    }
  })

  globalScope.define("True", true);
  globalScope.define("is_equal", (v1, v2) => {
    return Abstract("value", v1) === Abstract("value", v2);
  });

  globalScope.define("NOT", (v1) => {
    return !Abstract("value", v1)
  });

  globalScope.define("println", (...objects) => {
    let value = ``;
    for (const arg of objects) {
      if (arg instanceof Object) {
        const repr = Abstract("value", Abstract("value", arg));
        value += repr;
      } else {
        value += arg.value ? String(arg.value) : String(arg);
      }
    }
    console.log(value);
  });

  /* Mathematical Functions */
  globalScope.define("sum", (...args) => {
    // console.log(args)
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
  globalScope.define("concat", (v1, v2, joinUsing = "") => {
    const v_1 = Abstract("value", v1);
    const v_2 = Abstract("value", v2);
    return v_1 + Abstract("value", joinUsing) + v_2;
  });

  globalScope.define("CROTON", globalScope.self);
  globalScope.define("defaultEncoding", "utf-8");
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
      Consts: {
        PI: Math.PI,
        pi: 3.142,
        e: 2.71,
        E: Math.E,
      },
    },
  });

  globalScope.define("File", {
    public: {
      read: (name) => {
        name = Abstract("value", name);
        return fs.readFileSync(name, globalScope.get("defaultEncoding"));
      },
      write: (name, content) => {
        name = Abstract("value", name);
        content = Abstract("value", content);

        return fs.writeFileSync(name, content);
      },
      append: (name, content) => {
        name = Abstract("value", name);
        content = Abstract("value", content);
        return fs.appendFileSync(name, content);
      },
      // read(name)  {
      //   name = Abstract("value", name);
      //   const file = Bun.file(name)
      // }
    },
  });

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
