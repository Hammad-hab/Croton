class Scope {
  constructor(name) {
    this.name = name;
    this.self = {};
    this.innerScopes = [];
    this.has = (v) => this.self.hasOwnProperty(v);
    this.parentScope = null;
    this.define("name", this.name)
  }

  define(proprety, value) {
    this.self[proprety] = value;
    return this.self[proprety]
  }

  assignParent(parentScope) {
    this.parentScope = parentScope;
  }

  get(proprety) {
    return this.self[proprety];
  }
  appendScope(scope) {
    this.innerScopes.push(scope);
    scope.assignParent(this)
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

// const GlobalScope = new Scope("B");
// const LocalScope = new Scope("FD");
// const SiblingLocalScope = new Scope("SC");
// const SubLocalScope = new Scope("SL");
// const SiblingSubLocalScope = new Scope("SL");

// LocalScope.appendScope(SubLocalScope);
// SiblingLocalScope.appendScope(SiblingSubLocalScope);
// GlobalScope.appendScope(LocalScope);
// GlobalScope.appendScope(SiblingLocalScope);
// GlobalScope.define("Lacheve", "Goat");

// console.log(SiblingLocalScope.strictSearch("Lacheve"));
module.exports = {
  Scope,
  globalScope
};
