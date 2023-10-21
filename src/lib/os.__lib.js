// @bun
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/universalify/index.js
var require_universalify = __commonJS((exports) => {
  exports.fromCallback = function(fn) {
    return Object.defineProperty(function(...args) {
      if (typeof args[args.length - 1] === "function")
        fn.apply(this, args);
      else {
        return new Promise((resolve, reject) => {
          fn.call(this, ...args, (err, res) => err != null ? reject(err) : resolve(res));
        });
      }
    }, "name", { value: fn.name });
  };
  exports.fromPromise = function(fn) {
    return Object.defineProperty(function(...args) {
      const cb = args[args.length - 1];
      if (typeof cb !== "function")
        return fn.apply(this, args);
      else
        fn.apply(this, args.slice(0, -1)).then((r) => cb(null, r), cb);
    }, "name", { value: fn.name });
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS((exports, module) => {
  var patch = function(fs) {
    if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
      patchLchmod(fs);
    }
    if (!fs.lutimes) {
      patchLutimes(fs);
    }
    fs.chown = chownFix(fs.chown);
    fs.fchown = chownFix(fs.fchown);
    fs.lchown = chownFix(fs.lchown);
    fs.chmod = chmodFix(fs.chmod);
    fs.fchmod = chmodFix(fs.fchmod);
    fs.lchmod = chmodFix(fs.lchmod);
    fs.chownSync = chownFixSync(fs.chownSync);
    fs.fchownSync = chownFixSync(fs.fchownSync);
    fs.lchownSync = chownFixSync(fs.lchownSync);
    fs.chmodSync = chmodFixSync(fs.chmodSync);
    fs.fchmodSync = chmodFixSync(fs.fchmodSync);
    fs.lchmodSync = chmodFixSync(fs.lchmodSync);
    fs.stat = statFix(fs.stat);
    fs.fstat = statFix(fs.fstat);
    fs.lstat = statFix(fs.lstat);
    fs.statSync = statFixSync(fs.statSync);
    fs.fstatSync = statFixSync(fs.fstatSync);
    fs.lstatSync = statFixSync(fs.lstatSync);
    if (fs.chmod && !fs.lchmod) {
      fs.lchmod = function(path, mode, cb) {
        if (cb)
          process.nextTick(cb);
      };
      fs.lchmodSync = function() {
      };
    }
    if (fs.chown && !fs.lchown) {
      fs.lchown = function(path, uid, gid, cb) {
        if (cb)
          process.nextTick(cb);
      };
      fs.lchownSync = function() {
      };
    }
    if (platform === "win32") {
      fs.rename = typeof fs.rename !== "function" ? fs.rename : function(fs$rename) {
        function rename(from, to, cb) {
          var start = Date.now();
          var backoff = 0;
          fs$rename(from, to, function CB(er) {
            if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 60000) {
              setTimeout(function() {
                fs.stat(to, function(stater, st) {
                  if (stater && stater.code === "ENOENT")
                    fs$rename(from, to, CB);
                  else
                    cb(er);
                });
              }, backoff);
              if (backoff < 100)
                backoff += 10;
              return;
            }
            if (cb)
              cb(er);
          });
        }
        if (Object.setPrototypeOf)
          Object.setPrototypeOf(rename, fs$rename);
        return rename;
      }(fs.rename);
    }
    fs.read = typeof fs.read !== "function" ? fs.read : function(fs$read) {
      function read(fd, buffer, offset, length, position, callback_) {
        var callback;
        if (callback_ && typeof callback_ === "function") {
          var eagCounter = 0;
          callback = function(er, _, __) {
            if (er && er.code === "EAGAIN" && eagCounter < 10) {
              eagCounter++;
              return fs$read.call(fs, fd, buffer, offset, length, position, callback);
            }
            callback_.apply(this, arguments);
          };
        }
        return fs$read.call(fs, fd, buffer, offset, length, position, callback);
      }
      if (Object.setPrototypeOf)
        Object.setPrototypeOf(read, fs$read);
      return read;
    }(fs.read);
    fs.readSync = typeof fs.readSync !== "function" ? fs.readSync : function(fs$readSync) {
      return function(fd, buffer, offset, length, position) {
        var eagCounter = 0;
        while (true) {
          try {
            return fs$readSync.call(fs, fd, buffer, offset, length, position);
          } catch (er) {
            if (er.code === "EAGAIN" && eagCounter < 10) {
              eagCounter++;
              continue;
            }
            throw er;
          }
        }
      };
    }(fs.readSync);
    function patchLchmod(fs2) {
      fs2.lchmod = function(path, mode, callback) {
        fs2.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
          if (err) {
            if (callback)
              callback(err);
            return;
          }
          fs2.fchmod(fd, mode, function(err2) {
            fs2.close(fd, function(err22) {
              if (callback)
                callback(err2 || err22);
            });
          });
        });
      };
      fs2.lchmodSync = function(path, mode) {
        var fd = fs2.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
        var threw = true;
        var ret;
        try {
          ret = fs2.fchmodSync(fd, mode);
          threw = false;
        } finally {
          if (threw) {
            try {
              fs2.closeSync(fd);
            } catch (er) {
            }
          } else {
            fs2.closeSync(fd);
          }
        }
        return ret;
      };
    }
    function patchLutimes(fs2) {
      if (constants.hasOwnProperty("O_SYMLINK") && fs2.futimes) {
        fs2.lutimes = function(path, at, mt, cb) {
          fs2.open(path, constants.O_SYMLINK, function(er, fd) {
            if (er) {
              if (cb)
                cb(er);
              return;
            }
            fs2.futimes(fd, at, mt, function(er2) {
              fs2.close(fd, function(er22) {
                if (cb)
                  cb(er2 || er22);
              });
            });
          });
        };
        fs2.lutimesSync = function(path, at, mt) {
          var fd = fs2.openSync(path, constants.O_SYMLINK);
          var ret;
          var threw = true;
          try {
            ret = fs2.futimesSync(fd, at, mt);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs2.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs2.closeSync(fd);
            }
          }
          return ret;
        };
      } else if (fs2.futimes) {
        fs2.lutimes = function(_a, _b, _c, cb) {
          if (cb)
            process.nextTick(cb);
        };
        fs2.lutimesSync = function() {
        };
      }
    }
    function chmodFix(orig) {
      if (!orig)
        return orig;
      return function(target, mode, cb) {
        return orig.call(fs, target, mode, function(er) {
          if (chownErOk(er))
            er = null;
          if (cb)
            cb.apply(this, arguments);
        });
      };
    }
    function chmodFixSync(orig) {
      if (!orig)
        return orig;
      return function(target, mode) {
        try {
          return orig.call(fs, target, mode);
        } catch (er) {
          if (!chownErOk(er))
            throw er;
        }
      };
    }
    function chownFix(orig) {
      if (!orig)
        return orig;
      return function(target, uid, gid, cb) {
        return orig.call(fs, target, uid, gid, function(er) {
          if (chownErOk(er))
            er = null;
          if (cb)
            cb.apply(this, arguments);
        });
      };
    }
    function chownFixSync(orig) {
      if (!orig)
        return orig;
      return function(target, uid, gid) {
        try {
          return orig.call(fs, target, uid, gid);
        } catch (er) {
          if (!chownErOk(er))
            throw er;
        }
      };
    }
    function statFix(orig) {
      if (!orig)
        return orig;
      return function(target, options, cb) {
        if (typeof options === "function") {
          cb = options;
          options = null;
        }
        function callback(er, stats) {
          if (stats) {
            if (stats.uid < 0)
              stats.uid += 4294967296;
            if (stats.gid < 0)
              stats.gid += 4294967296;
          }
          if (cb)
            cb.apply(this, arguments);
        }
        return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
      };
    }
    function statFixSync(orig) {
      if (!orig)
        return orig;
      return function(target, options) {
        var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
        if (stats) {
          if (stats.uid < 0)
            stats.uid += 4294967296;
          if (stats.gid < 0)
            stats.gid += 4294967296;
        }
        return stats;
      };
    }
    function chownErOk(er) {
      if (!er)
        return true;
      if (er.code === "ENOSYS")
        return true;
      var nonroot = !process.getuid || process.getuid() !== 0;
      if (nonroot) {
        if (er.code === "EINVAL" || er.code === "EPERM")
          return true;
      }
      return false;
    }
  };
  var constants = import.meta.require("constants");
  var origCwd = process.cwd;
  var cwd = null;
  var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function() {
    if (!cwd)
      cwd = origCwd.call(process);
    return cwd;
  };
  try {
    process.cwd();
  } catch (er) {
  }
  if (typeof process.chdir === "function") {
    chdir = process.chdir;
    process.chdir = function(d) {
      cwd = null;
      chdir.call(process, d);
    };
    if (Object.setPrototypeOf)
      Object.setPrototypeOf(process.chdir, chdir);
  }
  var chdir;
  module.exports = patch;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS((exports, module) => {
  var legacy = function(fs) {
    return {
      ReadStream,
      WriteStream
    };
    function ReadStream(path, options) {
      if (!(this instanceof ReadStream))
        return new ReadStream(path, options);
      Stream.call(this);
      var self = this;
      this.path = path;
      this.fd = null;
      this.readable = true;
      this.paused = false;
      this.flags = "r";
      this.mode = 438;
      this.bufferSize = 64 * 1024;
      options = options || {};
      var keys = Object.keys(options);
      for (var index = 0, length = keys.length;index < length; index++) {
        var key = keys[index];
        this[key] = options[key];
      }
      if (this.encoding)
        this.setEncoding(this.encoding);
      if (this.start !== undefined) {
        if (typeof this.start !== "number") {
          throw TypeError("start must be a Number");
        }
        if (this.end === undefined) {
          this.end = Infinity;
        } else if (typeof this.end !== "number") {
          throw TypeError("end must be a Number");
        }
        if (this.start > this.end) {
          throw new Error("start must be <= end");
        }
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function() {
          self._read();
        });
        return;
      }
      fs.open(this.path, this.flags, this.mode, function(err, fd) {
        if (err) {
          self.emit("error", err);
          self.readable = false;
          return;
        }
        self.fd = fd;
        self.emit("open", fd);
        self._read();
      });
    }
    function WriteStream(path, options) {
      if (!(this instanceof WriteStream))
        return new WriteStream(path, options);
      Stream.call(this);
      this.path = path;
      this.fd = null;
      this.writable = true;
      this.flags = "w";
      this.encoding = "binary";
      this.mode = 438;
      this.bytesWritten = 0;
      options = options || {};
      var keys = Object.keys(options);
      for (var index = 0, length = keys.length;index < length; index++) {
        var key = keys[index];
        this[key] = options[key];
      }
      if (this.start !== undefined) {
        if (typeof this.start !== "number") {
          throw TypeError("start must be a Number");
        }
        if (this.start < 0) {
          throw new Error("start must be >= zero");
        }
        this.pos = this.start;
      }
      this.busy = false;
      this._queue = [];
      if (this.fd === null) {
        this._open = fs.open;
        this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
        this.flush();
      }
    }
  };
  var Stream = import.meta.require("stream").Stream;
  module.exports = legacy;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/graceful-fs/clone.js
var require_clone = __commonJS((exports, module) => {
  var clone = function(obj) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (obj instanceof Object)
      var copy = { __proto__: getPrototypeOf(obj) };
    else
      var copy = Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function(key) {
      Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
  };
  module.exports = clone;
  var getPrototypeOf = Object.getPrototypeOf || function(obj) {
    return obj.__proto__;
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS((exports, module) => {
  var noop = function() {
  };
  var publishQueue = function(context, queue2) {
    Object.defineProperty(context, gracefulQueue, {
      get: function() {
        return queue2;
      }
    });
  };
  var patch = function(fs2) {
    polyfills(fs2);
    fs2.gracefulify = patch;
    fs2.createReadStream = createReadStream;
    fs2.createWriteStream = createWriteStream;
    var fs$readFile = fs2.readFile;
    fs2.readFile = readFile;
    function readFile(path, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      return go$readFile(path, options, cb);
      function go$readFile(path2, options2, cb2, startTime) {
        return fs$readFile(path2, options2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$readFile, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$writeFile = fs2.writeFile;
    fs2.writeFile = writeFile;
    function writeFile(path, data, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      return go$writeFile(path, data, options, cb);
      function go$writeFile(path2, data2, options2, cb2, startTime) {
        return fs$writeFile(path2, data2, options2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$writeFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$appendFile = fs2.appendFile;
    if (fs$appendFile)
      fs2.appendFile = appendFile;
    function appendFile(path, data, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      return go$appendFile(path, data, options, cb);
      function go$appendFile(path2, data2, options2, cb2, startTime) {
        return fs$appendFile(path2, data2, options2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$appendFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$copyFile = fs2.copyFile;
    if (fs$copyFile)
      fs2.copyFile = copyFile;
    function copyFile(src, dest, flags, cb) {
      if (typeof flags === "function") {
        cb = flags;
        flags = 0;
      }
      return go$copyFile(src, dest, flags, cb);
      function go$copyFile(src2, dest2, flags2, cb2, startTime) {
        return fs$copyFile(src2, dest2, flags2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$readdir = fs2.readdir;
    fs2.readdir = readdir;
    var noReaddirOptionVersions = /^v[0-5]\./;
    function readdir(path, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir(path2, options2, cb2, startTime) {
        return fs$readdir(path2, fs$readdirCallback(path2, options2, cb2, startTime));
      } : function go$readdir(path2, options2, cb2, startTime) {
        return fs$readdir(path2, options2, fs$readdirCallback(path2, options2, cb2, startTime));
      };
      return go$readdir(path, options, cb);
      function fs$readdirCallback(path2, options2, cb2, startTime) {
        return function(err, files) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([
              go$readdir,
              [path2, options2, cb2],
              err,
              startTime || Date.now(),
              Date.now()
            ]);
          else {
            if (files && files.sort)
              files.sort();
            if (typeof cb2 === "function")
              cb2.call(this, err, files);
          }
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var legStreams = legacy(fs2);
      ReadStream = legStreams.ReadStream;
      WriteStream = legStreams.WriteStream;
    }
    var fs$ReadStream = fs2.ReadStream;
    if (fs$ReadStream) {
      ReadStream.prototype = Object.create(fs$ReadStream.prototype);
      ReadStream.prototype.open = ReadStream$open;
    }
    var fs$WriteStream = fs2.WriteStream;
    if (fs$WriteStream) {
      WriteStream.prototype = Object.create(fs$WriteStream.prototype);
      WriteStream.prototype.open = WriteStream$open;
    }
    Object.defineProperty(fs2, "ReadStream", {
      get: function() {
        return ReadStream;
      },
      set: function(val) {
        ReadStream = val;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(fs2, "WriteStream", {
      get: function() {
        return WriteStream;
      },
      set: function(val) {
        WriteStream = val;
      },
      enumerable: true,
      configurable: true
    });
    var FileReadStream = ReadStream;
    Object.defineProperty(fs2, "FileReadStream", {
      get: function() {
        return FileReadStream;
      },
      set: function(val) {
        FileReadStream = val;
      },
      enumerable: true,
      configurable: true
    });
    var FileWriteStream = WriteStream;
    Object.defineProperty(fs2, "FileWriteStream", {
      get: function() {
        return FileWriteStream;
      },
      set: function(val) {
        FileWriteStream = val;
      },
      enumerable: true,
      configurable: true
    });
    function ReadStream(path, options) {
      if (this instanceof ReadStream)
        return fs$ReadStream.apply(this, arguments), this;
      else
        return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
    }
    function ReadStream$open() {
      var that = this;
      open(that.path, that.flags, that.mode, function(err, fd) {
        if (err) {
          if (that.autoClose)
            that.destroy();
          that.emit("error", err);
        } else {
          that.fd = fd;
          that.emit("open", fd);
          that.read();
        }
      });
    }
    function WriteStream(path, options) {
      if (this instanceof WriteStream)
        return fs$WriteStream.apply(this, arguments), this;
      else
        return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
    }
    function WriteStream$open() {
      var that = this;
      open(that.path, that.flags, that.mode, function(err, fd) {
        if (err) {
          that.destroy();
          that.emit("error", err);
        } else {
          that.fd = fd;
          that.emit("open", fd);
        }
      });
    }
    function createReadStream(path, options) {
      return new fs2.ReadStream(path, options);
    }
    function createWriteStream(path, options) {
      return new fs2.WriteStream(path, options);
    }
    var fs$open = fs2.open;
    fs2.open = open;
    function open(path, flags, mode, cb) {
      if (typeof mode === "function")
        cb = mode, mode = null;
      return go$open(path, flags, mode, cb);
      function go$open(path2, flags2, mode2, cb2, startTime) {
        return fs$open(path2, flags2, mode2, function(err, fd) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$open, [path2, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    return fs2;
  };
  var enqueue = function(elem) {
    debug("ENQUEUE", elem[0].name, elem[1]);
    fs[gracefulQueue].push(elem);
    retry();
  };
  var resetQueue = function() {
    var now = Date.now();
    for (var i = 0;i < fs[gracefulQueue].length; ++i) {
      if (fs[gracefulQueue][i].length > 2) {
        fs[gracefulQueue][i][3] = now;
        fs[gracefulQueue][i][4] = now;
      }
    }
    retry();
  };
  var retry = function() {
    clearTimeout(retryTimer);
    retryTimer = undefined;
    if (fs[gracefulQueue].length === 0)
      return;
    var elem = fs[gracefulQueue].shift();
    var fn = elem[0];
    var args = elem[1];
    var err = elem[2];
    var startTime = elem[3];
    var lastTime = elem[4];
    if (startTime === undefined) {
      debug("RETRY", fn.name, args);
      fn.apply(null, args);
    } else if (Date.now() - startTime >= 60000) {
      debug("TIMEOUT", fn.name, args);
      var cb = args.pop();
      if (typeof cb === "function")
        cb.call(null, err);
    } else {
      var sinceAttempt = Date.now() - lastTime;
      var sinceStart = Math.max(lastTime - startTime, 1);
      var desiredDelay = Math.min(sinceStart * 1.2, 100);
      if (sinceAttempt >= desiredDelay) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args.concat([startTime]));
      } else {
        fs[gracefulQueue].push(elem);
      }
    }
    if (retryTimer === undefined) {
      retryTimer = setTimeout(retry, 0);
    }
  };
  var fs = import.meta.require("fs");
  var polyfills = require_polyfills();
  var legacy = require_legacy_streams();
  var clone = require_clone();
  var util = import.meta.require("util");
  var gracefulQueue;
  var previousSymbol;
  if (typeof Symbol === "function" && typeof Symbol.for === "function") {
    gracefulQueue = Symbol.for("graceful-fs.queue");
    previousSymbol = Symbol.for("graceful-fs.previous");
  } else {
    gracefulQueue = "___graceful-fs.queue";
    previousSymbol = "___graceful-fs.previous";
  }
  var debug = noop;
  if (util.debuglog)
    debug = util.debuglog("gfs4");
  else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
    debug = function() {
      var m = util.format.apply(util, arguments);
      m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
      console.error(m);
    };
  if (!fs[gracefulQueue]) {
    queue = global[gracefulQueue] || [];
    publishQueue(fs, queue);
    fs.close = function(fs$close) {
      function close(fd, cb) {
        return fs$close.call(fs, fd, function(err) {
          if (!err) {
            resetQueue();
          }
          if (typeof cb === "function")
            cb.apply(this, arguments);
        });
      }
      Object.defineProperty(close, previousSymbol, {
        value: fs$close
      });
      return close;
    }(fs.close);
    fs.closeSync = function(fs$closeSync) {
      function closeSync(fd) {
        fs$closeSync.apply(fs, arguments);
        resetQueue();
      }
      Object.defineProperty(closeSync, previousSymbol, {
        value: fs$closeSync
      });
      return closeSync;
    }(fs.closeSync);
    if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
      process.on("exit", function() {
        debug(fs[gracefulQueue]);
        import.meta.require("assert").equal(fs[gracefulQueue].length, 0);
      });
    }
  }
  var queue;
  if (!global[gracefulQueue]) {
    publishQueue(global, fs[gracefulQueue]);
  }
  module.exports = patch(clone(fs));
  if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
    module.exports = patch(fs);
    fs.__patched = true;
  }
  var retryTimer;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/fs/index.js
var require_fs = __commonJS((exports) => {
  var u = require_universalify().fromCallback;
  var fs = require_graceful_fs();
  var api = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "lchmod",
    "lchown",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "opendir",
    "readdir",
    "readFile",
    "readlink",
    "realpath",
    "rename",
    "rm",
    "rmdir",
    "stat",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile"
  ].filter((key) => {
    return typeof fs[key] === "function";
  });
  Object.assign(exports, fs);
  api.forEach((method) => {
    exports[method] = u(fs[method]);
  });
  exports.exists = function(filename, callback) {
    if (typeof callback === "function") {
      return fs.exists(filename, callback);
    }
    return new Promise((resolve) => {
      return fs.exists(filename, resolve);
    });
  };
  exports.read = function(fd, buffer, offset, length, position, callback) {
    if (typeof callback === "function") {
      return fs.read(fd, buffer, offset, length, position, callback);
    }
    return new Promise((resolve, reject) => {
      fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
        if (err)
          return reject(err);
        resolve({ bytesRead, buffer: buffer2 });
      });
    });
  };
  exports.write = function(fd, buffer, ...args) {
    if (typeof args[args.length - 1] === "function") {
      return fs.write(fd, buffer, ...args);
    }
    return new Promise((resolve, reject) => {
      fs.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
        if (err)
          return reject(err);
        resolve({ bytesWritten, buffer: buffer2 });
      });
    });
  };
  exports.readv = function(fd, buffers, ...args) {
    if (typeof args[args.length - 1] === "function") {
      return fs.readv(fd, buffers, ...args);
    }
    return new Promise((resolve, reject) => {
      fs.readv(fd, buffers, ...args, (err, bytesRead, buffers2) => {
        if (err)
          return reject(err);
        resolve({ bytesRead, buffers: buffers2 });
      });
    });
  };
  exports.writev = function(fd, buffers, ...args) {
    if (typeof args[args.length - 1] === "function") {
      return fs.writev(fd, buffers, ...args);
    }
    return new Promise((resolve, reject) => {
      fs.writev(fd, buffers, ...args, (err, bytesWritten, buffers2) => {
        if (err)
          return reject(err);
        resolve({ bytesWritten, buffers: buffers2 });
      });
    });
  };
  if (typeof fs.realpath.native === "function") {
    exports.realpath.native = u(fs.realpath.native);
  } else {
    process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003");
  }
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/mkdirs/utils.js
var require_utils = __commonJS((exports, module) => {
  var path = import.meta.require("path");
  exports.checkPath = function checkPath(pth) {
    if (process.platform === "win32") {
      const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ""));
      if (pathHasInvalidWinCharacters) {
        const error = new Error(`Path contains invalid characters: ${pth}`);
        error.code = "EINVAL";
        throw error;
      }
    }
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/mkdirs/make-dir.js
var require_make_dir = __commonJS((exports, module) => {
  var fs = require_fs();
  var { checkPath } = require_utils();
  var getMode = (options) => {
    const defaults = { mode: 511 };
    if (typeof options === "number")
      return options;
    return { ...defaults, ...options }.mode;
  };
  exports.makeDir = async (dir, options) => {
    checkPath(dir);
    return fs.mkdir(dir, {
      mode: getMode(options),
      recursive: true
    });
  };
  exports.makeDirSync = (dir, options) => {
    checkPath(dir);
    return fs.mkdirSync(dir, {
      mode: getMode(options),
      recursive: true
    });
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/mkdirs/index.js
var require_mkdirs = __commonJS((exports, module) => {
  var u = require_universalify().fromPromise;
  var { makeDir: _makeDir, makeDirSync } = require_make_dir();
  var makeDir = u(_makeDir);
  module.exports = {
    mkdirs: makeDir,
    mkdirsSync: makeDirSync,
    mkdirp: makeDir,
    mkdirpSync: makeDirSync,
    ensureDir: makeDir,
    ensureDirSync: makeDirSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/path-exists/index.js
var require_path_exists = __commonJS((exports, module) => {
  var pathExists = function(path) {
    return fs.access(path).then(() => true).catch(() => false);
  };
  var u = require_universalify().fromPromise;
  var fs = require_fs();
  module.exports = {
    pathExists: u(pathExists),
    pathExistsSync: fs.existsSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/util/utimes.js
var require_utimes = __commonJS((exports, module) => {
  var utimesMillis = function(path, atime, mtime, callback) {
    fs.open(path, "r+", (err, fd) => {
      if (err)
        return callback(err);
      fs.futimes(fd, atime, mtime, (futimesErr) => {
        fs.close(fd, (closeErr) => {
          if (callback)
            callback(futimesErr || closeErr);
        });
      });
    });
  };
  var utimesMillisSync = function(path, atime, mtime) {
    const fd = fs.openSync(path, "r+");
    fs.futimesSync(fd, atime, mtime);
    return fs.closeSync(fd);
  };
  var fs = require_graceful_fs();
  module.exports = {
    utimesMillis,
    utimesMillisSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/util/stat.js
var require_stat = __commonJS((exports, module) => {
  var getStats = function(src, dest, opts) {
    const statFunc = opts.dereference ? (file) => fs.stat(file, { bigint: true }) : (file) => fs.lstat(file, { bigint: true });
    return Promise.all([
      statFunc(src),
      statFunc(dest).catch((err) => {
        if (err.code === "ENOENT")
          return null;
        throw err;
      })
    ]).then(([srcStat, destStat]) => ({ srcStat, destStat }));
  };
  var getStatsSync = function(src, dest, opts) {
    let destStat;
    const statFunc = opts.dereference ? (file) => fs.statSync(file, { bigint: true }) : (file) => fs.lstatSync(file, { bigint: true });
    const srcStat = statFunc(src);
    try {
      destStat = statFunc(dest);
    } catch (err) {
      if (err.code === "ENOENT")
        return { srcStat, destStat: null };
      throw err;
    }
    return { srcStat, destStat };
  };
  var checkPaths = function(src, dest, funcName, opts, cb) {
    util.callbackify(getStats)(src, dest, opts, (err, stats) => {
      if (err)
        return cb(err);
      const { srcStat, destStat } = stats;
      if (destStat) {
        if (areIdentical(srcStat, destStat)) {
          const srcBaseName = path.basename(src);
          const destBaseName = path.basename(dest);
          if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
            return cb(null, { srcStat, destStat, isChangingCase: true });
          }
          return cb(new Error("Source and destination must not be the same."));
        }
        if (srcStat.isDirectory() && !destStat.isDirectory()) {
          return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
        }
        if (!srcStat.isDirectory() && destStat.isDirectory()) {
          return cb(new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`));
        }
      }
      if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
        return cb(new Error(errMsg(src, dest, funcName)));
      }
      return cb(null, { srcStat, destStat });
    });
  };
  var checkPathsSync = function(src, dest, funcName, opts) {
    const { srcStat, destStat } = getStatsSync(src, dest, opts);
    if (destStat) {
      if (areIdentical(srcStat, destStat)) {
        const srcBaseName = path.basename(src);
        const destBaseName = path.basename(dest);
        if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
          return { srcStat, destStat, isChangingCase: true };
        }
        throw new Error("Source and destination must not be the same.");
      }
      if (srcStat.isDirectory() && !destStat.isDirectory()) {
        throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
      }
      if (!srcStat.isDirectory() && destStat.isDirectory()) {
        throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
      }
    }
    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      throw new Error(errMsg(src, dest, funcName));
    }
    return { srcStat, destStat };
  };
  var checkParentPaths = function(src, srcStat, dest, funcName, cb) {
    const srcParent = path.resolve(path.dirname(src));
    const destParent = path.resolve(path.dirname(dest));
    if (destParent === srcParent || destParent === path.parse(destParent).root)
      return cb();
    fs.stat(destParent, { bigint: true }, (err, destStat) => {
      if (err) {
        if (err.code === "ENOENT")
          return cb();
        return cb(err);
      }
      if (areIdentical(srcStat, destStat)) {
        return cb(new Error(errMsg(src, dest, funcName)));
      }
      return checkParentPaths(src, srcStat, destParent, funcName, cb);
    });
  };
  var checkParentPathsSync = function(src, srcStat, dest, funcName) {
    const srcParent = path.resolve(path.dirname(src));
    const destParent = path.resolve(path.dirname(dest));
    if (destParent === srcParent || destParent === path.parse(destParent).root)
      return;
    let destStat;
    try {
      destStat = fs.statSync(destParent, { bigint: true });
    } catch (err) {
      if (err.code === "ENOENT")
        return;
      throw err;
    }
    if (areIdentical(srcStat, destStat)) {
      throw new Error(errMsg(src, dest, funcName));
    }
    return checkParentPathsSync(src, srcStat, destParent, funcName);
  };
  var areIdentical = function(srcStat, destStat) {
    return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
  };
  var isSrcSubdir = function(src, dest) {
    const srcArr = path.resolve(src).split(path.sep).filter((i) => i);
    const destArr = path.resolve(dest).split(path.sep).filter((i) => i);
    return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true);
  };
  var errMsg = function(src, dest, funcName) {
    return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
  };
  var fs = require_fs();
  var path = import.meta.require("path");
  var util = import.meta.require("util");
  module.exports = {
    checkPaths,
    checkPathsSync,
    checkParentPaths,
    checkParentPathsSync,
    isSrcSubdir,
    areIdentical
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/copy/copy.js
var require_copy = __commonJS((exports, module) => {
  var copy = function(src, dest, opts, cb) {
    if (typeof opts === "function" && !cb) {
      cb = opts;
      opts = {};
    } else if (typeof opts === "function") {
      opts = { filter: opts };
    }
    cb = cb || function() {
    };
    opts = opts || {};
    opts.clobber = ("clobber" in opts) ? !!opts.clobber : true;
    opts.overwrite = ("overwrite" in opts) ? !!opts.overwrite : opts.clobber;
    if (opts.preserveTimestamps && process.arch === "ia32") {
      process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0001");
    }
    stat.checkPaths(src, dest, "copy", opts, (err, stats) => {
      if (err)
        return cb(err);
      const { srcStat, destStat } = stats;
      stat.checkParentPaths(src, srcStat, dest, "copy", (err2) => {
        if (err2)
          return cb(err2);
        runFilter(src, dest, opts, (err3, include) => {
          if (err3)
            return cb(err3);
          if (!include)
            return cb();
          checkParentDir(destStat, src, dest, opts, cb);
        });
      });
    });
  };
  var checkParentDir = function(destStat, src, dest, opts, cb) {
    const destParent = path.dirname(dest);
    pathExists(destParent, (err, dirExists) => {
      if (err)
        return cb(err);
      if (dirExists)
        return getStats(destStat, src, dest, opts, cb);
      mkdirs(destParent, (err2) => {
        if (err2)
          return cb(err2);
        return getStats(destStat, src, dest, opts, cb);
      });
    });
  };
  var runFilter = function(src, dest, opts, cb) {
    if (!opts.filter)
      return cb(null, true);
    Promise.resolve(opts.filter(src, dest)).then((include) => cb(null, include), (error) => cb(error));
  };
  var getStats = function(destStat, src, dest, opts, cb) {
    const stat2 = opts.dereference ? fs.stat : fs.lstat;
    stat2(src, (err, srcStat) => {
      if (err)
        return cb(err);
      if (srcStat.isDirectory())
        return onDir(srcStat, destStat, src, dest, opts, cb);
      else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
        return onFile(srcStat, destStat, src, dest, opts, cb);
      else if (srcStat.isSymbolicLink())
        return onLink(destStat, src, dest, opts, cb);
      else if (srcStat.isSocket())
        return cb(new Error(`Cannot copy a socket file: ${src}`));
      else if (srcStat.isFIFO())
        return cb(new Error(`Cannot copy a FIFO pipe: ${src}`));
      return cb(new Error(`Unknown file: ${src}`));
    });
  };
  var onFile = function(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat)
      return copyFile(srcStat, src, dest, opts, cb);
    return mayCopyFile(srcStat, src, dest, opts, cb);
  };
  var mayCopyFile = function(srcStat, src, dest, opts, cb) {
    if (opts.overwrite) {
      fs.unlink(dest, (err) => {
        if (err)
          return cb(err);
        return copyFile(srcStat, src, dest, opts, cb);
      });
    } else if (opts.errorOnExist) {
      return cb(new Error(`'${dest}' already exists`));
    } else
      return cb();
  };
  var copyFile = function(srcStat, src, dest, opts, cb) {
    fs.copyFile(src, dest, (err) => {
      if (err)
        return cb(err);
      if (opts.preserveTimestamps)
        return handleTimestampsAndMode(srcStat.mode, src, dest, cb);
      return setDestMode(dest, srcStat.mode, cb);
    });
  };
  var handleTimestampsAndMode = function(srcMode, src, dest, cb) {
    if (fileIsNotWritable(srcMode)) {
      return makeFileWritable(dest, srcMode, (err) => {
        if (err)
          return cb(err);
        return setDestTimestampsAndMode(srcMode, src, dest, cb);
      });
    }
    return setDestTimestampsAndMode(srcMode, src, dest, cb);
  };
  var fileIsNotWritable = function(srcMode) {
    return (srcMode & 128) === 0;
  };
  var makeFileWritable = function(dest, srcMode, cb) {
    return setDestMode(dest, srcMode | 128, cb);
  };
  var setDestTimestampsAndMode = function(srcMode, src, dest, cb) {
    setDestTimestamps(src, dest, (err) => {
      if (err)
        return cb(err);
      return setDestMode(dest, srcMode, cb);
    });
  };
  var setDestMode = function(dest, srcMode, cb) {
    return fs.chmod(dest, srcMode, cb);
  };
  var setDestTimestamps = function(src, dest, cb) {
    fs.stat(src, (err, updatedSrcStat) => {
      if (err)
        return cb(err);
      return utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime, cb);
    });
  };
  var onDir = function(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat)
      return mkDirAndCopy(srcStat.mode, src, dest, opts, cb);
    return copyDir(src, dest, opts, cb);
  };
  var mkDirAndCopy = function(srcMode, src, dest, opts, cb) {
    fs.mkdir(dest, (err) => {
      if (err)
        return cb(err);
      copyDir(src, dest, opts, (err2) => {
        if (err2)
          return cb(err2);
        return setDestMode(dest, srcMode, cb);
      });
    });
  };
  var copyDir = function(src, dest, opts, cb) {
    fs.readdir(src, (err, items) => {
      if (err)
        return cb(err);
      return copyDirItems(items, src, dest, opts, cb);
    });
  };
  var copyDirItems = function(items, src, dest, opts, cb) {
    const item = items.pop();
    if (!item)
      return cb();
    return copyDirItem(items, item, src, dest, opts, cb);
  };
  var copyDirItem = function(items, item, src, dest, opts, cb) {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    runFilter(srcItem, destItem, opts, (err, include) => {
      if (err)
        return cb(err);
      if (!include)
        return copyDirItems(items, src, dest, opts, cb);
      stat.checkPaths(srcItem, destItem, "copy", opts, (err2, stats) => {
        if (err2)
          return cb(err2);
        const { destStat } = stats;
        getStats(destStat, srcItem, destItem, opts, (err3) => {
          if (err3)
            return cb(err3);
          return copyDirItems(items, src, dest, opts, cb);
        });
      });
    });
  };
  var onLink = function(destStat, src, dest, opts, cb) {
    fs.readlink(src, (err, resolvedSrc) => {
      if (err)
        return cb(err);
      if (opts.dereference) {
        resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
      }
      if (!destStat) {
        return fs.symlink(resolvedSrc, dest, cb);
      } else {
        fs.readlink(dest, (err2, resolvedDest) => {
          if (err2) {
            if (err2.code === "EINVAL" || err2.code === "UNKNOWN")
              return fs.symlink(resolvedSrc, dest, cb);
            return cb(err2);
          }
          if (opts.dereference) {
            resolvedDest = path.resolve(process.cwd(), resolvedDest);
          }
          if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
            return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
          }
          if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
            return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
          }
          return copyLink(resolvedSrc, dest, cb);
        });
      }
    });
  };
  var copyLink = function(resolvedSrc, dest, cb) {
    fs.unlink(dest, (err) => {
      if (err)
        return cb(err);
      return fs.symlink(resolvedSrc, dest, cb);
    });
  };
  var fs = require_graceful_fs();
  var path = import.meta.require("path");
  var mkdirs = require_mkdirs().mkdirs;
  var pathExists = require_path_exists().pathExists;
  var utimesMillis = require_utimes().utimesMillis;
  var stat = require_stat();
  module.exports = copy;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/copy/copy-sync.js
var require_copy_sync = __commonJS((exports, module) => {
  var copySync = function(src, dest, opts) {
    if (typeof opts === "function") {
      opts = { filter: opts };
    }
    opts = opts || {};
    opts.clobber = ("clobber" in opts) ? !!opts.clobber : true;
    opts.overwrite = ("overwrite" in opts) ? !!opts.overwrite : opts.clobber;
    if (opts.preserveTimestamps && process.arch === "ia32") {
      process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0002");
    }
    const { srcStat, destStat } = stat.checkPathsSync(src, dest, "copy", opts);
    stat.checkParentPathsSync(src, srcStat, dest, "copy");
    if (opts.filter && !opts.filter(src, dest))
      return;
    const destParent = path.dirname(dest);
    if (!fs.existsSync(destParent))
      mkdirsSync(destParent);
    return getStats(destStat, src, dest, opts);
  };
  var getStats = function(destStat, src, dest, opts) {
    const statSync = opts.dereference ? fs.statSync : fs.lstatSync;
    const srcStat = statSync(src);
    if (srcStat.isDirectory())
      return onDir(srcStat, destStat, src, dest, opts);
    else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
      return onFile(srcStat, destStat, src, dest, opts);
    else if (srcStat.isSymbolicLink())
      return onLink(destStat, src, dest, opts);
    else if (srcStat.isSocket())
      throw new Error(`Cannot copy a socket file: ${src}`);
    else if (srcStat.isFIFO())
      throw new Error(`Cannot copy a FIFO pipe: ${src}`);
    throw new Error(`Unknown file: ${src}`);
  };
  var onFile = function(srcStat, destStat, src, dest, opts) {
    if (!destStat)
      return copyFile(srcStat, src, dest, opts);
    return mayCopyFile(srcStat, src, dest, opts);
  };
  var mayCopyFile = function(srcStat, src, dest, opts) {
    if (opts.overwrite) {
      fs.unlinkSync(dest);
      return copyFile(srcStat, src, dest, opts);
    } else if (opts.errorOnExist) {
      throw new Error(`'${dest}' already exists`);
    }
  };
  var copyFile = function(srcStat, src, dest, opts) {
    fs.copyFileSync(src, dest);
    if (opts.preserveTimestamps)
      handleTimestamps(srcStat.mode, src, dest);
    return setDestMode(dest, srcStat.mode);
  };
  var handleTimestamps = function(srcMode, src, dest) {
    if (fileIsNotWritable(srcMode))
      makeFileWritable(dest, srcMode);
    return setDestTimestamps(src, dest);
  };
  var fileIsNotWritable = function(srcMode) {
    return (srcMode & 128) === 0;
  };
  var makeFileWritable = function(dest, srcMode) {
    return setDestMode(dest, srcMode | 128);
  };
  var setDestMode = function(dest, srcMode) {
    return fs.chmodSync(dest, srcMode);
  };
  var setDestTimestamps = function(src, dest) {
    const updatedSrcStat = fs.statSync(src);
    return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
  };
  var onDir = function(srcStat, destStat, src, dest, opts) {
    if (!destStat)
      return mkDirAndCopy(srcStat.mode, src, dest, opts);
    return copyDir(src, dest, opts);
  };
  var mkDirAndCopy = function(srcMode, src, dest, opts) {
    fs.mkdirSync(dest);
    copyDir(src, dest, opts);
    return setDestMode(dest, srcMode);
  };
  var copyDir = function(src, dest, opts) {
    fs.readdirSync(src).forEach((item) => copyDirItem(item, src, dest, opts));
  };
  var copyDirItem = function(item, src, dest, opts) {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    if (opts.filter && !opts.filter(srcItem, destItem))
      return;
    const { destStat } = stat.checkPathsSync(srcItem, destItem, "copy", opts);
    return getStats(destStat, srcItem, destItem, opts);
  };
  var onLink = function(destStat, src, dest, opts) {
    let resolvedSrc = fs.readlinkSync(src);
    if (opts.dereference) {
      resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
    }
    if (!destStat) {
      return fs.symlinkSync(resolvedSrc, dest);
    } else {
      let resolvedDest;
      try {
        resolvedDest = fs.readlinkSync(dest);
      } catch (err) {
        if (err.code === "EINVAL" || err.code === "UNKNOWN")
          return fs.symlinkSync(resolvedSrc, dest);
        throw err;
      }
      if (opts.dereference) {
        resolvedDest = path.resolve(process.cwd(), resolvedDest);
      }
      if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
        throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
      }
      if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
        throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
      }
      return copyLink(resolvedSrc, dest);
    }
  };
  var copyLink = function(resolvedSrc, dest) {
    fs.unlinkSync(dest);
    return fs.symlinkSync(resolvedSrc, dest);
  };
  var fs = require_graceful_fs();
  var path = import.meta.require("path");
  var mkdirsSync = require_mkdirs().mkdirsSync;
  var utimesMillisSync = require_utimes().utimesMillisSync;
  var stat = require_stat();
  module.exports = copySync;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/copy/index.js
var require_copy2 = __commonJS((exports, module) => {
  var u = require_universalify().fromCallback;
  module.exports = {
    copy: u(require_copy()),
    copySync: require_copy_sync()
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/remove/index.js
var require_remove = __commonJS((exports, module) => {
  var remove = function(path, callback) {
    fs.rm(path, { recursive: true, force: true }, callback);
  };
  var removeSync = function(path) {
    fs.rmSync(path, { recursive: true, force: true });
  };
  var fs = require_graceful_fs();
  var u = require_universalify().fromCallback;
  module.exports = {
    remove: u(remove),
    removeSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/empty/index.js
var require_empty = __commonJS((exports, module) => {
  var emptyDirSync = function(dir) {
    let items;
    try {
      items = fs.readdirSync(dir);
    } catch {
      return mkdir.mkdirsSync(dir);
    }
    items.forEach((item) => {
      item = path.join(dir, item);
      remove.removeSync(item);
    });
  };
  var u = require_universalify().fromPromise;
  var fs = require_fs();
  var path = import.meta.require("path");
  var mkdir = require_mkdirs();
  var remove = require_remove();
  var emptyDir = u(async function emptyDir(dir) {
    let items;
    try {
      items = await fs.readdir(dir);
    } catch {
      return mkdir.mkdirs(dir);
    }
    return Promise.all(items.map((item) => remove.remove(path.join(dir, item))));
  });
  module.exports = {
    emptyDirSync,
    emptydirSync: emptyDirSync,
    emptyDir,
    emptydir: emptyDir
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/ensure/file.js
var require_file = __commonJS((exports, module) => {
  var createFile = function(file, callback) {
    function makeFile() {
      fs.writeFile(file, "", (err) => {
        if (err)
          return callback(err);
        callback();
      });
    }
    fs.stat(file, (err, stats) => {
      if (!err && stats.isFile())
        return callback();
      const dir = path.dirname(file);
      fs.stat(dir, (err2, stats2) => {
        if (err2) {
          if (err2.code === "ENOENT") {
            return mkdir.mkdirs(dir, (err3) => {
              if (err3)
                return callback(err3);
              makeFile();
            });
          }
          return callback(err2);
        }
        if (stats2.isDirectory())
          makeFile();
        else {
          fs.readdir(dir, (err3) => {
            if (err3)
              return callback(err3);
          });
        }
      });
    });
  };
  var createFileSync = function(file) {
    let stats;
    try {
      stats = fs.statSync(file);
    } catch {
    }
    if (stats && stats.isFile())
      return;
    const dir = path.dirname(file);
    try {
      if (!fs.statSync(dir).isDirectory()) {
        fs.readdirSync(dir);
      }
    } catch (err) {
      if (err && err.code === "ENOENT")
        mkdir.mkdirsSync(dir);
      else
        throw err;
    }
    fs.writeFileSync(file, "");
  };
  var u = require_universalify().fromCallback;
  var path = import.meta.require("path");
  var fs = require_graceful_fs();
  var mkdir = require_mkdirs();
  module.exports = {
    createFile: u(createFile),
    createFileSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/ensure/link.js
var require_link = __commonJS((exports, module) => {
  var createLink = function(srcpath, dstpath, callback) {
    function makeLink(srcpath2, dstpath2) {
      fs.link(srcpath2, dstpath2, (err) => {
        if (err)
          return callback(err);
        callback(null);
      });
    }
    fs.lstat(dstpath, (_, dstStat) => {
      fs.lstat(srcpath, (err, srcStat) => {
        if (err) {
          err.message = err.message.replace("lstat", "ensureLink");
          return callback(err);
        }
        if (dstStat && areIdentical(srcStat, dstStat))
          return callback(null);
        const dir = path.dirname(dstpath);
        pathExists(dir, (err2, dirExists) => {
          if (err2)
            return callback(err2);
          if (dirExists)
            return makeLink(srcpath, dstpath);
          mkdir.mkdirs(dir, (err3) => {
            if (err3)
              return callback(err3);
            makeLink(srcpath, dstpath);
          });
        });
      });
    });
  };
  var createLinkSync = function(srcpath, dstpath) {
    let dstStat;
    try {
      dstStat = fs.lstatSync(dstpath);
    } catch {
    }
    try {
      const srcStat = fs.lstatSync(srcpath);
      if (dstStat && areIdentical(srcStat, dstStat))
        return;
    } catch (err) {
      err.message = err.message.replace("lstat", "ensureLink");
      throw err;
    }
    const dir = path.dirname(dstpath);
    const dirExists = fs.existsSync(dir);
    if (dirExists)
      return fs.linkSync(srcpath, dstpath);
    mkdir.mkdirsSync(dir);
    return fs.linkSync(srcpath, dstpath);
  };
  var u = require_universalify().fromCallback;
  var path = import.meta.require("path");
  var fs = require_graceful_fs();
  var mkdir = require_mkdirs();
  var pathExists = require_path_exists().pathExists;
  var { areIdentical } = require_stat();
  module.exports = {
    createLink: u(createLink),
    createLinkSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/ensure/symlink-paths.js
var require_symlink_paths = __commonJS((exports, module) => {
  var symlinkPaths = function(srcpath, dstpath, callback) {
    if (path.isAbsolute(srcpath)) {
      return fs.lstat(srcpath, (err) => {
        if (err) {
          err.message = err.message.replace("lstat", "ensureSymlink");
          return callback(err);
        }
        return callback(null, {
          toCwd: srcpath,
          toDst: srcpath
        });
      });
    } else {
      const dstdir = path.dirname(dstpath);
      const relativeToDst = path.join(dstdir, srcpath);
      return pathExists(relativeToDst, (err, exists) => {
        if (err)
          return callback(err);
        if (exists) {
          return callback(null, {
            toCwd: relativeToDst,
            toDst: srcpath
          });
        } else {
          return fs.lstat(srcpath, (err2) => {
            if (err2) {
              err2.message = err2.message.replace("lstat", "ensureSymlink");
              return callback(err2);
            }
            return callback(null, {
              toCwd: srcpath,
              toDst: path.relative(dstdir, srcpath)
            });
          });
        }
      });
    }
  };
  var symlinkPathsSync = function(srcpath, dstpath) {
    let exists;
    if (path.isAbsolute(srcpath)) {
      exists = fs.existsSync(srcpath);
      if (!exists)
        throw new Error("absolute srcpath does not exist");
      return {
        toCwd: srcpath,
        toDst: srcpath
      };
    } else {
      const dstdir = path.dirname(dstpath);
      const relativeToDst = path.join(dstdir, srcpath);
      exists = fs.existsSync(relativeToDst);
      if (exists) {
        return {
          toCwd: relativeToDst,
          toDst: srcpath
        };
      } else {
        exists = fs.existsSync(srcpath);
        if (!exists)
          throw new Error("relative srcpath does not exist");
        return {
          toCwd: srcpath,
          toDst: path.relative(dstdir, srcpath)
        };
      }
    }
  };
  var path = import.meta.require("path");
  var fs = require_graceful_fs();
  var pathExists = require_path_exists().pathExists;
  module.exports = {
    symlinkPaths,
    symlinkPathsSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/ensure/symlink-type.js
var require_symlink_type = __commonJS((exports, module) => {
  var symlinkType = function(srcpath, type, callback) {
    callback = typeof type === "function" ? type : callback;
    type = typeof type === "function" ? false : type;
    if (type)
      return callback(null, type);
    fs.lstat(srcpath, (err, stats) => {
      if (err)
        return callback(null, "file");
      type = stats && stats.isDirectory() ? "dir" : "file";
      callback(null, type);
    });
  };
  var symlinkTypeSync = function(srcpath, type) {
    let stats;
    if (type)
      return type;
    try {
      stats = fs.lstatSync(srcpath);
    } catch {
      return "file";
    }
    return stats && stats.isDirectory() ? "dir" : "file";
  };
  var fs = require_graceful_fs();
  module.exports = {
    symlinkType,
    symlinkTypeSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/ensure/symlink.js
var require_symlink = __commonJS((exports, module) => {
  var createSymlink = function(srcpath, dstpath, type, callback) {
    callback = typeof type === "function" ? type : callback;
    type = typeof type === "function" ? false : type;
    fs.lstat(dstpath, (err, stats) => {
      if (!err && stats.isSymbolicLink()) {
        Promise.all([
          fs.stat(srcpath),
          fs.stat(dstpath)
        ]).then(([srcStat, dstStat]) => {
          if (areIdentical(srcStat, dstStat))
            return callback(null);
          _createSymlink(srcpath, dstpath, type, callback);
        });
      } else
        _createSymlink(srcpath, dstpath, type, callback);
    });
  };
  var _createSymlink = function(srcpath, dstpath, type, callback) {
    symlinkPaths(srcpath, dstpath, (err, relative) => {
      if (err)
        return callback(err);
      srcpath = relative.toDst;
      symlinkType(relative.toCwd, type, (err2, type2) => {
        if (err2)
          return callback(err2);
        const dir = path.dirname(dstpath);
        pathExists(dir, (err3, dirExists) => {
          if (err3)
            return callback(err3);
          if (dirExists)
            return fs.symlink(srcpath, dstpath, type2, callback);
          mkdirs(dir, (err4) => {
            if (err4)
              return callback(err4);
            fs.symlink(srcpath, dstpath, type2, callback);
          });
        });
      });
    });
  };
  var createSymlinkSync = function(srcpath, dstpath, type) {
    let stats;
    try {
      stats = fs.lstatSync(dstpath);
    } catch {
    }
    if (stats && stats.isSymbolicLink()) {
      const srcStat = fs.statSync(srcpath);
      const dstStat = fs.statSync(dstpath);
      if (areIdentical(srcStat, dstStat))
        return;
    }
    const relative = symlinkPathsSync(srcpath, dstpath);
    srcpath = relative.toDst;
    type = symlinkTypeSync(relative.toCwd, type);
    const dir = path.dirname(dstpath);
    const exists = fs.existsSync(dir);
    if (exists)
      return fs.symlinkSync(srcpath, dstpath, type);
    mkdirsSync(dir);
    return fs.symlinkSync(srcpath, dstpath, type);
  };
  var u = require_universalify().fromCallback;
  var path = import.meta.require("path");
  var fs = require_fs();
  var _mkdirs = require_mkdirs();
  var mkdirs = _mkdirs.mkdirs;
  var mkdirsSync = _mkdirs.mkdirsSync;
  var _symlinkPaths = require_symlink_paths();
  var symlinkPaths = _symlinkPaths.symlinkPaths;
  var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
  var _symlinkType = require_symlink_type();
  var symlinkType = _symlinkType.symlinkType;
  var symlinkTypeSync = _symlinkType.symlinkTypeSync;
  var pathExists = require_path_exists().pathExists;
  var { areIdentical } = require_stat();
  module.exports = {
    createSymlink: u(createSymlink),
    createSymlinkSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/ensure/index.js
var require_ensure = __commonJS((exports, module) => {
  var { createFile, createFileSync } = require_file();
  var { createLink, createLinkSync } = require_link();
  var { createSymlink, createSymlinkSync } = require_symlink();
  module.exports = {
    createFile,
    createFileSync,
    ensureFile: createFile,
    ensureFileSync: createFileSync,
    createLink,
    createLinkSync,
    ensureLink: createLink,
    ensureLinkSync: createLinkSync,
    createSymlink,
    createSymlinkSync,
    ensureSymlink: createSymlink,
    ensureSymlinkSync: createSymlinkSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/jsonfile/utils.js
var require_utils2 = __commonJS((exports, module) => {
  var stringify = function(obj, { EOL = "\n", finalEOL = true, replacer = null, spaces } = {}) {
    const EOF = finalEOL ? EOL : "";
    const str = JSON.stringify(obj, replacer, spaces);
    return str.replace(/\n/g, EOL) + EOF;
  };
  var stripBom = function(content) {
    if (Buffer.isBuffer(content))
      content = content.toString("utf8");
    return content.replace(/^\uFEFF/, "");
  };
  module.exports = { stringify, stripBom };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/jsonfile/index.js
var require_jsonfile = __commonJS((exports, module) => {
  async function _readFile(file, options = {}) {
    if (typeof options === "string") {
      options = { encoding: options };
    }
    const fs = options.fs || _fs;
    const shouldThrow = "throws" in options ? options.throws : true;
    let data = await universalify.fromCallback(fs.readFile)(file, options);
    data = stripBom(data);
    let obj;
    try {
      obj = JSON.parse(data, options ? options.reviver : null);
    } catch (err) {
      if (shouldThrow) {
        err.message = `${file}: ${err.message}`;
        throw err;
      } else {
        return null;
      }
    }
    return obj;
  }
  var readFileSync = function(file, options = {}) {
    if (typeof options === "string") {
      options = { encoding: options };
    }
    const fs = options.fs || _fs;
    const shouldThrow = "throws" in options ? options.throws : true;
    try {
      let content = fs.readFileSync(file, options);
      content = stripBom(content);
      return JSON.parse(content, options.reviver);
    } catch (err) {
      if (shouldThrow) {
        err.message = `${file}: ${err.message}`;
        throw err;
      } else {
        return null;
      }
    }
  };
  async function _writeFile(file, obj, options = {}) {
    const fs = options.fs || _fs;
    const str = stringify(obj, options);
    await universalify.fromCallback(fs.writeFile)(file, str, options);
  }
  var writeFileSync = function(file, obj, options = {}) {
    const fs = options.fs || _fs;
    const str = stringify(obj, options);
    return fs.writeFileSync(file, str, options);
  };
  var _fs;
  try {
    _fs = require_graceful_fs();
  } catch (_) {
    _fs = import.meta.require("fs");
  }
  var universalify = require_universalify();
  var { stringify, stripBom } = require_utils2();
  var readFile = universalify.fromPromise(_readFile);
  var writeFile = universalify.fromPromise(_writeFile);
  var jsonfile = {
    readFile,
    readFileSync,
    writeFile,
    writeFileSync
  };
  module.exports = jsonfile;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/json/jsonfile.js
var require_jsonfile2 = __commonJS((exports, module) => {
  var jsonFile = require_jsonfile();
  module.exports = {
    readJson: jsonFile.readFile,
    readJsonSync: jsonFile.readFileSync,
    writeJson: jsonFile.writeFile,
    writeJsonSync: jsonFile.writeFileSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/output-file/index.js
var require_output_file = __commonJS((exports, module) => {
  var outputFile = function(file, data, encoding, callback) {
    if (typeof encoding === "function") {
      callback = encoding;
      encoding = "utf8";
    }
    const dir = path.dirname(file);
    pathExists(dir, (err, itDoes) => {
      if (err)
        return callback(err);
      if (itDoes)
        return fs.writeFile(file, data, encoding, callback);
      mkdir.mkdirs(dir, (err2) => {
        if (err2)
          return callback(err2);
        fs.writeFile(file, data, encoding, callback);
      });
    });
  };
  var outputFileSync = function(file, ...args) {
    const dir = path.dirname(file);
    if (fs.existsSync(dir)) {
      return fs.writeFileSync(file, ...args);
    }
    mkdir.mkdirsSync(dir);
    fs.writeFileSync(file, ...args);
  };
  var u = require_universalify().fromCallback;
  var fs = require_graceful_fs();
  var path = import.meta.require("path");
  var mkdir = require_mkdirs();
  var pathExists = require_path_exists().pathExists;
  module.exports = {
    outputFile: u(outputFile),
    outputFileSync
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/json/output-json.js
var require_output_json = __commonJS((exports, module) => {
  async function outputJson(file, data, options = {}) {
    const str = stringify(data, options);
    await outputFile(file, str, options);
  }
  var { stringify } = require_utils2();
  var { outputFile } = require_output_file();
  module.exports = outputJson;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/json/output-json-sync.js
var require_output_json_sync = __commonJS((exports, module) => {
  var outputJsonSync = function(file, data, options) {
    const str = stringify(data, options);
    outputFileSync(file, str, options);
  };
  var { stringify } = require_utils2();
  var { outputFileSync } = require_output_file();
  module.exports = outputJsonSync;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/json/index.js
var require_json = __commonJS((exports, module) => {
  var u = require_universalify().fromPromise;
  var jsonFile = require_jsonfile2();
  jsonFile.outputJson = u(require_output_json());
  jsonFile.outputJsonSync = require_output_json_sync();
  jsonFile.outputJSON = jsonFile.outputJson;
  jsonFile.outputJSONSync = jsonFile.outputJsonSync;
  jsonFile.writeJSON = jsonFile.writeJson;
  jsonFile.writeJSONSync = jsonFile.writeJsonSync;
  jsonFile.readJSON = jsonFile.readJson;
  jsonFile.readJSONSync = jsonFile.readJsonSync;
  module.exports = jsonFile;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/move/move.js
var require_move = __commonJS((exports, module) => {
  var move = function(src, dest, opts, cb) {
    if (typeof opts === "function") {
      cb = opts;
      opts = {};
    }
    opts = opts || {};
    const overwrite = opts.overwrite || opts.clobber || false;
    stat.checkPaths(src, dest, "move", opts, (err, stats) => {
      if (err)
        return cb(err);
      const { srcStat, isChangingCase = false } = stats;
      stat.checkParentPaths(src, srcStat, dest, "move", (err2) => {
        if (err2)
          return cb(err2);
        if (isParentRoot(dest))
          return doRename(src, dest, overwrite, isChangingCase, cb);
        mkdirp(path.dirname(dest), (err3) => {
          if (err3)
            return cb(err3);
          return doRename(src, dest, overwrite, isChangingCase, cb);
        });
      });
    });
  };
  var isParentRoot = function(dest) {
    const parent = path.dirname(dest);
    const parsedPath = path.parse(parent);
    return parsedPath.root === parent;
  };
  var doRename = function(src, dest, overwrite, isChangingCase, cb) {
    if (isChangingCase)
      return rename(src, dest, overwrite, cb);
    if (overwrite) {
      return remove(dest, (err) => {
        if (err)
          return cb(err);
        return rename(src, dest, overwrite, cb);
      });
    }
    pathExists(dest, (err, destExists) => {
      if (err)
        return cb(err);
      if (destExists)
        return cb(new Error("dest already exists."));
      return rename(src, dest, overwrite, cb);
    });
  };
  var rename = function(src, dest, overwrite, cb) {
    fs.rename(src, dest, (err) => {
      if (!err)
        return cb();
      if (err.code !== "EXDEV")
        return cb(err);
      return moveAcrossDevice(src, dest, overwrite, cb);
    });
  };
  var moveAcrossDevice = function(src, dest, overwrite, cb) {
    const opts = {
      overwrite,
      errorOnExist: true,
      preserveTimestamps: true
    };
    copy(src, dest, opts, (err) => {
      if (err)
        return cb(err);
      return remove(src, cb);
    });
  };
  var fs = require_graceful_fs();
  var path = import.meta.require("path");
  var copy = require_copy2().copy;
  var remove = require_remove().remove;
  var mkdirp = require_mkdirs().mkdirp;
  var pathExists = require_path_exists().pathExists;
  var stat = require_stat();
  module.exports = move;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/move/move-sync.js
var require_move_sync = __commonJS((exports, module) => {
  var moveSync = function(src, dest, opts) {
    opts = opts || {};
    const overwrite = opts.overwrite || opts.clobber || false;
    const { srcStat, isChangingCase = false } = stat.checkPathsSync(src, dest, "move", opts);
    stat.checkParentPathsSync(src, srcStat, dest, "move");
    if (!isParentRoot(dest))
      mkdirpSync(path.dirname(dest));
    return doRename(src, dest, overwrite, isChangingCase);
  };
  var isParentRoot = function(dest) {
    const parent = path.dirname(dest);
    const parsedPath = path.parse(parent);
    return parsedPath.root === parent;
  };
  var doRename = function(src, dest, overwrite, isChangingCase) {
    if (isChangingCase)
      return rename(src, dest, overwrite);
    if (overwrite) {
      removeSync(dest);
      return rename(src, dest, overwrite);
    }
    if (fs.existsSync(dest))
      throw new Error("dest already exists.");
    return rename(src, dest, overwrite);
  };
  var rename = function(src, dest, overwrite) {
    try {
      fs.renameSync(src, dest);
    } catch (err) {
      if (err.code !== "EXDEV")
        throw err;
      return moveAcrossDevice(src, dest, overwrite);
    }
  };
  var moveAcrossDevice = function(src, dest, overwrite) {
    const opts = {
      overwrite,
      errorOnExist: true,
      preserveTimestamps: true
    };
    copySync(src, dest, opts);
    return removeSync(src);
  };
  var fs = require_graceful_fs();
  var path = import.meta.require("path");
  var copySync = require_copy2().copySync;
  var removeSync = require_remove().removeSync;
  var mkdirpSync = require_mkdirs().mkdirpSync;
  var stat = require_stat();
  module.exports = moveSync;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/move/index.js
var require_move2 = __commonJS((exports, module) => {
  var u = require_universalify().fromCallback;
  module.exports = {
    move: u(require_move()),
    moveSync: require_move_sync()
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/fs-extra/lib/index.js
var require_lib = __commonJS((exports, module) => {
  module.exports = {
    ...require_fs(),
    ...require_copy2(),
    ...require_empty(),
    ...require_ensure(),
    ...require_json(),
    ...require_mkdirs(),
    ...require_move2(),
    ...require_output_file(),
    ...require_path_exists(),
    ...require_remove()
  };
});

// os.__lib.js
var require_os___lib = __commonJS((exports, module) => {
  var _ = function(fn, ...args) {
    // console.log(refine(...args))
  };
  var child_process = import.meta.require("child_process");
  var { exec } = child_process;
  var fs = require_lib();
  var os = import.meta.require("os");
  var Abstract = (property, object) => object[property] ? object[property] : object;
  var refine = (...args) => {
    for (let argument of args) {
      args[args.indexOf(argument)] = Abstract("value", argument);
    }
    return args;
  };
  module.exports = {
    os: {
      public: {
        systeme: (command) => exec(command[0].value),
        getcwd: () => process.cwd(),
        chdir: (dir) => _(process.chdir, dir),
        mkdir: (name) => _(fs.mkdirSync, name),
        rmdir: (dir) => _(fs.rmdirSync, dir),
        rmf: (file) => _(fs.rmSync, file),
        cp: (file1, file2) => _(fs.cpSync, file1, file2),
        chmod: (fl, mod) => _(fs.chmodSync, fl, mod),
        getArgv: () => process.argv.slice(1, process.argv.length),
        platform: {
          userInf: os.userInfo("utf-8"),
          gcpus: os.cpus(),
          basedir: os.homedir(),
          platform: os.platform(),
          host: os.hostname(),
          machine: os.machine(),
          rel: os.release(),
          version: os.version(),
          frmemory: os.freemem(),
          kernType: os.type()
        }
      }
    }
  };
});
export default require_os___lib();
