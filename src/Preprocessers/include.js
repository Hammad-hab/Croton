const os = require("os");
const { tokenize } = require("../lexer");
const fs = require("fs");
const ffi = require("ffi");
const SCOPE = require("../Evaluator/Evaluator-JS/index").SCOPE;
const { refine, Abstract } = require("../Evaluator/Evaluator-JS/stdlib");
const {stringToAsciiArray, arrayToUint8Array} = require("../utils")


const include = (File = "", function_ds = null) =>  {
    
    if (File.includes('"')) File = File.replaceAll('"', "");
    if (File.includes('"')) File = File.replaceAll("'", "");
    if (File.endsWith(ffi.suffix) || function_ds) {
      const function_info = function_ds.split("-");
      const [function_name, function_ret_type, ...parameters] = function_info;
      if (!File)
        return new Exception(
          -1,
          `Broken <include>. Cannot import ${File} beacause it is EITHER non-existant or broken.`
        ).throw();
      const ds = {};
      ds[function_name] = {};
      ds[function_name]["returns"] = ffi.FFIType[function_ret_type];
      ds[function_name]["args"] = [...parameters];
      const lib = ffi.dlopen(File, ds).symbols;
      for (const key in lib) {
        if (lib[key])
          SCOPE.define(key, (...args) => {
            const pArgs = []
            args.forEach((arg, index) => {
                if (parameters[index].includes("char") | parameters[index].includes("string")) {
                  const Arr = arrayToUint8Array(stringToAsciiArray(Abstract("value", arg)))                 
                   pArgs.push(ffi.ptr(Arr))
                }
            })
            if (function_ret_type === "char*") {
              const c = refine(...pArgs);
              const ascii = ffi.toArrayBuffer(lib[key](...c));
              // Ensure that the `toArrayBuffer` function returns a valid ArrayBuffer
              
              const uint8Array = new Uint8Array(ascii);
              const asciiValues = Array.from(uint8Array);
              return String.fromCharCode(...asciiValues)
            }
          });
      }
      return 0;
    }
    try {
      var file = tokenize(fs.readFileSync(File, "utf-8"));
    } catch (e) {
      return new Exception(
        -1,
        `Broken <include>. Cannot import ${file} beacause it is EITHER non-existant or broken.`
      ).throw();
    }
    return file;
  }

module.exports = {
    include
}