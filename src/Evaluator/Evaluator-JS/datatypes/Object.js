class Object {
  static UNDEF = "UNDEF%@!!%!@D@%tjn414##UNDEF";
  static TRUE = true;
  static FALSE = false;
  static isFalsy = (value) => {
    if (value === Object.UNDEF) {
      return true;
    } else if (value === Object.TRUE) {
      return false;
    } else if (value === Object.FALSE) {
      return true;
    }
  };


  constructor(value, name, type, ...args) {
    this.value = value;
    this.name = name;
    this._type = type;
    this.strong = false;
    this.masterSCOPEID = null
  }

  repersent() {
    if (typeof this.value !== "function") return this.value;
    else return "[ƒunction-expression]"
  }
  equals(value) {
    if (this.value === value) {
      return Object.TRUE;
    }
  }
  unsafeRepersentation() {
    if (this._type === "String"){
      return `"${this.value}"`
    }
    else return this.repersent()
  }
  type() {
    return this._type
  }
  greaterThan() {}
  lessThan() {}
  notEquals() {}
  execute() {}
}

module.exports = {
  Object,
};