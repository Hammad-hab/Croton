const {parse} = require("./parser")
const {SpawnEvaluator} = require("./Evaluator/Evaluator-JS/index")
const {tokenize} = require("./lexer")
const fs = require("fs")

const AstGen = (contents) => {
	const Contents = parse(tokenize(contents))
	return Contents
}

const SpawnExecuter = function (contents) {
	const Contents = AstGen(contents)
	return SpawnEvaluator(Contents)
}
const SpawnFileBasedExecuter = function (file_name) {
	const contents = fs.readFileSync(file_name)

	if (contents){
		const t0 = performance.now()
		SpawnExecuter(contents)
		if (contents.includes("excludeExecutionTime")) return false 
		const t1 = performance.now()
		return t1 - t0
	}

}

module.exports = {
	SpawnFileBasedExecuter,
	SpawnExecuter,
	parse,tokenize,
	AstGen
}
