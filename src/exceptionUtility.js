const { exit } = require("node:process");
class Exception {
  static PREV_M = false;

  constructor(at, message) {
    this.message = `Error at ${at}.\n${message}`;
  }

  throw() {
    console.log(this.message);
    if (!Exception.PREV_M) {
      exit(1);
    }
  }
}

module.exports = {
  Exception,
};
