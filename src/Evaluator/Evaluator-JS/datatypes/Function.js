const { uniqueId } = require("lodash");
const { Scope } = require("../scope");
const STD = require("../stdlib");
const lexLib = require("../../../lexer");
const parseLib = require("../../../parser");

class Function {
  static CALLED = 0;
  constructor(name, argLength, SCOPE) {
    this.argLength = argLength;
    this.name = name;
    this.SCOPE = SCOPE;
  }

  setToken(parsedToken) {
    this.contents = parsedToken.contents;
    this.fnName = parsedToken.name;
  }

  setEvaluator(evaluate) {
    this.evaluate = evaluate;
  }

  initalizeParameters(...args) {
    for (const content of this.contents) {
      if (!content) continue;
      if (content.type === "Identifier" && content.name === "Argument") {
        const generic = this.contents.indexOf(content);
        const name = this.contents[generic + 1].name;
        const argumentIndex = parseInt(
          this.contents[generic + 3].name.replace("arg", "")
        );

        if (typeof args[argumentIndex] === "undefined") {
          new Exception(
            line,
            `Function ${this.fnName} expected ${argumentIndex + 1} argument${
              argumentIndex + 1 > 1 ? "s" : ""
            }, got ${args.length} instead`
          ).throw();
        }
        this.SCOPE.define(name, args[argumentIndex]);
        delete this.contents[generic];
        delete this.contents[generic + 1];
        delete this.contents[generic + 2];
        delete this.contents[generic + 3];
        continue;
      }
    }
  }

  def() {
    this.SCOPE.define(this.fnName, this.call.bind(this));
  }
   call(...Arguments) {
     
     const contents = [...this.contents];
     Arguments.forEach((v,i) => {

       this.SCOPE.define("Arg" + i, Arguments[i])
     })
      return this.evaluate(contents, this.SCOPE, "FN", Arguments);
    }
}

module.exports = {
  Function,
};
