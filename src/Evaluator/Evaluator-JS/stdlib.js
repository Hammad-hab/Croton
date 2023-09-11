const {globalScope} = require("./scope")
const {Object} = require("./datatypes/Object")
const _ = require("lodash")

const Abstract = (property, object) => object instanceof Object ? object[property] : object
const refine = (...args) => {
  for (let argument of args) {
      args[args.indexOf(argument)] = Abstract("value", argument)
  }
  return args
}
const USE = () => {
    globalScope.define("println", (...objects) => {
        let value = ""
        for (const arg of objects) {
         if (arg instanceof Object) {
            value += arg.$repersent$()
         } else {
           value += arg
         }
        }
       console.log(value)
   })
   globalScope.define("define", (name, value) => {
    name = Abstract("value", name)
    value = Abstract("value", value)
    globalScope.define(name, value)
   })

   /* Mathematical Functions */
  
   globalScope.define("sum", (...args) => {
    return _.sum(refine(...args))
   })

   globalScope.define("subtract", (...args) => {
    return _.subtract(refine(...args))
   })
   globalScope.define("product", (...args) => {
    return _.multiply(refine(...args))
   })
   globalScope.define("divide", (arg0, arg1) => {
    return _.divide(refine(arg0, arg1))
   })
   

   
}
module.exports = USE