const { exit } = require("node:process");
class Exception {
  static PREV_M = false;

  constructor(at, message) {
    this.message = `Error at ${at}:\n${message}`;
  }

  throw() {
      console.log(`\x1b[31m${this.message}\x1b[0m`);
    if (!Exception.PREV_M) {
      exit(1);
    }
  }
}

module.exports = {
  Exception,
};

// \x1b[31m${text}\x1b[0m