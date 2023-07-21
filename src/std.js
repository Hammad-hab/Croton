const { Exception } = require("./exceptionUtility");
const { print, socketInitializer } = require("./nodeConnector");
const rl = require("readline-sync");
const explicitDefine = (env, name, value) => {
  env[name] = value;
};

const RawProgrammaticEnviornment = {
  pyprint: (...data) => {
    print.initiate((data) => {
      console.log(data);
    }, ...data);
  },
  jsprint: (...data) => {
    console.log(...data);
  },
  jsinput: (prompt) => {
    return rl.question(prompt);
  },
  add: (...nums) => {
    let value = 0;
    nums.forEach((v) => (value += v));
    return value;
  },
  concat: (s1,s2) => {
    return s1 + s2
  },
  subtract: (v1, v2) => v2 - v1,
  div: (v1, v2) => v1 / v2,
  prod: (v1, v2) => v1 * v2,
  explicitDefine,
  False: false,
  True: true,
};

const cloneEnvObject = (env) => {
  const obj = {};
  for (const property in env) {
    obj[property] = env[property];
  }
  return obj;
};

const createEnviornmentUsingProgram = (Program) => {
  if (Program) {
    const clone = cloneEnvObject(RawProgrammaticEnviornment);
    const explicitDefine = (name, value) => {
      if (name.includes(" "))
        return new Exception(
          0,
          "Error at explicitDefine! Variable names cannot contain spaces!"
        ).throw();

      clone[name] = value;
    };
    clone.explicitDefine(clone, "explicitDefine", explicitDefine);
    clone.explicitDefine("app", {
      name: Program.name,
      id: "#" + Math.random().toString().replace(".", ""),
    });

    clone.explicitDefine("explicitRead", (variableName) => {
      return clone[variableName];
    });
    return clone;
  } else {
    new Exception(
      0,
      `Error in evaluation process! 
    Could not create Standard Library because no enclosing program has been defined!
    Please create a program to avoid this error:

    Begin <Program_name>:
        ...
    End
    `
    ).throw();
  }
};
let Enviornment = createEnviornmentUsingProgram({ name: "GlobalPragma" });

module.exports = {
  createEnviornmentUsingProgram,
  Enviornment,
};
