const child_process = require("child_process")
const {refine} = require("../Evaluator/Evaluator-JS/stdlib")
const {exec} = child_process
const fs = require("fs-extra")
const os = require("os")
function _ (fn, ...args) {
	return fn(...refine(...args))
}


module.exports = {
	os: {
		public: {
			systeme: (command) => _(exec, command),
            getcwd: () => process.cwd(),
            chdir: (dir) => _(process.chdir, dir),
            mkdir: (name) => _(fs.mkdirSync, name),
            rmdir: (dir) => _(fs.rmdirSync, dir),
            rmf: (file) => _(fs.rmSync, file),
            cp: (file1, file2) => fs.cpSync(file1, file2),
            chmod: (fl, mod) => fs.chmodSync(fl, mod),
            platform: {
                userInf: os.userInfo("utf-8"),
                gcpus: os.cpus(),
                basedir: os.homedir(),
                platform: os.platform(),
                host: os.hostname(),
                machine: os.machine(),
                rel: os.release(),
                version: os.version(),
                frmemory : os.freemem(),
                kernType: os.type()
            }
		}
	}
}
