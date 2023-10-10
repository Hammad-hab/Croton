const { uniqueId } = require("lodash");

class Scope {
  constructor(name) {
    this.name = name;
    this.self = {};
    this.innerScopes = [];
    this.has = (v) => this.self.hasOwnProperty(v);
    this.parentScope = null;
    this.id = uniqueId("ScopeID")
    this.define("name", this.name);
  }

  define(proprety, value) {
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
    if (this.has(proprety)) {
      return this.self[proprety];
    }

    if (this.parentScope) {
      const d = this.parentScope.strictSearch(proprety);
      if (d) return d;
      else return null;
    }

    return null;
  }
}
const globalScope = new Scope("GlobalScope");

module.exports = {
  Scope,
  globalScope,
};
