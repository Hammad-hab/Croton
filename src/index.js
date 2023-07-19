const { tokenize } = require("./lexer");
const { parser } = require("./parser");
const { evaluate } = require("./evaluator");

const Tokens = tokenize(`
app.error()
`);
const Parse = parser(Tokens);
const Evaluate = evaluate(Parse)
