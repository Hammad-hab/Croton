const ffi = require("ffi")
const __PATH = `./cbuild/stdio.${ffi.suffix === "dylib" ? "so" : ffi.suffix}`
const {toCString,FromCString} = require("../utils")

const STDIO = ffi.dlopen(__PATH, {
	inputln: {
		returns: ffi.FFIType["char*"], 
		args: ["char*"]
	}
}).symbols

const inputln = (prompt) => FromCString(STDIO.inputln(toCString(prompt)))


module.exports = {
    inputln
}