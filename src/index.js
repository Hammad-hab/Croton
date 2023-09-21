const {parse} = require("./parser")
const {SpawnEvaluator} = require("./Evaluator/Evaluator-JS/index")
const {tokenize} = require("./lexer")

const SpawnExecuter = function (contents) {
      const Contents = parse(tokenize(contents))
      // console.log(Contents)
      return SpawnEvaluator(Contents)
}
const SpawnFileBasedExecuter = async function (file_name) {
      const file = Bun.file(file_name)
      const contents =  await file.text()
      if (contents)
         return SpawnExecuter(contents)

}

module.exports = {
    SpawnFileBasedExecuter,
    parse,tokenize
}