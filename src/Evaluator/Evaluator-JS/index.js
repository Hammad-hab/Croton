const { globalScope, Scope } = require("./scope");
const { Exception } = require("../../exceptionUtility");
const { Object } = require("./datatypes/Object");
const { Function } = require("./datatypes/Function");
const STD = require("./stdlib");
const { isBoolean, isNumber } = require("lodash");
STD.USE(globalScope);
let SCOPE = globalScope;
const scopes = {
	globalScope,
};
class Evaluator {
	SCOPE = globalScope;
	scopes = { globalScope };
	specialVariables = ["define", "return"];
	IdentifierLookUpHistory = new Map()
	specialVariablesAllowedExecution = ["return"];
	specialVariablesExecuter = {
		define: function def(name, value, scope = null) {
			let s_cope;
			if (scope && scope instanceof Scope) s_cope = scope;
			else if (scope) s_cope = this.scopes[scope];
			else s_cope = SCOPE;
			if (value instanceof Object) value.owner = s_cope;

			STD.defineSrc(name, value, s_cope);
			return value;
		},
	};

	evaluateFunction(parsedToken, line = 0) {
		if (this.specialVariables.indexOf(parsedToken.name) !== -1) {
			const fn = this.specialVariablesExecuter[parsedToken.name];
			switch (parsedToken.name) {
				case "define":
					const args = parsedToken.arguments;
					args[0].type = "String";
					args[0].value = parsedToken.arguments[0].name;
					return fn(
						this.__call__(args[0], Evaluator.SCOPE),
						this.__call__(args[1], Evaluator.SCOPE),
						args[2] ? args[2].value : null
					);
				default:
					break;
			}
		}
		let fn;
		if (
			this.SCOPE.name === "GlobalScope" &&
			parsedToken.name in this.SCOPE.self
		) {
			fn = this.SCOPE.self[parsedToken.name];
		} else {
			fn = this.SCOPE.strictSearch(parsedToken.name);
		}
		const _arguments = [];
		parsedToken.arguments.forEach((v, i) => {
			if (!v.evaluated)
			_arguments.push(this.__call__(v, this.SCOPE, line));
		});

		if (fn) {
			let data;
			if (fn instanceof Object) data = fn.value(..._arguments);
			else data = fn(..._arguments);
			return data;
		} else {
			new Exception(
				line,
				`Unknown reference to Funtion ${parsedToken.name} which is non-existant`
			).throw();
		}
	}
	
	evaluateIdentifier(parsedToken, line) {
		if (parsedToken.name === "false" || parsedToken.name === "true") {
			return {"false": false, "true": true}[parsedToken.name]
		}
		const FoundUnfoundInstance = this.IdentifierLookUpHistory.get(`${parsedToken.name}-${parsedToken.type}`)
		if (FoundUnfoundInstance) return FoundUnfoundInstance
		var obj = SCOPE.strictSearch(parsedToken.name);
		if (obj instanceof Function) {
			// Handle function call
			return obj();
		}
		if (!obj && typeof obj !== "number" && obj !== 0 && !isBoolean(obj)) {
			new Exception(
				"line " + line,
				`Unknown Reference to Identifier ${parsedToken.name} which is non-existent`
			).throw();
		}

		if ((obj instanceof Object) === false && !obj.isCSObject && !isNumber(obj)) {
			let fObj = new Object(obj, parsedToken.name, parsedToken.type)
			if (this.IdentifierLookUpHistory.size < 5) this.IdentifierLookUpHistory.set(`${parsedToken.name}-${parsedToken.type}`, fObj)
			return fObj;
		} else {
			if (this.IdentifierLookUpHistory.size < 5) this.IdentifierLookUpHistory.set(`${parsedToken.name}-${parsedToken.type}`, obj)
			return obj;
		}
	}

	evalulateSpecialVariables(parsedToken, line) {}
	evaluateObjectDeclaration(parsedToken, line) {
		const obj = {};
		for (const property of parsedToken.properties) {
			obj[property[0]] = this.__call__(property[1], SCOPE, line);
		}
		obj.__ACC = true;
		SCOPE.define(parsedToken.name, {
			public: obj,
			Mut: parsedToken.isMutable,
		});
	}

