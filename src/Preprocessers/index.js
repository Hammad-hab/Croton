const cluster = require("cluster")
const { Exception } = require("../exceptionUtility");
const os = require("os");
const { pid } = require("process");
const {tokenize} = require("../lexer")
const fs = require("fs")

const { enable, disable, PR_EN_EXTENSIONS } = require("./enable");

const PREPROCESSORZ = {
    enable,
    disable,
    parserlog: (value="") => {
        if (!value) new Exception(0, `Error at @parserlog preprocessor. Cannot log NULL`).throw()
        value = value.replaceAll("-", " ")
        console.log(value)
    },
    include: (File="") => {
        if (File.includes('"')) File = File.replaceAll('"', "")
        if (File.includes('"')) File = File.replaceAll("'", "")
        try {
            var file = tokenize(fs.readFileSync(File, "utf-8"))
        } catch (e) {
            return new Exception(-1, `Broken <include>. Cannot import ${file} beacause it is EITHER non-existant or broken.`).throw()
        }
        return file
    },
    abort: (value) => {
        if (!value) value = "Aborting..."
        new Exception(-1, `Program Forcefully exited with the following message:\n      ${value}`).throw()
    },
    multithread(value) {
        new Exception(-1, "Multithreading preprocessor is yet under beta testing. For now it is not usable").throw()
        if (typeof value === "string") value = parseInt(value)
        const MAX_CPUS = os.cpus().length
        if (MAX_CPUS < 3) {
            return new Exception(
                0,
                `Your CPU doesn't support multithreading optomisation as it only has ${MAX_CPUS} cores. To use multithreading you need at least 3.`
              ).throw();
        }
        if (cluster.isPrimary) {
            if (value > MAX_CPUS - 1) {
                return new Exception(
                    0,
                    `Amount of CPU cores to utlise is too great. Using ${value} cores when your CPU has only ${MAX_CPUS} is risky.`
                  ).throw();
            } else {
                cluster.fork()
            }
        } 
    },
    sharedMemoryRead(name) {
        // const FILE = require("../shar")
        const file = fs.readFileSync("./sharedfile.toml", "utf-8")
        console.log(file)
    }
}
module.exports = {
    PREPROCESSORZ,
    PR_EN_EXTENSIONS
}
