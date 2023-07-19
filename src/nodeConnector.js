const {spawn} = require("child_process")
class PyInterfaceCreator {
    constructor (file) {
        this.file = file
    }
    initiate(then, ...args) {
        this.process = spawn("python3", [this.file, ...args])
        this.data = null
        this.process.stdout.on("data", (data) => {
            this.data = data.toString()
            then(data.toString())
        })
    }
    advanceControl(then, ƒunction, ...args) {
        this.process = spawn("python3", [this.file, ƒunction, ...args])
        this.data = null
        this.process.stdout.on("data", (data) => {
            this.data = data.toString()
            then(data.toString())
        }) 
    }
}

const print = new PyInterfaceCreator("./python/output.py")
const socketInitializer = new PyInterfaceCreator("./python/socket.py")

module.exports = {
    print,
    socketInitializer
}