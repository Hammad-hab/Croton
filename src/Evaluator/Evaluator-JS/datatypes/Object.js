const Abstract = (property, object) =>
  object[property] ? object[property] : object;
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


	constructor(value, name, type="", ...args) {
		this.value = value;
		this.name = name;
		this._type = type;
		this.strong = false;
		this.masterSCOPEID = null
		if (this._type.toLowerCase() === "string") {
			this.public = new String(this)
		}
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

const String = class {
	constructor (object=new Object()) {
		this.__obj = object
	}

	replaceStr(s1, s2) {
		s1 = Abstract("value", s1)
		s2 = Abstract("value", s2)
		return this.__obj.value.replace(s1, s2)
	}

	replaceAllStr(s1, s2) {
    
		s1 = Abstract("value", s1)
		s2 = Abstract("value", s2)
		return this.__obj.value.replaceAll(s1, s2)
	}

	index(subStr) {
		subStr = Abstract("value", subStr)
		return this.__obj.value.indexOf(subStr)

	}

	rmIndex(index) {
		index = Abstract("value", index)
		const v = this.__obj.value[index]
		return v[index] = null
	}

	split(s) {
		s = Abstract("value", s)

		return this.__obj.value.split(s)
	}

	startsWith(str) {
		str = Abstract("value", str)

		return this.__obj.value.startsWith(str)
	}
	endsWith(str) {
		str = Abstract("value", str)

		return this.__obj.value.endsWith(str)
	}
	has(str) {
		str = Abstract("value", str)

		return this.index(str)
	}

	strip() {
		return this.__obj.value.trim()
	}

	bstrip() {
		return this.__obj.value.trimEnd()
	}

	fstrip() {
		return this.__obj.value.trimStart()
	}

	cut(i1=0, i2) {
		i1 = Abstract("value", i1)
		i2 = Abstract("value", i2)

		return this.__obj.value.slice(i1, i2 ? i2: this.__obj.value.length)
	}

	len() {
		return this.__obj.value.length
	}

}

module.exports = {
	Object,
};
