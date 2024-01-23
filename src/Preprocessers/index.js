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
	remtoken: (value) => {
		value = value.replaceAll('"', "")
		value = value.replaceAll("'", "")
		console.log('\x1b[33m[CrotonParser >> Warning] Using @remtoken: \n\tIt is not recommended to use @remtoken as it has to be used carefully or it can be destructive.\x1b[0m\n')
		return (token) => {
			if (token && token.value === value) {
				return null
			}
			else return token
		}
	},
	reptoken: (value) => {
		value = value.replaceAll('"', "")
		value = value.replaceAll("'", "")
		value = value.split("-")
		console.log('\x1b[33m[CrotonParser >> Warning] Using @reptoken: \n\tIt is not recommended to use @remtoken as it has to be used carefully or it can be destructive.\x1b[0m\n')
		return (token) => {
			if (token && token.value === value[0]) {
				token.value = value[1]
				// console.log(token.value)
			}
			return token
		}
	}
};
module.exports = {
	PREPROCESSORZ,
	PR_EN_EXTENSIONS,
};
