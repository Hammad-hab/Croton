const { Exception } = require("../exceptionUtility");


const { enable, disable, PR_EN_EXTENSIONS } = require("./enable");
const { include, cinclude } = require("./include");

const PREPROCESSORZ = {
	enable,
	disable, cinclude,
	parserlog: (value = "") => {
		if (!value)
			new Exception(
				0,
				`Error at @parserlog preprocessor. Cannot log NULL`
			).throw();
		value = value.replaceAll("-", " ");
		console.log(value);
	},
	include,
};
module.exports = {
	PREPROCESSORZ,
	PR_EN_EXTENSIONS,
};
