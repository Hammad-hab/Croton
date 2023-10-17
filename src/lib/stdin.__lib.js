// @bun
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};
// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/utils.js
var require_utils = __commonJS((exports, module) => {
  var escapeSpecialCharacters = function(inputString) {
    const escapeMap = {
      "\x1B": "\\x1b",
      "\t": "\\t",
      "\b": "\\b",
      "\n": "\\n",
      "\r": "\\r",
      "\\": "\\\\"
    };
    const specialCharacterPattern = /(?<!\\)([\\\x1b\t\b\n\r])/g;
    return inputString.replace(specialCharacterPattern, (match) => {
      if (match === "\\") {
        return "\\\\";
      } else {
        return escapeMap[match];
      }
    });
  };
  var replaceASCIIEscapeSequences = function(inputString) {
    const escapeMap = {
      "\\n": "\n",
      "\\t": "\t",
      "\\r": "\r",
      "\\b": "\b",
      "\\f": "\f",
      "\\\\": "\\",
      "\\\'": "\'",
      "\\\"": "\"",
      "\\x1b[0m": "\x1B[0m",
      "\\x1b[31m": "\x1B[31m",
      "\\x1b[32m": "\x1B[32m",
      "\\x1b[33m": "\x1B[33m",
      "\\x1b[34m": "\x1B[34m",
      "\\x1b[35m": "\x1B[35m",
      "\\x1b[36m": "\x1B[36m",
      "\\x1b[37m": "\x1B[37m",
      "\\x1b[41m": "\x1B[41m",
      "\\x1b[42m": "\x1B[42m",
      "\\x1b[43m": "\x1B[43m",
      "\\x1b[44m": "\x1B[44m",
      "\\x1b[45m": "\x1B[45m",
      "\\x1b[46m": "\x1B[46m",
      "\\x1b[47m": "\x1B[47m"
    };
    const escapePattern = /\\[ntrbf\\'"\x1b[0-9;]*m/g;
    return inputString.replace(escapePattern, (match) => escapeMap[match] || match);
  };
  var arrayToUint8Array = function(array) {
    var buffer = new ArrayBuffer(array.length);
    var uint8Array = new Uint8Array(buffer);
    for (var i = 0;i < array.length; i++) {
      uint8Array[i] = array[i];
    }
    return uint8Array;
  };
  var stringToAsciiArray = function(inputString) {
    var asciiArray = [];
    for (var i = 0;i < inputString.length; i++) {
      asciiArray.push(inputString.charCodeAt(i));
    }
    return asciiArray;
  };
  var removeCommonEscapeSequences = function(inputString) {
    const escapeSequences = {
      "\\n": "\n",
      "\\r": "\r",
      "\\t": "\t",
      '\\"': '"',
      "\\\'": "\'",
      "\\\\": "\\"
    };
    for (const escapeSeq in escapeSequences) {
      const replacement = escapeSequences[escapeSeq];
      inputString = inputString.replace(new RegExp(escapeSeq, "g"), replacement);
    }
    return inputString;
  };
  var toCString = function(string) {
    if (string["value"])
      string = string.value;
    const Arr = arrayToUint8Array(stringToAsciiArray(string));
    return ffi.ptr(Arr);
  };
  var FromCString = function(ptr) {
    const ascii = ffi.toArrayBuffer(ptr);
    const uint8Array = new Uint8Array(ascii);
    const asciiValues = Array.from(uint8Array);
    return String.fromCharCode(...asciiValues);
  };
  var ffi = import.meta.require("bun:ffi");
  module.exports = {
    escapeSpecialCharacters,
    replaceASCIIEscapeSequences,
    stringToAsciiArray,
    removeCommonEscapeSequences,
    arrayToUint8Array,
    toCString,
    FromCString
  };
});

// stdin.__lib.js
var require_stdin___lib = __commonJS((exports, module) => {
  var ffi = import.meta.require("bun:ffi");
  var __PATH = ffi.suffix === "dll" ? String.raw`C:\Program Files\croton_\crotonlib\lib\cbuild\stdio.dll` : String.raw`/usr/local/croton_/crotonlib/lib/cbuild/stdio.so`;
  var { toCString, FromCString } = require_utils();
  var STDIO = ffi.dlopen(__PATH, {
    inputln: {
      returns: ffi.FFIType["char*"],
      args: ["char*"]
    }
  }).symbols;
  var inputln = (prompt) => FromCString(STDIO.inputln(toCString(prompt)));
  module.exports = {
    inputln
  };
});
export default require_stdin___lib();
