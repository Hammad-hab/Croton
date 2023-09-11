class Object {
      static UNDEF = "UNDEF$_%@!$!$%!@$D@$%tjn414##UNDEF"
      static TRUE = true
      static FALSE = false
      static isFalsy = (value) => {
          if (value === Object.UNDEF) {
             return true
          } else if (value === Object.TRUE) {
            return false
          } else if (value === Object.FALSE) {
            return true
          }
      }

      constructor (value, name, ...args) {
        this.value = value
        this.name = name
      }

      $repersent$() {
        return this.value
      }
      $equals$ (value) {
        if (this.value === value) {
          return Object.TRUE
        }
      }
      $greaterThan$ () {}
      $lessThan$ () {}
      $notEquals$ () {}
      $execute$() {}
}


module.exports = {
    Object
}