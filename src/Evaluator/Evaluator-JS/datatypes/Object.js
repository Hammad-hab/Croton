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
    this.type = type;
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
  type() {
    return this.type
  }
  greaterThan() {}
  lessThan() {}
  notEquals() {}
  execute() {}
}

module.exports = {
  Object,
};