	evaluateObjectAccessors(parsedToken, line) {
		if (parsedToken.type === "ObjectAccessPoint") {
			let baseAccessor = parsedToken.accessors[0];
			const fsElement = parsedToken.accessors.shift();
			let object;
			if (baseAccessor.type in {"FloatLiteral": 0, "IntegerLiteral": 0, "String": 0}) {
				baseAccessor = this.__call__(baseAccessor)
				object = baseAccessor
			} else {
				if (baseAccessor.type !== "Function") {
					object = this.SCOPE.strictSearch(baseAccessor.name);
				} else {
					object = this.__call__(baseAccessor, SCOPE, line);
					if (!("public" in object) && "value" in object) {

						object = object["value"];
					}
					for (const key in object["public"]) {
						object["public"][key] = STD.Abstract("value", object["public"][key]);
					}
				}
		}
		let target = 0;
		if (Array.isArray(object)) {
			target = object;
		} else {
			if (object.__ACC) {
				target = object
			} else {
			target = object["public"];
			}
		}

		if (!target)
			new Exception(
				"line " + line,
				`NULL Reference to Identifier ${
					baseAccessor.name
				} When trying to access ${
					parsedToken?.accessors[parsedToken.accessors.length - 1]?.name
				}. Thrown by NullTarget`
			).throw();
			for (let acc of parsedToken.accessors) {
			if (!target)
				new Exception(
					"line " + line,
					`NULL Reference to Identifier ${
						baseAccessor.name
					} When trying to access ${
						parsedToken.accessors[parsedToken.accessors.length - 1].name
					}. Thrown by NullAccessor`
				).throw();
			if (acc.type === "Identifier") {

				target = target[acc.name];
			} else {
				if (!target)
					new Exception(
						"line " + line,
						`NULL Reference to Identifier ${
							baseAccessor.name
						} When trying to access ${
							parsedToken.accessors[parsedToken.accessors.length - 1].name
						}. Thrown by Non-Identifier NullAccessor`
					).throw();
				if (acc.type === "Function") {

					target = target[acc.name](...acc.arguments);
					if (!target) {
						target = {};
						continue
					}
					if (target["value"] && target["value"]["public"]) {
						target = target["value"]["public"];
						continue
					}

					continue;
				}
				target = target[acc.value];
			}
			}

			if (!target)
				new Exception(
					"line " + line,
					`NULL Reference to Identifier ${
						baseAccessor.name
					} When trying to access ${
						parsedToken.accessors[parsedToken.accessors.length - 1].name
					} Thrown by NullAccessor Outsource`
				).throw();
			parsedToken.accessors = [fsElement, ...parsedToken.accessors];
			return new Object(target, Object.UNDEF, "Identifier");
		}
	}

	__call__(parsedToken, line) {
		if (!parsedToken) return;

		if (
			parsedToken &&
			parsedToken.type === "Identifier" &&
			parsedToken.name in this.specialVariables
		) {
			return this.evalulateSpecialVariables(parsedToken, line);
		}

		if (parsedToken.type === "Function") {
			return this.evaluateFunction(parsedToken, line);
		}

		if (parsedToken.type === "Identifier") {
			return this.evaluateIdentifier(parsedToken, line);
		}

		if (parsedToken.type === "ObjectDeclaration") {
			return this.evaluateObjectDeclaration(parsedToken, line);
		}

		if (parsedToken.type === "ObjectAccessPoint") {
			return this.evaluateObjectAccessors(parsedToken, line);
		}

		if (parsedToken.type === "FunctionDeclaration") {
			const tmfn = new Function(parsedToken.name, 0, this.SCOPE);
			tmfn.setToken(parsedToken);
			tmfn.setEvaluator(this.__execute__.bind(this));
			tmfn.def();
			return tmfn.call.bind(tmfn);
		}

		if (parsedToken) {
			let value = parsedToken.value;
			const object = new Object(value, Object.UNDEF, parsedToken.type);
			return object;
		}
	}

