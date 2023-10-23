// const _USING_BUN = true;
const cluster = require("cluster")
const inputln = require("readline-sync")
const { Object } = require("./datatypes/Object");
const _ = require("lodash");
const { Exception } = require("../../exceptionUtility");
const Abstract = (property, object) =>
	object instanceof Object ? object[property] : object;
const refine = (...args) => {
	for (let argument of args) {
		args[args.indexOf(argument)] = Abstract("value", argument);
	}
	return args;
};

const reservedWords = [
	"define",
	"_createScope",
	"_switchScope",
	"_deleteScope",
	"_readScope",
	"_getScope",
	"_appendScope",
	"return",
	"Argument",
	"as",
	"if",
	"then",
	"else",
	"elseif",
	"declare",
];

function defineSrc(name, value, scope) {
	name = Abstract(name.type === "Identifier" ? "name" : "value", name);
	if (
		scope.self[name] &&
		scope.self["name"] instanceof Object &&
		scope.self["name"].strong === true
	) {
		new Exception(
			0,
			`Use Aliasing Operator 'as' to modify Strong variables: <value> as ${name}. Please note that Strong variables can only be modified whence they were created.`
		).throw();
	}
	if (name in reservedWords) {
		new Exception(
			"_",
			`Cannot name a variable "${name}", it is a reserved Word. Please check the documentation for the reserved words.`
		);
	}
	value = Abstract("value", value);
	scope.define(name, value);
}

const fetchCondition = (condition, callback=()=> {}, fn=()=> {}) => {
	if (condition instanceof Object) condition = Abstract("value", condition)
		if (condition && condition != Object.UNDEF) {
			fn();
			callback()
		}
		return condition && condition != Object.UNDEF
}

const USE = (globalScope) => {
	globalScope.used = true;
	let vv= false
	globalScope.define("if", (condition, fn) => {
		if (!fn) {
			return {
				public: {
					__ACC: true,
					then: (fn) => {
						let isElseCallable = true;
						fetchCondition(condition, () => isElseCallable = false, fn)
						const base = {
							public: {
								__ACC: true,
								else: (fn) => {
									if (isElseCallable) fn();
								},
								elseif: (condition, fn) => {
								if (fn){
									fetchCondition(condition, () => isElseCallable = false, fn)
								}
								else {
									const d = globalScope.get("if")(condition);
									return d
								} 
							},
							},
						};

						return base
					},
				},
			};
		} else {
			let isElseCallable = true;
			fetchCondition(condition, () => isElseCallable = false, fn)
			const base = {
				public: {
					__ACC: true,
					else: (fn) => {
						if (isElseCallable) fn();
					},
					elseif: (condition, fn) => {
					if (fn){
						fetchCondition(condition, () => isElseCallable = false, fn)
					}
					else {
						const d = globalScope.get("if")(condition);
						return d
					} 
				},
				},
			};

			return base
		}
	});

	globalScope.define("foreach", (array, callback) => {
		array = Abstract("value", array);
		if (Array.isArray(array)) {
			array = refine(...array);
		}
		let i = 0;
		for (let element of array) {
			callback(element);
			i += 1;
		}
	});

	globalScope.define("fork", () => {
		if (cluster.isPrimary) cluster.fork()

	})

	globalScope.define("date", () => new Date())
	globalScope.define("date_now", () => new Date().toLocaleDateString())
	globalScope.define("evaluate", function (contents) {
		const {SpawnExecuter} = require("../../index")
		const _contents = Abstract("value", contents)
		return SpawnExecuter(_contents)
	});
	globalScope.define("ignore", function (fn) {
		Exception.PREV_M = true
		fn()
		Exception.PREV_M = false
	});

	globalScope.define("true", true);
	globalScope.define("false", false);
	globalScope.define("is_equal", (v1, v2) => {
		return Abstract("value", v1) === Abstract("value", v2);
	});

	globalScope.define("is_greater", (v1, v2) => {
		return Abstract("value", v1) > Abstract("value", v2);
	});
	globalScope.define("is_less", (v1, v2) => {
		return Abstract("value", v1) < Abstract("value", v2);
	});
	globalScope.define("is_less_eq", (v1, v2) => {
		return Abstract("value", v1) <= Abstract("value", v2);
	});
	globalScope.define("is_greater_eq", (v1, v2) => {
		return Abstract("value", v1) >= Abstract("value", v2);
	});

	globalScope.define("NOT", (v1) => {
		
		return !Abstract("value", v1) || Abstract("value",v1) === Object.UNDEF;
	});

	globalScope.define("UNDEF", Object.UNDEF)
	globalScope.define("inputln",prompt => inputln.question(Abstract("value", prompt)))

	globalScope.define("println", (...objects) => {
		let value = "";
		for (const arg of objects) {
			if (!arg) continue
			if (arg instanceof Object) {
				const repr = Abstract("value", Abstract("value", arg));
				value += repr;
			} else {
				value += arg.value ? String(arg.value) : String(arg);
			}
		}
		console.log(value);
	});

	/* Mathematical Functions */
	globalScope.define("sum", (...args) => {
		return _.sum(refine(...args));
	});
	globalScope.define("subtract", (...args) => {
		return _.subtract(refine(...args));
	});
	globalScope.define("product", (...args) => {
		return _.multiply(refine(...args));
	});
	globalScope.define("divide", (arg0, arg1) => {
		return _.divide(refine(arg0, arg1));
	});
	globalScope.define("increment", (name) => {
		globalScope.define(Abstract("name", name), globalScope.self[Abstract("name", name)] + 1);

		return;
	});
	globalScope.define("concat", (v1, v2, joinUsing = "") => {
		const v_1 = Abstract("value", v1);
		const v_2 = Abstract("value", v2);
		return v_1 + Abstract("value", joinUsing) + v_2;
	});

	globalScope.define("Math", Math);
	globalScope.define("true", true)
	globalScope.define("false", false)
	globalScope.define("Array", (...args) => {
		return args;
	});
};
module.exports = {
	USE,
	defineSrc,
	Abstract,
	refine,
};
