const {parse} = require("./parser")
const {Bytecode} = require("./bytecode")
// const {SpawnEvaluator} = require("./Evaluator/Evaluator-JS/index")
const {tokenize} = require("./lexer")
const fs = require("fs")
const maps = {
	"CALL_FN": 0,
	"LOAD_ARG": 1,
	"LOAD_ARG_IDENTIFIER": 2,
	"LOAD_VALUE": 3,
}
const AstGen = (contents) => {
	const Contents = parse(tokenize(contents))
	const AST_FN_HOIST = []
	const AST_FN = []
	for (const item of Contents) {
		if (!item) continue
		if (item.type === "FunctionDeclaration") {
			AST_FN_HOIST.push(item)
			continue
		}
		AST_FN.push(item)
	}
	const bytecode = Bytecode([...AST_FN_HOIST, ...AST_FN])
	return bytecode
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

const Transpile = (file_name, write=true) => {
	const contents = fs.readFileSync(file_name)

	if (contents){
		const t0 = performance.now()
		const asts = AstGen(contents)
		const name = file_name.split(".")[0] + ".ast"
		if (write) {
			fs.writeFileSync(name, asts)
			
		} else {
			return asts
		}
		if (contents.includes("excludeExecutionTime")) return false 
		const t1 = performance.now()
		return t1 - t0
	}
}

module.exports = {
	SpawnFileBasedExecuter,
	SpawnExecuter,
	parse,tokenize,
	AstGen,
	Transpile
}
