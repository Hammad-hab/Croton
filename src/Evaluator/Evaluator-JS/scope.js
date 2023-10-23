const { uniqueId, isBoolean, isNumber } = require("lodash");
const {Object} = require("./datatypes/Object")
class Scope {
	constructor(name) {
		this.name = name;
		this.self = {};
		this.i =1
		this.innerScopes = [];
		this.cached = {}
		this.has = function(v) {
			function check(obj, prop) {
				if (obj.hasOwnProperty(prop)) {
					return true;
				} else if (obj.__proto__ !== null) {
					return check(obj.__proto__, prop);
				} else {
					return false;
				}
			}
			return check(this.self, v);
		};		this.parentScope = null;
		this.id = uniqueId("ScopeID")
		this.define("name", this.name);
	}

	define(proprety, value) {
		// console.log(value)
		if (proprety in this.cached) this.cached[proprety] = value
		if (!value && !isBoolean(value) && !isNumber(value)) value = Object.UNDEF
		this.self[proprety] = value;
		return this.self[proprety];
	}

	assignParent(parentScope) {
		if (parentScope) this.parentScope = parentScope;
	}

	undefine(property) {
		delete this.self[property];
	}

	get(proprety) {
		return this.self[proprety];
	}
	appendScope(scope) {
		if (scope) {
			this.innerScopes.push(scope);
			scope.assignParent(this);
		}
	}

	strictSearch(proprety) {
		if (proprety in this.cached) return this.cached[proprety]
		if (this.has(proprety)) {
			this.cached[proprety] = this.self[proprety]
			return this.self[proprety];
		}

		if (this.parentScope) {
			const d = this.parentScope.strictSearch(proprety);
			if (d) {
				this.cached[proprety] = this.self[proprety]
				return d;
			}
			else return null;
		}
		this.cached[proprety] = null
		return null;
	}
}
const globalScope = new Scope("GlobalScope");

module.exports = {
	Scope,
	globalScope,
};
