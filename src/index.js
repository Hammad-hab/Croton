const {parse} = require("./parser")
const {SpawnEvaluator} = require("./Evaluator/Evaluator-JS/index")
const {tokenize} = require("./lexer")
const fs = require("fs")

const SpawnExecuter =  function (contents) {
      const Contents = parse(tokenize(contents))
      return  SpawnEvaluator(Contents)
}
const SpawnFileBasedExecuter = function (file_name) {
      const contents = fs.readFileSync(file_name)
      if (contents)
         return SpawnExecuter(contents)

}

module.exports = {
    SpawnFileBasedExecuter,
    SpawnExecuter,
    parse,tokenize
}