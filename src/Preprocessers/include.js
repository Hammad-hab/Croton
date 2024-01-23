const USE_NODE = true
const { tokenize } = require("../lexer");
const path_ = require("path")
const fs = require("fs-extra");
const {stringToAsciiArray, arrayToUint8Array} = require("../utils")
const {Exception} = require("../exceptionUtility")
// const LIBV = require("/usr/local/croton_/crotonlib/lib/__lib.path.js");
// const { globalScope } = require("../Evaluator/Evaluator-JS/scope");
const { FILE } = require("dns");
let ffi;


const include = (File = "") => {
	let path = File.split("/")
	path = path.slice(0, File.length - 1).join("/") + "/"
		if (File.includes('"')) File = File.replaceAll('"', "");
		if (File.includes('"')) File = File.replaceAll("'", "");
		if (File.endsWith(".cro"))
			{
				try {
					const content = fs.readFileSync(`${process.cwd()}/${File}`, "utf-8")
					var file = tokenize(content);
				} catch (e) {
					return new Exception(
						-1,
						`Broken <include>. Cannot import ${file} beacause it is EITHER non-existant or broken.`
					).throw();
				}
				return file;
			}
		else if (File.endsWith(".ast")) {
			try {
				const content = fs.readFileSync(`${process.cwd()}/${File}`, "utf-8")
				var file = JSON.parse(content);
			} catch (e) {
				return new Exception(
					-1,
					`Broken <include>. Cannot import ${file} beacause it is EITHER non-existant or broken.`
				).throw();
			}
			file.ast= true
			return file;
		}
}

const cinclude = (File="", function_ds = null) => {

}
module.exports = {
	include, cinclude
}
