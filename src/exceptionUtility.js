const { exit } = require("node:process");
class Exception {
	static PREV_M = false;
	static Enabled = true

	constructor(at, message) {
		this.message = `Error at ${at}:\n${message}`;
	}

	throw() {
		if (Exception.Enabled){
			console.log(`\x1b[31m${this.message}\x1b[0m`);
		if (!Exception.PREV_M) {
			exit(1);
		}}
	}
}

module.exports = {
	Exception,
};