	__execute__(parsedTokens, SCOPE__, CALLER = "STD") {
		if (SCOPE__) SCOPE = SCOPE__;
		let lFunctionRetn;
		for (let i = 0; i < parsedTokens.length; i++) {
			const parsedToken = parsedTokens[i];
			if (!parsedToken) continue;
			if (
				(parsedToken &&
					parsedToken.type === "Identifier" &&
					parsedToken.name === "return") ||
				parsedToken.name === "returnend"
			) {
				const nextToken = parsedTokens[parsedTokens.indexOf(parsedToken) + 1];
				if (!nextToken) return Object.UNDEF;
				const output = this.__call__(nextToken, SCOPE);
				if (parsedToken.name === "returnend") {
					delete scopes[SCOPE.name];
					SCOPE = scopes["globalScope"];
				}
				return output;
			}
			if (
				parsedToken &&
				parsedToken.type === "Identifier" &&
				parsedToken.name === "as"
			) {
				if (!lFunctionRetn && !isBoolean(lFunctionRetn)) {
					lFunctionRetn = Object.UNDEF
				}
				let name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1];
				if (name.type === "Identifier") {
					name = name.name;
					SCOPE.define(
						name,
							STD.Abstract("value", STD.Abstract("value", lFunctionRetn))
					);

					// console.log(SCOPE.get(name))
				} else if (
					name.type === "ObjectAccessPoint" &&
					SCOPE.get(name.accessors[0]?.name)
				) {
					if (!SCOPE.get(name.accessors[0]?.name).Mut) {
						return new Exception(
							0,
							"Cannot change the value of an immutable Object. To declare a mutable object, use 'Mutable' instead of 'Object'"
						).throw();
					}
					const initalObject = SCOPE.get(name.accessors[0].name);
					let target = initalObject.public;
					name.accessors.forEach((v, i) => {
						if (i === 0) return;
						if (i === name.accessors.length - 1) target[v.name] = lFunctionRetn;
						else target = target[v.name];
					});
					SCOPE.define(name.accessors[0].name, initalObject);
				}

				parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;

				continue;
			} 

			if (
				parsedToken &&
				parsedToken.type === "Identifier" &&
				parsedToken.name === "block"
			) {
				const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;
				let scope;
				if (name in scopes) {
					SCOPE = scopes[name];
					if (SCOPE && !SCOPE.used) STD.USE(SCOPE);
				} else {
					scope = new Scope(name);
					scopes[name] = scope;
					SCOPE = scope;
					STD.USE(SCOPE);
				}
				parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
				continue;
			}

			if (
				parsedToken &&
				parsedToken.type === "Identifier" &&
				parsedToken.name === "end"
			) {
				const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;
				if (name === "globalScope") {
					require("../../Preprocessers/index").PREPROCESSORZ.abort(
						"GlobalScope was deleted, the interpreter could not retreat to another base scope"
					);
				}
				if (name in scopes) {
					scopes[name] = null;
				}
				parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
				continue;
			}
			if (
				parsedToken &&
				parsedToken.type === "Identifier" &&
				parsedToken.name === "parent"
			) {
				const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;

				if (name in scopes) {
					scopes[name].appendScope(SCOPE);
				}
				parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
				continue;
			}

			lFunctionRetn = this.__call__(parsedToken, SCOPE, i);
			this.lastFunctionCall = lFunctionRetn
		}

		SCOPE = globalScope;
	}
}

const _evaluator = new Evaluator();
const SpawnEvaluator = (...args) => {
	try {
		return _evaluator.__execute__.bind(_evaluator)(...args)
	} catch (e) {
		new Exception("INF", `Maximum Interpreter Allocation Exceeded Aborting Operation. This error occurs when a loop runs for too long and the memory stack is full. Currently this error cannot be fixed, we are working really hard to make it work so please stand by.`).throw()
	}
};

module.exports = {
	SpawnEvaluator,
	SCOPE,
};
