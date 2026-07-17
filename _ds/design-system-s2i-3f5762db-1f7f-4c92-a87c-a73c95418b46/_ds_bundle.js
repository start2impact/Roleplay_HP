/* @ds-bundle: {"format":4,"namespace":"DesignSystem_3f5762","components":[{"name":"Alert","sourcePath":"components/Alert.jsx"},{"name":"Avatar","sourcePath":"components/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge.jsx"},{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Card","sourcePath":"components/Card.jsx"},{"name":"Checkbox","sourcePath":"components/Checkbox.jsx"},{"name":"Drawer","sourcePath":"components/Drawer.jsx"},{"name":"Dropdown","sourcePath":"components/Dropdown.jsx"},{"name":"Footer","sourcePath":"components/Footer.jsx"},{"name":"Icon","sourcePath":"components/Icon.jsx"},{"name":"IconButton","sourcePath":"components/IconButton.jsx"},{"name":"Input","sourcePath":"components/Input.jsx"},{"name":"Link","sourcePath":"components/Link.jsx"},{"name":"Modal","sourcePath":"components/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/ProgressBar.jsx"},{"name":"Radio","sourcePath":"components/Radio.jsx"},{"name":"Sidebar","sourcePath":"components/Sidebar.jsx"},{"name":"Spinner","sourcePath":"components/Spinner.jsx"},{"name":"Tabs","sourcePath":"components/Tabs.jsx"},{"name":"Tag","sourcePath":"components/Tag.jsx"},{"name":"Textarea","sourcePath":"components/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/Toggle.jsx"}],"sourceHashes":{"brand-book-assets/jszip.js":"acc7e41455a8","brand-book-assets/token-tables.js":"242abe7680ba","components/Alert.jsx":"d76e62667214","components/Avatar.jsx":"79e78d2ef497","components/Badge.jsx":"dffdede52cd2","components/Button.jsx":"6f19e83a2406","components/Card.jsx":"a3b1326fade9","components/Checkbox.jsx":"299aee5bdb85","components/Drawer.jsx":"f41fe55d0396","components/Dropdown.jsx":"d485b0780975","components/Footer.jsx":"70aabf829b55","components/Icon.jsx":"3df43bd73e69","components/IconButton.jsx":"15c20bff9ad9","components/Input.jsx":"1300ecb0468d","components/Link.jsx":"35713ef6add0","components/Modal.jsx":"a44ad8835605","components/ProgressBar.jsx":"fbe345e36519","components/Radio.jsx":"ef83a2578893","components/Sidebar.jsx":"de9e48373a45","components/Spinner.jsx":"97b778f064b4","components/Tabs.jsx":"f835c12df98f","components/Tag.jsx":"cf69b8186432","components/Textarea.jsx":"4cc1992d4766","components/Toggle.jsx":"118b79222f2b","landing.jsx":"410adbcdaab2","slides/deck-stage.js":"0cc26af2402a","slides/image-slot.js":"a5d4e503eeed","ui_kits/marketing/landing.jsx":"e24f48d53bab","ui_kits/platform/App.jsx":"2cd8aa126f89","ui_kits/platform/CourseCard.jsx":"4658913542f0","ui_kits/platform/data.js":"228ffb605e89","ui_kits/platform/screens.jsx":"d6340bd0e8ad","ui_kits/platform/screens2.jsx":"15e42bad49aa","uploads/token-table.js":"242abe7680ba"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_3f5762 = window.DesignSystem_3f5762 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// brand-book-assets/jszip.js
try { (() => {
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
  }
}(function () {
  return function s(a, o, h) {
    function u(r, e) {
      if (!o[r]) {
        if (!a[r]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(r, !0);
          if (l) return l(r, !0);
          var n = new Error("Cannot find module '" + r + "'");
          throw n.code = "MODULE_NOT_FOUND", n;
        }
        var i = o[r] = {
          exports: {}
        };
        a[r][0].call(i.exports, function (e) {
          var t = a[r][1][e];
          return u(t || e);
        }, i, i.exports, s, a, o, h);
      }
      return o[r].exports;
    }
    for (var l = "function" == typeof require && require, e = 0; e < h.length; e++) u(h[e]);
    return u;
  }({
    1: [function (e, t, r) {
      "use strict";

      var d = e("./utils"),
        c = e("./support"),
        p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      r.encode = function (e) {
        for (var t, r, n, i, s, a, o, h = [], u = 0, l = e.length, f = l, c = "string" !== d.getTypeOf(e); u < e.length;) f = l - u, n = c ? (t = e[u++], r = u < l ? e[u++] : 0, u < l ? e[u++] : 0) : (t = e.charCodeAt(u++), r = u < l ? e.charCodeAt(u++) : 0, u < l ? e.charCodeAt(u++) : 0), i = t >> 2, s = (3 & t) << 4 | r >> 4, a = 1 < f ? (15 & r) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
        return h.join("");
      }, r.decode = function (e) {
        var t,
          r,
          n,
          i,
          s,
          a,
          o = 0,
          h = 0,
          u = "data:";
        if (e.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
        var l,
          f = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (e.charAt(e.length - 1) === p.charAt(64) && f--, e.charAt(e.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e.length;) t = p.indexOf(e.charAt(o++)) << 2 | (i = p.indexOf(e.charAt(o++))) >> 4, r = (15 & i) << 4 | (s = p.indexOf(e.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e.charAt(o++))), l[h++] = t, 64 !== s && (l[h++] = r), 64 !== a && (l[h++] = n);
        return l;
      };
    }, {
      "./support": 30,
      "./utils": 32
    }],
    2: [function (e, t, r) {
      "use strict";

      var n = e("./external"),
        i = e("./stream/DataWorker"),
        s = e("./stream/Crc32Probe"),
        a = e("./stream/DataLengthProbe");
      function o(e, t, r, n, i) {
        this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r, this.compression = n, this.compressedContent = i;
      }
      o.prototype = {
        getContentWorker: function () {
          var e = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),
            t = this;
          return e.on("end", function () {
            if (this.streamInfo.data_length !== t.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e;
        },
        getCompressedWorker: function () {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        }
      }, o.createWorkerFrom = function (e, t, r) {
        return e.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t);
      }, t.exports = o;
    }, {
      "./external": 6,
      "./stream/Crc32Probe": 25,
      "./stream/DataLengthProbe": 26,
      "./stream/DataWorker": 27
    }],
    3: [function (e, t, r) {
      "use strict";

      var n = e("./stream/GenericWorker");
      r.STORE = {
        magic: "\0\0",
        compressWorker: function () {
          return new n("STORE compression");
        },
        uncompressWorker: function () {
          return new n("STORE decompression");
        }
      }, r.DEFLATE = e("./flate");
    }, {
      "./flate": 7,
      "./stream/GenericWorker": 28
    }],
    4: [function (e, t, r) {
      "use strict";

      var n = e("./utils");
      var o = function () {
        for (var e, t = [], r = 0; r < 256; r++) {
          e = r;
          for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
          t[r] = e;
        }
        return t;
      }();
      t.exports = function (e, t) {
        return void 0 !== e && e.length ? "string" !== n.getTypeOf(e) ? function (e, t, r, n) {
          var i = o,
            s = n + r;
          e ^= -1;
          for (var a = n; a < s; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
          return -1 ^ e;
        }(0 | t, e, e.length, 0) : function (e, t, r, n) {
          var i = o,
            s = n + r;
          e ^= -1;
          for (var a = n; a < s; a++) e = e >>> 8 ^ i[255 & (e ^ t.charCodeAt(a))];
          return -1 ^ e;
        }(0 | t, e, e.length, 0) : 0;
      };
    }, {
      "./utils": 32
    }],
    5: [function (e, t, r) {
      "use strict";

      r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
    }, {}],
    6: [function (e, t, r) {
      "use strict";

      var n = null;
      n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = {
        Promise: n
      };
    }, {
      lie: 37
    }],
    7: [function (e, t, r) {
      "use strict";

      var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
        i = e("pako"),
        s = e("./utils"),
        a = e("./stream/GenericWorker"),
        o = n ? "uint8array" : "array";
      function h(e, t) {
        a.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
      }
      r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function (e) {
        this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e.data), !1);
      }, h.prototype.flush = function () {
        a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
      }, h.prototype.cleanUp = function () {
        a.prototype.cleanUp.call(this), this._pako = null;
      }, h.prototype._createPako = function () {
        this._pako = new i[this._pakoAction]({
          raw: !0,
          level: this._pakoOptions.level || -1
        });
        var t = this;
        this._pako.onData = function (e) {
          t.push({
            data: e,
            meta: t.meta
          });
        };
      }, r.compressWorker = function (e) {
        return new h("Deflate", e);
      }, r.uncompressWorker = function () {
        return new h("Inflate", {});
      };
    }, {
      "./stream/GenericWorker": 28,
      "./utils": 32,
      pako: 38
    }],
    8: [function (e, t, r) {
      "use strict";

      function A(e, t) {
        var r,
          n = "";
        for (r = 0; r < t; r++) n += String.fromCharCode(255 & e), e >>>= 8;
        return n;
      }
      function n(e, t, r, n, i, s) {
        var a,
          o,
          h = e.file,
          u = e.compression,
          l = s !== O.utf8encode,
          f = I.transformTo("string", s(h.name)),
          c = I.transformTo("string", O.utf8encode(h.name)),
          d = h.comment,
          p = I.transformTo("string", s(d)),
          m = I.transformTo("string", O.utf8encode(d)),
          _ = c.length !== h.name.length,
          g = m.length !== d.length,
          b = "",
          v = "",
          y = "",
          w = h.dir,
          k = h.date,
          x = {
            crc32: 0,
            compressedSize: 0,
            uncompressedSize: 0
          };
        t && !r || (x.crc32 = e.crc32, x.compressedSize = e.compressedSize, x.uncompressedSize = e.uncompressedSize);
        var S = 0;
        t && (S |= 8), l || !_ && !g || (S |= 2048);
        var z = 0,
          C = 0;
        w && (z |= 16), "UNIX" === i ? (C = 798, z |= function (e, t) {
          var r = e;
          return e || (r = t ? 16893 : 33204), (65535 & r) << 16;
        }(h.unixPermissions, w)) : (C = 20, z |= function (e) {
          return 63 & (e || 0);
        }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
        var E = "";
        return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
          fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
          dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n, 4) + f + b + p
        };
      }
      var I = e("../utils"),
        i = e("../stream/GenericWorker"),
        O = e("../utf8"),
        B = e("../crc32"),
        R = e("../signature");
      function s(e, t, r, n) {
        i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = r, this.encodeFileName = n, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      I.inherits(s, i), s.prototype.push = function (e) {
        var t = e.meta.percent || 0,
          r = this.entriesCount,
          n = this._sources.length;
        this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, i.prototype.push.call(this, {
          data: e.data,
          meta: {
            currentFile: this.currentFile,
            percent: r ? (t + 100 * (r - n - 1)) / r : 100
          }
        }));
      }, s.prototype.openedSource = function (e) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
        var t = this.streamFiles && !e.file.dir;
        if (t) {
          var r = n(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({
            data: r.fileRecord,
            meta: {
              percent: 0
            }
          });
        } else this.accumulate = !0;
      }, s.prototype.closedSource = function (e) {
        this.accumulate = !1;
        var t = this.streamFiles && !e.file.dir,
          r = n(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(r.dirRecord), t) this.push({
          data: function (e) {
            return R.DATA_DESCRIPTOR + A(e.crc32, 4) + A(e.compressedSize, 4) + A(e.uncompressedSize, 4);
          }(e),
          meta: {
            percent: 100
          }
        });else for (this.push({
          data: r.fileRecord,
          meta: {
            percent: 0
          }
        }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, s.prototype.flush = function () {
        for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
          data: this.dirRecords[t],
          meta: {
            percent: 100
          }
        });
        var r = this.bytesWritten - e,
          n = function (e, t, r, n, i) {
            var s = I.transformTo("string", i(n));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e, 2) + A(e, 2) + A(t, 4) + A(r, 4) + A(s.length, 2) + s;
          }(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName);
        this.push({
          data: n,
          meta: {
            percent: 100
          }
        });
      }, s.prototype.prepareNextSource = function () {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, s.prototype.registerPrevious = function (e) {
        this._sources.push(e);
        var t = this;
        return e.on("data", function (e) {
          t.processChunk(e);
        }), e.on("end", function () {
          t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
        }), e.on("error", function (e) {
          t.error(e);
        }), this;
      }, s.prototype.resume = function () {
        return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, s.prototype.error = function (e) {
        var t = this._sources;
        if (!i.prototype.error.call(this, e)) return !1;
        for (var r = 0; r < t.length; r++) try {
          t[r].error(e);
        } catch (e) {}
        return !0;
      }, s.prototype.lock = function () {
        i.prototype.lock.call(this);
        for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
      }, t.exports = s;
    }, {
      "../crc32": 4,
      "../signature": 23,
      "../stream/GenericWorker": 28,
      "../utf8": 31,
      "../utils": 32
    }],
    9: [function (e, t, r) {
      "use strict";

      var u = e("../compressions"),
        n = e("./ZipFileWorker");
      r.generateWorker = function (e, a, t) {
        var o = new n(a.streamFiles, t, a.platform, a.encodeFileName),
          h = 0;
        try {
          e.forEach(function (e, t) {
            h++;
            var r = function (e, t) {
                var r = e || t,
                  n = u[r];
                if (!n) throw new Error(r + " is not a valid compression method !");
                return n;
              }(t.options.compression, a.compression),
              n = t.options.compressionOptions || a.compressionOptions || {},
              i = t.dir,
              s = t.date;
            t._compressWorker(r, n).withStreamInfo("file", {
              name: e,
              dir: i,
              date: s,
              comment: t.comment || "",
              unixPermissions: t.unixPermissions,
              dosPermissions: t.dosPermissions
            }).pipe(o);
          }), o.entriesCount = h;
        } catch (e) {
          o.error(e);
        }
        return o;
      };
    }, {
      "../compressions": 3,
      "./ZipFileWorker": 8
    }],
    10: [function (e, t, r) {
      "use strict";

      function n() {
        if (!(this instanceof n)) return new n();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function () {
          var e = new n();
          for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
          return e;
        };
      }
      (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function (e, t) {
        return new n().loadAsync(e, t);
      }, n.external = e("./external"), t.exports = n;
    }, {
      "./defaults": 5,
      "./external": 6,
      "./load": 11,
      "./object": 15,
      "./support": 30
    }],
    11: [function (e, t, r) {
      "use strict";

      var u = e("./utils"),
        i = e("./external"),
        n = e("./utf8"),
        s = e("./zipEntries"),
        a = e("./stream/Crc32Probe"),
        l = e("./nodejsUtils");
      function f(n) {
        return new i.Promise(function (e, t) {
          var r = n.decompressed.getContentWorker().pipe(new a());
          r.on("error", function (e) {
            t(e);
          }).on("end", function () {
            r.streamInfo.crc32 !== n.decompressed.crc32 ? t(new Error("Corrupted zip : CRC32 mismatch")) : e();
          }).resume();
        });
      }
      t.exports = function (e, o) {
        var h = this;
        return o = u.extend(o || {}, {
          base64: !1,
          checkCRC32: !1,
          optimizedBinaryString: !1,
          createFolders: !1,
          decodeFileName: n.utf8decode
        }), l.isNode && l.isStream(e) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e, !0, o.optimizedBinaryString, o.base64).then(function (e) {
          var t = new s(o);
          return t.load(e), t;
        }).then(function (e) {
          var t = [i.Promise.resolve(e)],
            r = e.files;
          if (o.checkCRC32) for (var n = 0; n < r.length; n++) t.push(f(r[n]));
          return i.Promise.all(t);
        }).then(function (e) {
          for (var t = e.shift(), r = t.files, n = 0; n < r.length; n++) {
            var i = r[n],
              s = i.fileNameStr,
              a = u.resolve(i.fileNameStr);
            h.file(a, i.decompressed, {
              binary: !0,
              optimizedBinaryString: !0,
              date: i.date,
              dir: i.dir,
              comment: i.fileCommentStr.length ? i.fileCommentStr : null,
              unixPermissions: i.unixPermissions,
              dosPermissions: i.dosPermissions,
              createFolders: o.createFolders
            }), i.dir || (h.file(a).unsafeOriginalName = s);
          }
          return t.zipComment.length && (h.comment = t.zipComment), h;
        });
      };
    }, {
      "./external": 6,
      "./nodejsUtils": 14,
      "./stream/Crc32Probe": 25,
      "./utf8": 31,
      "./utils": 32,
      "./zipEntries": 33
    }],
    12: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("../stream/GenericWorker");
      function s(e, t) {
        i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
      }
      n.inherits(s, i), s.prototype._bindStream = function (e) {
        var t = this;
        (this._stream = e).pause(), e.on("data", function (e) {
          t.push({
            data: e,
            meta: {
              percent: 0
            }
          });
        }).on("error", function (e) {
          t.isPaused ? this.generatedError = e : t.error(e);
        }).on("end", function () {
          t.isPaused ? t._upstreamEnded = !0 : t.end();
        });
      }, s.prototype.pause = function () {
        return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, s.prototype.resume = function () {
        return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, t.exports = s;
    }, {
      "../stream/GenericWorker": 28,
      "../utils": 32
    }],
    13: [function (e, t, r) {
      "use strict";

      var i = e("readable-stream").Readable;
      function n(e, t, r) {
        i.call(this, t), this._helper = e;
        var n = this;
        e.on("data", function (e, t) {
          n.push(e) || n._helper.pause(), r && r(t);
        }).on("error", function (e) {
          n.emit("error", e);
        }).on("end", function () {
          n.push(null);
        });
      }
      e("../utils").inherits(n, i), n.prototype._read = function () {
        this._helper.resume();
      }, t.exports = n;
    }, {
      "../utils": 32,
      "readable-stream": 16
    }],
    14: [function (e, t, r) {
      "use strict";

      t.exports = {
        isNode: "undefined" != typeof Buffer,
        newBufferFrom: function (e, t) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
          if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
          return new Buffer(e, t);
        },
        allocBuffer: function (e) {
          if (Buffer.alloc) return Buffer.alloc(e);
          var t = new Buffer(e);
          return t.fill(0), t;
        },
        isBuffer: function (e) {
          return Buffer.isBuffer(e);
        },
        isStream: function (e) {
          return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume;
        }
      };
    }, {}],
    15: [function (e, t, r) {
      "use strict";

      function s(e, t, r) {
        var n,
          i = u.getTypeOf(t),
          s = u.extend(r || {}, f);
        s.date = s.date || new Date(), null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = g(e)), s.createFolders && (n = _(e)) && b.call(this, n, !0);
        var a = "string" === i && !1 === s.binary && !1 === s.base64;
        r && void 0 !== r.binary || (s.binary = !a), (t instanceof c && 0 === t.uncompressedSize || s.dir || !t || 0 === t.length) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
        var o = null;
        o = t instanceof c || t instanceof l ? t : p.isNode && p.isStream(t) ? new m(e, t) : u.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
        var h = new d(e, o, s);
        this.files[e] = h;
      }
      var i = e("./utf8"),
        u = e("./utils"),
        l = e("./stream/GenericWorker"),
        a = e("./stream/StreamHelper"),
        f = e("./defaults"),
        c = e("./compressedObject"),
        d = e("./zipObject"),
        o = e("./generate"),
        p = e("./nodejsUtils"),
        m = e("./nodejs/NodejsStreamInputAdapter"),
        _ = function (e) {
          "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
          var t = e.lastIndexOf("/");
          return 0 < t ? e.substring(0, t) : "";
        },
        g = function (e) {
          return "/" !== e.slice(-1) && (e += "/"), e;
        },
        b = function (e, t) {
          return t = void 0 !== t ? t : f.createFolders, e = g(e), this.files[e] || s.call(this, e, null, {
            dir: !0,
            createFolders: t
          }), this.files[e];
        };
      function h(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }
      var n = {
        load: function () {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        forEach: function (e) {
          var t, r, n;
          for (t in this.files) n = this.files[t], (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, n);
        },
        filter: function (r) {
          var n = [];
          return this.forEach(function (e, t) {
            r(e, t) && n.push(t);
          }), n;
        },
        file: function (e, t, r) {
          if (1 !== arguments.length) return e = this.root + e, s.call(this, e, t, r), this;
          if (h(e)) {
            var n = e;
            return this.filter(function (e, t) {
              return !t.dir && n.test(e);
            });
          }
          var i = this.files[this.root + e];
          return i && !i.dir ? i : null;
        },
        folder: function (r) {
          if (!r) return this;
          if (h(r)) return this.filter(function (e, t) {
            return t.dir && r.test(e);
          });
          var e = this.root + r,
            t = b.call(this, e),
            n = this.clone();
          return n.root = t.name, n;
        },
        remove: function (r) {
          r = this.root + r;
          var e = this.files[r];
          if (e || ("/" !== r.slice(-1) && (r += "/"), e = this.files[r]), e && !e.dir) delete this.files[r];else for (var t = this.filter(function (e, t) {
              return t.name.slice(0, r.length) === r;
            }), n = 0; n < t.length; n++) delete this.files[t[n].name];
          return this;
        },
        generate: function () {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        generateInternalStream: function (e) {
          var t,
            r = {};
          try {
            if ((r = u.extend(e || {}, {
              streamFiles: !1,
              compression: "STORE",
              compressionOptions: null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: "application/zip",
              encodeFileName: i.utf8encode
            })).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
            u.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
            var n = r.comment || this.comment || "";
            t = o.generateWorker(this, r, n);
          } catch (e) {
            (t = new l("error")).error(e);
          }
          return new a(t, r.type || "string", r.mimeType);
        },
        generateAsync: function (e, t) {
          return this.generateInternalStream(e).accumulate(t);
        },
        generateNodeStream: function (e, t) {
          return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
        }
      };
      t.exports = n;
    }, {
      "./compressedObject": 2,
      "./defaults": 5,
      "./generate": 9,
      "./nodejs/NodejsStreamInputAdapter": 12,
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31,
      "./utils": 32,
      "./zipObject": 35
    }],
    16: [function (e, t, r) {
      "use strict";

      t.exports = e("stream");
    }, {
      stream: void 0
    }],
    17: [function (e, t, r) {
      "use strict";

      var n = e("./DataReader");
      function i(e) {
        n.call(this, e);
        for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
      }
      e("../utils").inherits(i, n), i.prototype.byteAt = function (e) {
        return this.data[this.zero + e];
      }, i.prototype.lastIndexOfSignature = function (e) {
        for (var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === i) return s - this.zero;
        return -1;
      }, i.prototype.readAndCheckSignature = function (e) {
        var t = e.charCodeAt(0),
          r = e.charCodeAt(1),
          n = e.charCodeAt(2),
          i = e.charCodeAt(3),
          s = this.readData(4);
        return t === s[0] && r === s[1] && n === s[2] && i === s[3];
      }, i.prototype.readData = function (e) {
        if (this.checkOffset(e), 0 === e) return [];
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    18: [function (e, t, r) {
      "use strict";

      var n = e("../utils");
      function i(e) {
        this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
      }
      i.prototype = {
        checkOffset: function (e) {
          this.checkIndex(this.index + e);
        },
        checkIndex: function (e) {
          if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
        },
        setIndex: function (e) {
          this.checkIndex(e), this.index = e;
        },
        skip: function (e) {
          this.setIndex(this.index + e);
        },
        byteAt: function () {},
        readInt: function (e) {
          var t,
            r = 0;
          for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) r = (r << 8) + this.byteAt(t);
          return this.index += e, r;
        },
        readString: function (e) {
          return n.transformTo("string", this.readData(e));
        },
        readData: function () {},
        lastIndexOfSignature: function () {},
        readAndCheckSignature: function () {},
        readDate: function () {
          var e = this.readInt(4);
          return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
        }
      }, t.exports = i;
    }, {
      "../utils": 32
    }],
    19: [function (e, t, r) {
      "use strict";

      var n = e("./Uint8ArrayReader");
      function i(e) {
        n.call(this, e);
      }
      e("../utils").inherits(i, n), i.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./Uint8ArrayReader": 21
    }],
    20: [function (e, t, r) {
      "use strict";

      var n = e("./DataReader");
      function i(e) {
        n.call(this, e);
      }
      e("../utils").inherits(i, n), i.prototype.byteAt = function (e) {
        return this.data.charCodeAt(this.zero + e);
      }, i.prototype.lastIndexOfSignature = function (e) {
        return this.data.lastIndexOf(e) - this.zero;
      }, i.prototype.readAndCheckSignature = function (e) {
        return e === this.readData(4);
      }, i.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    21: [function (e, t, r) {
      "use strict";

      var n = e("./ArrayReader");
      function i(e) {
        n.call(this, e);
      }
      e("../utils").inherits(i, n), i.prototype.readData = function (e) {
        if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
        var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./ArrayReader": 17
    }],
    22: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("../support"),
        s = e("./ArrayReader"),
        a = e("./StringReader"),
        o = e("./NodeBufferReader"),
        h = e("./Uint8ArrayReader");
      t.exports = function (e) {
        var t = n.getTypeOf(e);
        return n.checkSupport(t), "string" !== t || i.uint8array ? "nodebuffer" === t ? new o(e) : i.uint8array ? new h(n.transformTo("uint8array", e)) : new s(n.transformTo("array", e)) : new a(e);
      };
    }, {
      "../support": 30,
      "../utils": 32,
      "./ArrayReader": 17,
      "./NodeBufferReader": 19,
      "./StringReader": 20,
      "./Uint8ArrayReader": 21
    }],
    23: [function (e, t, r) {
      "use strict";

      r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b";
    }, {}],
    24: [function (e, t, r) {
      "use strict";

      var n = e("./GenericWorker"),
        i = e("../utils");
      function s(e) {
        n.call(this, "ConvertWorker to " + e), this.destType = e;
      }
      i.inherits(s, n), s.prototype.processChunk = function (e) {
        this.push({
          data: i.transformTo(this.destType, e.data),
          meta: e.meta
        });
      }, t.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    25: [function (e, t, r) {
      "use strict";

      var n = e("./GenericWorker"),
        i = e("../crc32");
      function s() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(s, n), s.prototype.processChunk = function (e) {
        this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
      }, t.exports = s;
    }, {
      "../crc32": 4,
      "../utils": 32,
      "./GenericWorker": 28
    }],
    26: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("./GenericWorker");
      function s(e) {
        i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
      }
      n.inherits(s, i), s.prototype.processChunk = function (e) {
        if (e) {
          var t = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = t + e.data.length;
        }
        i.prototype.processChunk.call(this, e);
      }, t.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    27: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("./GenericWorker");
      function s(e) {
        i.call(this, "DataWorker");
        var t = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function (e) {
          t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = n.getTypeOf(e), t.isPaused || t._tickAndRepeat();
        }, function (e) {
          t.error(e);
        });
      }
      n.inherits(s, i), s.prototype.cleanUp = function () {
        i.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function () {
        return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
      }, s.prototype._tickAndRepeat = function () {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, s.prototype._tick = function () {
        if (this.isPaused || this.isFinished) return !1;
        var e = null,
          t = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            e = this.data.substring(this.index, t);
            break;
          case "uint8array":
            e = this.data.subarray(this.index, t);
            break;
          case "array":
          case "nodebuffer":
            e = this.data.slice(this.index, t);
        }
        return this.index = t, this.push({
          data: e,
          meta: {
            percent: this.max ? this.index / this.max * 100 : 0
          }
        });
      }, t.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    28: [function (e, t, r) {
      "use strict";

      function n(e) {
        this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
          data: [],
          end: [],
          error: []
        }, this.previous = null;
      }
      n.prototype = {
        push: function (e) {
          this.emit("data", e);
        },
        end: function () {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (e) {
            this.emit("error", e);
          }
          return !0;
        },
        error: function (e) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
        },
        on: function (e, t) {
          return this._listeners[e].push(t), this;
        },
        cleanUp: function () {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        },
        emit: function (e, t) {
          if (this._listeners[e]) for (var r = 0; r < this._listeners[e].length; r++) this._listeners[e][r].call(this, t);
        },
        pipe: function (e) {
          return e.registerPrevious(this);
        },
        registerPrevious: function (e) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
          var t = this;
          return e.on("data", function (e) {
            t.processChunk(e);
          }), e.on("end", function () {
            t.end();
          }), e.on("error", function (e) {
            t.error(e);
          }), this;
        },
        pause: function () {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        },
        resume: function () {
          if (!this.isPaused || this.isFinished) return !1;
          var e = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
        },
        flush: function () {},
        processChunk: function (e) {
          this.push(e);
        },
        withStreamInfo: function (e, t) {
          return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
        },
        mergeStreamInfo: function () {
          for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
        },
        lock: function () {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        },
        toString: function () {
          var e = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e : e;
        }
      }, t.exports = n;
    }, {}],
    29: [function (e, t, r) {
      "use strict";

      var h = e("../utils"),
        i = e("./ConvertWorker"),
        s = e("./GenericWorker"),
        u = e("../base64"),
        n = e("../support"),
        a = e("../external"),
        o = null;
      if (n.nodestream) try {
        o = e("../nodejs/NodejsStreamOutputAdapter");
      } catch (e) {}
      function l(e, o) {
        return new a.Promise(function (t, r) {
          var n = [],
            i = e._internalType,
            s = e._outputType,
            a = e._mimeType;
          e.on("data", function (e, t) {
            n.push(e), o && o(t);
          }).on("error", function (e) {
            n = [], r(e);
          }).on("end", function () {
            try {
              var e = function (e, t, r) {
                switch (e) {
                  case "blob":
                    return h.newBlob(h.transformTo("arraybuffer", t), r);
                  case "base64":
                    return u.encode(t);
                  default:
                    return h.transformTo(e, t);
                }
              }(s, function (e, t) {
                var r,
                  n = 0,
                  i = null,
                  s = 0;
                for (r = 0; r < t.length; r++) s += t[r].length;
                switch (e) {
                  case "string":
                    return t.join("");
                  case "array":
                    return Array.prototype.concat.apply([], t);
                  case "uint8array":
                    for (i = new Uint8Array(s), r = 0; r < t.length; r++) i.set(t[r], n), n += t[r].length;
                    return i;
                  case "nodebuffer":
                    return Buffer.concat(t);
                  default:
                    throw new Error("concat : unsupported type '" + e + "'");
                }
              }(i, n), a);
              t(e);
            } catch (e) {
              r(e);
            }
            n = [];
          }).resume();
        });
      }
      function f(e, t, r) {
        var n = t;
        switch (t) {
          case "blob":
          case "arraybuffer":
            n = "uint8array";
            break;
          case "base64":
            n = "string";
        }
        try {
          this._internalType = n, this._outputType = t, this._mimeType = r, h.checkSupport(n), this._worker = e.pipe(new i(n)), e.lock();
        } catch (e) {
          this._worker = new s("error"), this._worker.error(e);
        }
      }
      f.prototype = {
        accumulate: function (e) {
          return l(this, e);
        },
        on: function (e, t) {
          var r = this;
          return "data" === e ? this._worker.on(e, function (e) {
            t.call(r, e.data, e.meta);
          }) : this._worker.on(e, function () {
            h.delay(t, arguments, r);
          }), this;
        },
        resume: function () {
          return h.delay(this._worker.resume, [], this._worker), this;
        },
        pause: function () {
          return this._worker.pause(), this;
        },
        toNodejsStream: function (e) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, {
            objectMode: "nodebuffer" !== this._outputType
          }, e);
        }
      }, t.exports = f;
    }, {
      "../base64": 1,
      "../external": 6,
      "../nodejs/NodejsStreamOutputAdapter": 13,
      "../support": 30,
      "../utils": 32,
      "./ConvertWorker": 24,
      "./GenericWorker": 28
    }],
    30: [function (e, t, r) {
      "use strict";

      if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;else {
        var n = new ArrayBuffer(0);
        try {
          r.blob = 0 === new Blob([n], {
            type: "application/zip"
          }).size;
        } catch (e) {
          try {
            var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
          } catch (e) {
            r.blob = !1;
          }
        }
      }
      try {
        r.nodestream = !!e("readable-stream").Readable;
      } catch (e) {
        r.nodestream = !1;
      }
    }, {
      "readable-stream": 16
    }],
    31: [function (e, t, s) {
      "use strict";

      for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
      u[254] = u[254] = 1;
      function a() {
        n.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function l() {
        n.call(this, "utf-8 encode");
      }
      s.utf8encode = function (e) {
        return h.nodebuffer ? r.newBufferFrom(e, "utf-8") : function (e) {
          var t,
            r,
            n,
            i,
            s,
            a = e.length,
            o = 0;
          for (i = 0; i < a; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
          for (t = h.uint8array ? new Uint8Array(o) : new Array(o), i = s = 0; s < o; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
          return t;
        }(e);
      }, s.utf8decode = function (e) {
        return h.nodebuffer ? o.transformTo("nodebuffer", e).toString("utf-8") : function (e) {
          var t,
            r,
            n,
            i,
            s = e.length,
            a = new Array(2 * s);
          for (t = r = 0; t < s;) if ((n = e[t++]) < 128) a[r++] = n;else if (4 < (i = u[n])) a[r++] = 65533, t += i - 1;else {
            for (n &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && t < s;) n = n << 6 | 63 & e[t++], i--;
            1 < i ? a[r++] = 65533 : n < 65536 ? a[r++] = n : (n -= 65536, a[r++] = 55296 | n >> 10 & 1023, a[r++] = 56320 | 1023 & n);
          }
          return a.length !== r && (a.subarray ? a = a.subarray(0, r) : a.length = r), o.applyFromCharCode(a);
        }(e = o.transformTo(h.uint8array ? "uint8array" : "array", e));
      }, o.inherits(a, n), a.prototype.processChunk = function (e) {
        var t = o.transformTo(h.uint8array ? "uint8array" : "array", e.data);
        if (this.leftOver && this.leftOver.length) {
          if (h.uint8array) {
            var r = t;
            (t = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), t.set(r, this.leftOver.length);
          } else t = this.leftOver.concat(t);
          this.leftOver = null;
        }
        var n = function (e, t) {
            var r;
            for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
            return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
          }(t),
          i = t;
        n !== t.length && (h.uint8array ? (i = t.subarray(0, n), this.leftOver = t.subarray(n, t.length)) : (i = t.slice(0, n), this.leftOver = t.slice(n, t.length))), this.push({
          data: s.utf8decode(i),
          meta: e.meta
        });
      }, a.prototype.flush = function () {
        this.leftOver && this.leftOver.length && (this.push({
          data: s.utf8decode(this.leftOver),
          meta: {}
        }), this.leftOver = null);
      }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function (e) {
        this.push({
          data: s.utf8encode(e.data),
          meta: e.meta
        });
      }, s.Utf8EncodeWorker = l;
    }, {
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./support": 30,
      "./utils": 32
    }],
    32: [function (e, t, a) {
      "use strict";

      var o = e("./support"),
        h = e("./base64"),
        r = e("./nodejsUtils"),
        u = e("./external");
      function n(e) {
        return e;
      }
      function l(e, t) {
        for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
        return t;
      }
      e("setimmediate"), a.newBlob = function (t, r) {
        a.checkSupport("blob");
        try {
          return new Blob([t], {
            type: r
          });
        } catch (e) {
          try {
            var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return n.append(t), n.getBlob(r);
          } catch (e) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var i = {
        stringifyByChunk: function (e, t, r) {
          var n = [],
            i = 0,
            s = e.length;
          if (s <= r) return String.fromCharCode.apply(null, e);
          for (; i < s;) "array" === t || "nodebuffer" === t ? n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, s)))) : n.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, s)))), i += r;
          return n.join("");
        },
        stringifyByChar: function (e) {
          for (var t = "", r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
          return t;
        },
        applyCanBeUsed: {
          uint8array: function () {
            try {
              return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e) {
              return !1;
            }
          }(),
          nodebuffer: function () {
            try {
              return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
            } catch (e) {
              return !1;
            }
          }()
        }
      };
      function s(e) {
        var t = 65536,
          r = a.getTypeOf(e),
          n = !0;
        if ("uint8array" === r ? n = i.applyCanBeUsed.uint8array : "nodebuffer" === r && (n = i.applyCanBeUsed.nodebuffer), n) for (; 1 < t;) try {
          return i.stringifyByChunk(e, r, t);
        } catch (e) {
          t = Math.floor(t / 2);
        }
        return i.stringifyByChar(e);
      }
      function f(e, t) {
        for (var r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      a.applyFromCharCode = s;
      var c = {};
      c.string = {
        string: n,
        array: function (e) {
          return l(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return c.string.uint8array(e).buffer;
        },
        uint8array: function (e) {
          return l(e, new Uint8Array(e.length));
        },
        nodebuffer: function (e) {
          return l(e, r.allocBuffer(e.length));
        }
      }, c.array = {
        string: s,
        array: n,
        arraybuffer: function (e) {
          return new Uint8Array(e).buffer;
        },
        uint8array: function (e) {
          return new Uint8Array(e);
        },
        nodebuffer: function (e) {
          return r.newBufferFrom(e);
        }
      }, c.arraybuffer = {
        string: function (e) {
          return s(new Uint8Array(e));
        },
        array: function (e) {
          return f(new Uint8Array(e), new Array(e.byteLength));
        },
        arraybuffer: n,
        uint8array: function (e) {
          return new Uint8Array(e);
        },
        nodebuffer: function (e) {
          return r.newBufferFrom(new Uint8Array(e));
        }
      }, c.uint8array = {
        string: s,
        array: function (e) {
          return f(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return e.buffer;
        },
        uint8array: n,
        nodebuffer: function (e) {
          return r.newBufferFrom(e);
        }
      }, c.nodebuffer = {
        string: s,
        array: function (e) {
          return f(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return c.nodebuffer.uint8array(e).buffer;
        },
        uint8array: function (e) {
          return f(e, new Uint8Array(e.length));
        },
        nodebuffer: n
      }, a.transformTo = function (e, t) {
        if (t = t || "", !e) return t;
        a.checkSupport(e);
        var r = a.getTypeOf(t);
        return c[r][e](t);
      }, a.resolve = function (e) {
        for (var t = e.split("/"), r = [], n = 0; n < t.length; n++) {
          var i = t[n];
          "." === i || "" === i && 0 !== n && n !== t.length - 1 || (".." === i ? r.pop() : r.push(i));
        }
        return r.join("/");
      }, a.getTypeOf = function (e) {
        return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : o.nodebuffer && r.isBuffer(e) ? "nodebuffer" : o.uint8array && e instanceof Uint8Array ? "uint8array" : o.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function (e) {
        if (!o[e.toLowerCase()]) throw new Error(e + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function (e) {
        var t,
          r,
          n = "";
        for (r = 0; r < (e || "").length; r++) n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
        return n;
      }, a.delay = function (e, t, r) {
        setImmediate(function () {
          e.apply(r || null, t || []);
        });
      }, a.inherits = function (e, t) {
        function r() {}
        r.prototype = t.prototype, e.prototype = new r();
      }, a.extend = function () {
        var e,
          t,
          r = {};
        for (e = 0; e < arguments.length; e++) for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === r[t] && (r[t] = arguments[e][t]);
        return r;
      }, a.prepareContent = function (r, e, n, i, s) {
        return u.Promise.resolve(e).then(function (n) {
          return o.blob && (n instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n))) && "undefined" != typeof FileReader ? new u.Promise(function (t, r) {
            var e = new FileReader();
            e.onload = function (e) {
              t(e.target.result);
            }, e.onerror = function (e) {
              r(e.target.error);
            }, e.readAsArrayBuffer(n);
          }) : n;
        }).then(function (e) {
          var t = a.getTypeOf(e);
          return t ? ("arraybuffer" === t ? e = a.transformTo("uint8array", e) : "string" === t && (s ? e = h.decode(e) : n && !0 !== i && (e = function (e) {
            return l(e, o.uint8array ? new Uint8Array(e.length) : new Array(e.length));
          }(e))), e) : u.Promise.reject(new Error("Can't read the data of '" + r + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, {
      "./base64": 1,
      "./external": 6,
      "./nodejsUtils": 14,
      "./support": 30,
      setimmediate: 54
    }],
    33: [function (e, t, r) {
      "use strict";

      var n = e("./reader/readerFor"),
        i = e("./utils"),
        s = e("./signature"),
        a = e("./zipEntry"),
        o = e("./support");
      function h(e) {
        this.files = [], this.loadOptions = e;
      }
      h.prototype = {
        checkSignature: function (e) {
          if (!this.reader.readAndCheckSignature(e)) {
            this.reader.index -= 4;
            var t = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
          }
        },
        isSignature: function (e, t) {
          var r = this.reader.index;
          this.reader.setIndex(e);
          var n = this.reader.readString(4) === t;
          return this.reader.setIndex(r), n;
        },
        readBlockEndOfCentral: function () {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e = this.reader.readData(this.zipCommentLength),
            t = o.uint8array ? "uint8array" : "array",
            r = i.transformTo(t, e);
          this.zipComment = this.loadOptions.decodeFileName(r);
        },
        readBlockZip64EndOfCentral: function () {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n;) e = this.reader.readInt(2), t = this.reader.readInt(4), r = this.reader.readData(t), this.zip64ExtensibleData[e] = {
            id: e,
            length: t,
            value: r
          };
        },
        readBlockZip64EndOfCentralLocator: function () {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        },
        readLocalFiles: function () {
          var e, t;
          for (e = 0; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
        },
        readCentralDir: function () {
          var e;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);) (e = new a({
            zip64: this.zip64
          }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        },
        readEndOfCentral: function () {
          var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e);
          var t = e;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
          var n = t - r;
          if (0 < n) this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n);else if (n < 0) throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.");
        },
        prepareReader: function (e) {
          this.reader = n(e);
        },
        load: function (e) {
          this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        }
      }, t.exports = h;
    }, {
      "./reader/readerFor": 22,
      "./signature": 23,
      "./support": 30,
      "./utils": 32,
      "./zipEntry": 34
    }],
    34: [function (e, t, r) {
      "use strict";

      var n = e("./reader/readerFor"),
        s = e("./utils"),
        i = e("./compressedObject"),
        a = e("./crc32"),
        o = e("./utf8"),
        h = e("./compressions"),
        u = e("./support");
      function l(e, t) {
        this.options = e, this.loadOptions = t;
      }
      l.prototype = {
        isEncrypted: function () {
          return 1 == (1 & this.bitFlag);
        },
        useUTF8: function () {
          return 2048 == (2048 & this.bitFlag);
        },
        readLocalPart: function (e) {
          var t, r;
          if (e.skip(22), this.fileNameLength = e.readInt(2), r = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t = function (e) {
            for (var t in h) if (Object.prototype.hasOwnProperty.call(h, t) && h[t].magic === e) return h[t];
            return null;
          }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
        },
        readCentralPart: function (e) {
          this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
          var t = e.readInt(2);
          if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
        },
        processAttributes: function () {
          this.unixPermissions = null, this.dosPermissions = null;
          var e = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
        },
        parseZIP64ExtraField: function () {
          if (this.extraFields[1]) {
            var e = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
          }
        },
        readExtraFields: function (e) {
          var t,
            r,
            n,
            i = e.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e.index + 4 < i;) t = e.readInt(2), r = e.readInt(2), n = e.readData(r), this.extraFields[t] = {
            id: t,
            length: r,
            value: n
          };
          e.setIndex(i);
        },
        handleUTF8: function () {
          var e = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);else {
            var t = this.findExtraFieldUnicodePath();
            if (null !== t) this.fileNameStr = t;else {
              var r = s.transformTo(e, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r);
            }
            var n = this.findExtraFieldUnicodeComment();
            if (null !== n) this.fileCommentStr = n;else {
              var i = s.transformTo(e, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i);
            }
          }
        },
        findExtraFieldUnicodePath: function () {
          var e = this.extraFields[28789];
          if (e) {
            var t = n(e.value);
            return 1 !== t.readInt(1) ? null : a(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
          }
          return null;
        },
        findExtraFieldUnicodeComment: function () {
          var e = this.extraFields[25461];
          if (e) {
            var t = n(e.value);
            return 1 !== t.readInt(1) ? null : a(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
          }
          return null;
        }
      }, t.exports = l;
    }, {
      "./compressedObject": 2,
      "./compressions": 3,
      "./crc32": 4,
      "./reader/readerFor": 22,
      "./support": 30,
      "./utf8": 31,
      "./utils": 32
    }],
    35: [function (e, t, r) {
      "use strict";

      function n(e, t, r) {
        this.name = e, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = t, this._dataBinary = r.binary, this.options = {
          compression: r.compression,
          compressionOptions: r.compressionOptions
        };
      }
      var s = e("./stream/StreamHelper"),
        i = e("./stream/DataWorker"),
        a = e("./utf8"),
        o = e("./compressedObject"),
        h = e("./stream/GenericWorker");
      n.prototype = {
        internalStream: function (e) {
          var t = null,
            r = "string";
          try {
            if (!e) throw new Error("No output type specified.");
            var n = "string" === (r = e.toLowerCase()) || "text" === r;
            "binarystring" !== r && "text" !== r || (r = "string"), t = this._decompressWorker();
            var i = !this._dataBinary;
            i && !n && (t = t.pipe(new a.Utf8EncodeWorker())), !i && n && (t = t.pipe(new a.Utf8DecodeWorker()));
          } catch (e) {
            (t = new h("error")).error(e);
          }
          return new s(t, r, "");
        },
        async: function (e, t) {
          return this.internalStream(e).accumulate(t);
        },
        nodeStream: function (e, t) {
          return this.internalStream(e || "nodebuffer").toNodejsStream(t);
        },
        _compressWorker: function (e, t) {
          if (this._data instanceof o && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
          var r = this._decompressWorker();
          return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r, e, t);
        },
        _decompressWorker: function () {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        }
      };
      for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function () {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
      t.exports = n;
    }, {
      "./compressedObject": 2,
      "./stream/DataWorker": 27,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31
    }],
    36: [function (e, l, t) {
      (function (t) {
        "use strict";

        var r,
          n,
          e = t.MutationObserver || t.WebKitMutationObserver;
        if (e) {
          var i = 0,
            s = new e(u),
            a = t.document.createTextNode("");
          s.observe(a, {
            characterData: !0
          }), r = function () {
            a.data = i = ++i % 2;
          };
        } else if (t.setImmediate || void 0 === t.MessageChannel) r = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function () {
          var e = t.document.createElement("script");
          e.onreadystatechange = function () {
            u(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null;
          }, t.document.documentElement.appendChild(e);
        } : function () {
          setTimeout(u, 0);
        };else {
          var o = new t.MessageChannel();
          o.port1.onmessage = u, r = function () {
            o.port2.postMessage(0);
          };
        }
        var h = [];
        function u() {
          var e, t;
          n = !0;
          for (var r = h.length; r;) {
            for (t = h, h = [], e = -1; ++e < r;) t[e]();
            r = h.length;
          }
          n = !1;
        }
        l.exports = function (e) {
          1 !== h.push(e) || n || r();
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    37: [function (e, t, r) {
      "use strict";

      var i = e("immediate");
      function u() {}
      var l = {},
        s = ["REJECTED"],
        a = ["FULFILLED"],
        n = ["PENDING"];
      function o(e) {
        if ("function" != typeof e) throw new TypeError("resolver must be a function");
        this.state = n, this.queue = [], this.outcome = void 0, e !== u && d(this, e);
      }
      function h(e, t, r) {
        this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
      }
      function f(t, r, n) {
        i(function () {
          var e;
          try {
            e = r(n);
          } catch (e) {
            return l.reject(t, e);
          }
          e === t ? l.reject(t, new TypeError("Cannot resolve promise with itself")) : l.resolve(t, e);
        });
      }
      function c(e) {
        var t = e && e.then;
        if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function () {
          t.apply(e, arguments);
        };
      }
      function d(t, e) {
        var r = !1;
        function n(e) {
          r || (r = !0, l.reject(t, e));
        }
        function i(e) {
          r || (r = !0, l.resolve(t, e));
        }
        var s = p(function () {
          e(i, n);
        });
        "error" === s.status && n(s.value);
      }
      function p(e, t) {
        var r = {};
        try {
          r.value = e(t), r.status = "success";
        } catch (e) {
          r.status = "error", r.value = e;
        }
        return r;
      }
      (t.exports = o).prototype.finally = function (t) {
        if ("function" != typeof t) return this;
        var r = this.constructor;
        return this.then(function (e) {
          return r.resolve(t()).then(function () {
            return e;
          });
        }, function (e) {
          return r.resolve(t()).then(function () {
            throw e;
          });
        });
      }, o.prototype.catch = function (e) {
        return this.then(null, e);
      }, o.prototype.then = function (e, t) {
        if ("function" != typeof e && this.state === a || "function" != typeof t && this.state === s) return this;
        var r = new this.constructor(u);
        this.state !== n ? f(r, this.state === a ? e : t, this.outcome) : this.queue.push(new h(r, e, t));
        return r;
      }, h.prototype.callFulfilled = function (e) {
        l.resolve(this.promise, e);
      }, h.prototype.otherCallFulfilled = function (e) {
        f(this.promise, this.onFulfilled, e);
      }, h.prototype.callRejected = function (e) {
        l.reject(this.promise, e);
      }, h.prototype.otherCallRejected = function (e) {
        f(this.promise, this.onRejected, e);
      }, l.resolve = function (e, t) {
        var r = p(c, t);
        if ("error" === r.status) return l.reject(e, r.value);
        var n = r.value;
        if (n) d(e, n);else {
          e.state = a, e.outcome = t;
          for (var i = -1, s = e.queue.length; ++i < s;) e.queue[i].callFulfilled(t);
        }
        return e;
      }, l.reject = function (e, t) {
        e.state = s, e.outcome = t;
        for (var r = -1, n = e.queue.length; ++r < n;) e.queue[r].callRejected(t);
        return e;
      }, o.resolve = function (e) {
        if (e instanceof this) return e;
        return l.resolve(new this(u), e);
      }, o.reject = function (e) {
        var t = new this(u);
        return l.reject(t, e);
      }, o.all = function (e) {
        var r = this;
        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
        var n = e.length,
          i = !1;
        if (!n) return this.resolve([]);
        var s = new Array(n),
          a = 0,
          t = -1,
          o = new this(u);
        for (; ++t < n;) h(e[t], t);
        return o;
        function h(e, t) {
          r.resolve(e).then(function (e) {
            s[t] = e, ++a !== n || i || (i = !0, l.resolve(o, s));
          }, function (e) {
            i || (i = !0, l.reject(o, e));
          });
        }
      }, o.race = function (e) {
        var t = this;
        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
        var r = e.length,
          n = !1;
        if (!r) return this.resolve([]);
        var i = -1,
          s = new this(u);
        for (; ++i < r;) a = e[i], t.resolve(a).then(function (e) {
          n || (n = !0, l.resolve(s, e));
        }, function (e) {
          n || (n = !0, l.reject(s, e));
        });
        var a;
        return s;
      };
    }, {
      immediate: 36
    }],
    38: [function (e, t, r) {
      "use strict";

      var n = {};
      (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
    }, {
      "./lib/deflate": 39,
      "./lib/inflate": 40,
      "./lib/utils/common": 41,
      "./lib/zlib/constants": 44
    }],
    39: [function (e, t, r) {
      "use strict";

      var a = e("./zlib/deflate"),
        o = e("./utils/common"),
        h = e("./utils/strings"),
        i = e("./zlib/messages"),
        s = e("./zlib/zstream"),
        u = Object.prototype.toString,
        l = 0,
        f = -1,
        c = 0,
        d = 8;
      function p(e) {
        if (!(this instanceof p)) return new p(e);
        this.options = o.assign({
          level: f,
          method: d,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: c,
          to: ""
        }, e || {});
        var t = this.options;
        t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
        var r = a.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (r !== l) throw new Error(i[r]);
        if (t.header && a.deflateSetHeader(this.strm, t.header), t.dictionary) {
          var n;
          if (n = "string" == typeof t.dictionary ? h.string2buf(t.dictionary) : "[object ArrayBuffer]" === u.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (r = a.deflateSetDictionary(this.strm, n)) !== l) throw new Error(i[r]);
          this._dict_set = !0;
        }
      }
      function n(e, t) {
        var r = new p(t);
        if (r.push(e, !0), r.err) throw r.msg || i[r.err];
        return r.result;
      }
      p.prototype.push = function (e, t) {
        var r,
          n,
          i = this.strm,
          s = this.options.chunkSize;
        if (this.ended) return !1;
        n = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? i.input = h.string2buf(e) : "[object ArrayBuffer]" === u.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;
        do {
          if (0 === i.avail_out && (i.output = new o.Buf8(s), i.next_out = 0, i.avail_out = s), 1 !== (r = a.deflate(i, n)) && r !== l) return this.onEnd(r), !(this.ended = !0);
          0 !== i.avail_out && (0 !== i.avail_in || 4 !== n && 2 !== n) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i.output, i.next_out))) : this.onData(o.shrinkBuf(i.output, i.next_out)));
        } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r);
        return 4 === n ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === l) : 2 !== n || (this.onEnd(l), !(i.avail_out = 0));
      }, p.prototype.onData = function (e) {
        this.chunks.push(e);
      }, p.prototype.onEnd = function (e) {
        e === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
      }, r.Deflate = p, r.deflate = n, r.deflateRaw = function (e, t) {
        return (t = t || {}).raw = !0, n(e, t);
      }, r.gzip = function (e, t) {
        return (t = t || {}).gzip = !0, n(e, t);
      };
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/deflate": 46,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    40: [function (e, t, r) {
      "use strict";

      var c = e("./zlib/inflate"),
        d = e("./utils/common"),
        p = e("./utils/strings"),
        m = e("./zlib/constants"),
        n = e("./zlib/messages"),
        i = e("./zlib/zstream"),
        s = e("./zlib/gzheader"),
        _ = Object.prototype.toString;
      function a(e) {
        if (!(this instanceof a)) return new a(e);
        this.options = d.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ""
        }, e || {});
        var t = this.options;
        t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
        var r = c.inflateInit2(this.strm, t.windowBits);
        if (r !== m.Z_OK) throw new Error(n[r]);
        this.header = new s(), c.inflateGetHeader(this.strm, this.header);
      }
      function o(e, t) {
        var r = new a(t);
        if (r.push(e, !0), r.err) throw r.msg || n[r.err];
        return r.result;
      }
      a.prototype.push = function (e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          h = this.strm,
          u = this.options.chunkSize,
          l = this.options.dictionary,
          f = !1;
        if (this.ended) return !1;
        n = t === ~~t ? t : !0 === t ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e ? h.input = p.binstring2buf(e) : "[object ArrayBuffer]" === _.call(e) ? h.input = new Uint8Array(e) : h.input = e, h.next_in = 0, h.avail_in = h.input.length;
        do {
          if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r = c.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === f && (r = m.Z_OK, f = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) return this.onEnd(r), !(this.ended = !0);
          h.next_out && (0 !== h.avail_out && r !== m.Z_STREAM_END && (0 !== h.avail_in || n !== m.Z_FINISH && n !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = p.utf8border(h.output, h.next_out), s = h.next_out - i, a = p.buf2string(h.output, i), h.next_out = s, h.avail_out = u - s, s && d.arraySet(h.output, h.output, i, s, 0), this.onData(a)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
        } while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END);
        return r === m.Z_STREAM_END && (n = m.Z_FINISH), n === m.Z_FINISH ? (r = c.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : n !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
      }, a.prototype.onData = function (e) {
        this.chunks.push(e);
      }, a.prototype.onEnd = function (e) {
        e === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
      }, r.Inflate = a, r.inflate = o, r.inflateRaw = function (e, t) {
        return (t = t || {}).raw = !0, o(e, t);
      }, r.ungzip = o;
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/constants": 44,
      "./zlib/gzheader": 47,
      "./zlib/inflate": 49,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    41: [function (e, t, r) {
      "use strict";

      var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
      r.assign = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
          var r = t.shift();
          if (r) {
            if ("object" != typeof r) throw new TypeError(r + "must be non-object");
            for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n]);
          }
        }
        return e;
      }, r.shrinkBuf = function (e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
      };
      var i = {
          arraySet: function (e, t, r, n, i) {
            if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);else for (var s = 0; s < n; s++) e[i + s] = t[r + s];
          },
          flattenChunks: function (e) {
            var t, r, n, i, s, a;
            for (t = n = 0, r = e.length; t < r; t++) n += e[t].length;
            for (a = new Uint8Array(n), t = i = 0, r = e.length; t < r; t++) s = e[t], a.set(s, i), i += s.length;
            return a;
          }
        },
        s = {
          arraySet: function (e, t, r, n, i) {
            for (var s = 0; s < n; s++) e[i + s] = t[r + s];
          },
          flattenChunks: function (e) {
            return [].concat.apply([], e);
          }
        };
      r.setTyped = function (e) {
        e ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
      }, r.setTyped(n);
    }, {}],
    42: [function (e, t, r) {
      "use strict";

      var h = e("./common"),
        i = !0,
        s = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (e) {
        i = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e) {
        s = !1;
      }
      for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
      function l(e, t) {
        if (t < 65537 && (e.subarray && s || !e.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e, t));
        for (var r = "", n = 0; n < t; n++) r += String.fromCharCode(e[n]);
        return r;
      }
      u[254] = u[254] = 1, r.string2buf = function (e) {
        var t,
          r,
          n,
          i,
          s,
          a = e.length,
          o = 0;
        for (i = 0; i < a; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
        for (t = new h.Buf8(o), i = s = 0; s < o; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
        return t;
      }, r.buf2binstring = function (e) {
        return l(e, e.length);
      }, r.binstring2buf = function (e) {
        for (var t = new h.Buf8(e.length), r = 0, n = t.length; r < n; r++) t[r] = e.charCodeAt(r);
        return t;
      }, r.buf2string = function (e, t) {
        var r,
          n,
          i,
          s,
          a = t || e.length,
          o = new Array(2 * a);
        for (r = n = 0; r < a;) if ((i = e[r++]) < 128) o[n++] = i;else if (4 < (s = u[i])) o[n++] = 65533, r += s - 1;else {
          for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a;) i = i << 6 | 63 & e[r++], s--;
          1 < s ? o[n++] = 65533 : i < 65536 ? o[n++] = i : (i -= 65536, o[n++] = 55296 | i >> 10 & 1023, o[n++] = 56320 | 1023 & i);
        }
        return l(o, n);
      }, r.utf8border = function (e, t) {
        var r;
        for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
        return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
      };
    }, {
      "./common": 41
    }],
    43: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        for (var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
          for (r -= a = 2e3 < r ? 2e3 : r; s = s + (i = i + t[n++] | 0) | 0, --a;);
          i %= 65521, s %= 65521;
        }
        return i | s << 16 | 0;
      };
    }, {}],
    44: [function (e, t, r) {
      "use strict";

      t.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      };
    }, {}],
    45: [function (e, t, r) {
      "use strict";

      var o = function () {
        for (var e, t = [], r = 0; r < 256; r++) {
          e = r;
          for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
          t[r] = e;
        }
        return t;
      }();
      t.exports = function (e, t, r, n) {
        var i = o,
          s = n + r;
        e ^= -1;
        for (var a = n; a < s; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
        return -1 ^ e;
      };
    }, {}],
    46: [function (e, t, r) {
      "use strict";

      var h,
        c = e("../utils/common"),
        u = e("./trees"),
        d = e("./adler32"),
        p = e("./crc32"),
        n = e("./messages"),
        l = 0,
        f = 4,
        m = 0,
        _ = -2,
        g = -1,
        b = 4,
        i = 2,
        v = 8,
        y = 9,
        s = 286,
        a = 30,
        o = 19,
        w = 2 * s + 1,
        k = 15,
        x = 3,
        S = 258,
        z = S + x + 1,
        C = 42,
        E = 113,
        A = 1,
        I = 2,
        O = 3,
        B = 4;
      function R(e, t) {
        return e.msg = n[t], t;
      }
      function T(e) {
        return (e << 1) - (4 < e ? 9 : 0);
      }
      function D(e) {
        for (var t = e.length; 0 <= --t;) e[t] = 0;
      }
      function F(e) {
        var t = e.state,
          r = t.pending;
        r > e.avail_out && (r = e.avail_out), 0 !== r && (c.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0));
      }
      function N(e, t) {
        u._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, F(e.strm);
      }
      function U(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function P(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
      }
      function L(e, t) {
        var r,
          n,
          i = e.max_chain_length,
          s = e.strstart,
          a = e.prev_length,
          o = e.nice_match,
          h = e.strstart > e.w_size - z ? e.strstart - (e.w_size - z) : 0,
          u = e.window,
          l = e.w_mask,
          f = e.prev,
          c = e.strstart + S,
          d = u[s + a - 1],
          p = u[s + a];
        e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
        do {
          if (u[(r = t) + a] === p && u[r + a - 1] === d && u[r] === u[s] && u[++r] === u[s + 1]) {
            s += 2, r++;
            do {} while (u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && s < c);
            if (n = S - (c - s), s = c - S, a < n) {
              if (e.match_start = t, o <= (a = n)) break;
              d = u[s + a - 1], p = u[s + a];
            }
          }
        } while ((t = f[t & l]) > h && 0 != --i);
        return a <= e.lookahead ? a : e.lookahead;
      }
      function j(e) {
        var t,
          r,
          n,
          i,
          s,
          a,
          o,
          h,
          u,
          l,
          f = e.w_size;
        do {
          if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= f + (f - z)) {
            for (c.arraySet(e.window, e.window, f, f, 0), e.match_start -= f, e.strstart -= f, e.block_start -= f, t = r = e.hash_size; n = e.head[--t], e.head[t] = f <= n ? n - f : 0, --r;);
            for (t = r = f; n = e.prev[--t], e.prev[t] = f <= n ? n - f : 0, --r;);
            i += f;
          }
          if (0 === e.strm.avail_in) break;
          if (a = e.strm, o = e.window, h = e.strstart + e.lookahead, u = i, l = void 0, l = a.avail_in, u < l && (l = u), r = 0 === l ? 0 : (a.avail_in -= l, c.arraySet(o, a.input, a.next_in, l, h), 1 === a.state.wrap ? a.adler = d(a.adler, o, l, h) : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)), a.next_in += l, a.total_in += l, l), e.lookahead += r, e.lookahead + e.insert >= x) for (s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + x - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < x)););
        } while (e.lookahead < z && 0 !== e.strm.avail_in);
      }
      function Z(e, t) {
        for (var r, n;;) {
          if (e.lookahead < z) {
            if (j(e), e.lookahead < z && t === l) return A;
            if (0 === e.lookahead) break;
          }
          if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r)), e.match_length >= x) {
            if (n = u._tr_tally(e, e.strstart - e.match_start, e.match_length - x), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= x) {
              for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, 0 != --e.match_length;);
              e.strstart++;
            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
          } else n = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
          if (n && (N(e, !1), 0 === e.strm.avail_out)) return A;
        }
        return e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
      }
      function W(e, t) {
        for (var r, n, i;;) {
          if (e.lookahead < z) {
            if (j(e), e.lookahead < z && t === l) return A;
            if (0 === e.lookahead) break;
          }
          if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = x - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r), e.match_length <= 5 && (1 === e.strategy || e.match_length === x && 4096 < e.strstart - e.match_start) && (e.match_length = x - 1)), e.prev_length >= x && e.match_length <= e.prev_length) {
            for (i = e.strstart + e.lookahead - x, n = u._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - x), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 != --e.prev_length;);
            if (e.match_available = 0, e.match_length = x - 1, e.strstart++, n && (N(e, !1), 0 === e.strm.avail_out)) return A;
          } else if (e.match_available) {
            if ((n = u._tr_tally(e, 0, e.window[e.strstart - 1])) && N(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return A;
          } else e.match_available = 1, e.strstart++, e.lookahead--;
        }
        return e.match_available && (n = u._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
      }
      function M(e, t, r, n, i) {
        this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i;
      }
      function H() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function G(e) {
        var t;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = i, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? C : E, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = l, u._tr_init(t), m) : R(e, _);
      }
      function K(e) {
        var t = G(e);
        return t === m && function (e) {
          e.window_size = 2 * e.w_size, D(e.head), e.max_lazy_match = h[e.level].max_lazy, e.good_match = h[e.level].good_length, e.nice_match = h[e.level].nice_length, e.max_chain_length = h[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = x - 1, e.match_available = 0, e.ins_h = 0;
        }(e.state), t;
      }
      function Y(e, t, r, n, i, s) {
        if (!e) return _;
        var a = 1;
        if (t === g && (t = 6), n < 0 ? (a = 0, n = -n) : 15 < n && (a = 2, n -= 16), i < 1 || y < i || r !== v || n < 8 || 15 < n || t < 0 || 9 < t || s < 0 || b < s) return R(e, _);
        8 === n && (n = 9);
        var o = new H();
        return (e.state = o).strm = e, o.wrap = a, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + x - 1) / x), o.window = new c.Buf8(2 * o.w_size), o.head = new c.Buf16(o.hash_size), o.prev = new c.Buf16(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new c.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = t, o.strategy = s, o.method = r, K(e);
      }
      h = [new M(0, 0, 0, 0, function (e, t) {
        var r = 65535;
        for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
          if (e.lookahead <= 1) {
            if (j(e), 0 === e.lookahead && t === l) return A;
            if (0 === e.lookahead) break;
          }
          e.strstart += e.lookahead, e.lookahead = 0;
          var n = e.block_start + r;
          if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, N(e, !1), 0 === e.strm.avail_out)) return A;
          if (e.strstart - e.block_start >= e.w_size - z && (N(e, !1), 0 === e.strm.avail_out)) return A;
        }
        return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : (e.strstart > e.block_start && (N(e, !1), e.strm.avail_out), A);
      }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function (e, t) {
        return Y(e, t, v, 15, 8, 0);
      }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function (e, t) {
        return e && e.state ? 2 !== e.state.wrap ? _ : (e.state.gzhead = t, m) : _;
      }, r.deflate = function (e, t) {
        var r, n, i, s;
        if (!e || !e.state || 5 < t || t < 0) return e ? R(e, _) : _;
        if (n = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === n.status && t !== f) return R(e, 0 === e.avail_out ? -5 : _);
        if (n.strm = e, r = n.last_flush, n.last_flush = t, n.status === C) if (2 === n.wrap) e.adler = 0, U(n, 31), U(n, 139), U(n, 8), n.gzhead ? (U(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), U(n, 255 & n.gzhead.time), U(n, n.gzhead.time >> 8 & 255), U(n, n.gzhead.time >> 16 & 255), U(n, n.gzhead.time >> 24 & 255), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (U(n, 255 & n.gzhead.extra.length), U(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = p(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 3), n.status = E);else {
          var a = v + (n.w_bits - 8 << 4) << 8;
          a |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (a |= 32), a += 31 - a % 31, n.status = E, P(n, a), 0 !== n.strstart && (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), e.adler = 1;
        }
        if (69 === n.status) if (n.gzhead.extra) {
          for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending !== n.pending_buf_size));) U(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
          n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73);
        } else n.status = 73;
        if (73 === n.status) if (n.gzhead.name) {
          i = n.pending;
          do {
            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
              s = 1;
              break;
            }
            s = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, U(n, s);
          } while (0 !== s);
          n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.gzindex = 0, n.status = 91);
        } else n.status = 91;
        if (91 === n.status) if (n.gzhead.comment) {
          i = n.pending;
          do {
            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
              s = 1;
              break;
            }
            s = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, U(n, s);
          } while (0 !== s);
          n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.status = 103);
        } else n.status = 103;
        if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && F(e), n.pending + 2 <= n.pending_buf_size && (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), e.adler = 0, n.status = E)) : n.status = E), 0 !== n.pending) {
          if (F(e), 0 === e.avail_out) return n.last_flush = -1, m;
        } else if (0 === e.avail_in && T(t) <= T(r) && t !== f) return R(e, -5);
        if (666 === n.status && 0 !== e.avail_in) return R(e, -5);
        if (0 !== e.avail_in || 0 !== n.lookahead || t !== l && 666 !== n.status) {
          var o = 2 === n.strategy ? function (e, t) {
            for (var r;;) {
              if (0 === e.lookahead && (j(e), 0 === e.lookahead)) {
                if (t === l) return A;
                break;
              }
              if (e.match_length = 0, r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (N(e, !1), 0 === e.strm.avail_out)) return A;
            }
            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
          }(n, t) : 3 === n.strategy ? function (e, t) {
            for (var r, n, i, s, a = e.window;;) {
              if (e.lookahead <= S) {
                if (j(e), e.lookahead <= S && t === l) return A;
                if (0 === e.lookahead) break;
              }
              if (e.match_length = 0, e.lookahead >= x && 0 < e.strstart && (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] && n === a[++i]) {
                s = e.strstart + S;
                do {} while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < s);
                e.match_length = S - (s - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
              }
              if (e.match_length >= x ? (r = u._tr_tally(e, 1, e.match_length - x), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (N(e, !1), 0 === e.strm.avail_out)) return A;
            }
            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
          }(n, t) : h[n.level].func(n, t);
          if (o !== O && o !== B || (n.status = 666), o === A || o === O) return 0 === e.avail_out && (n.last_flush = -1), m;
          if (o === I && (1 === t ? u._tr_align(n) : 5 !== t && (u._tr_stored_block(n, 0, 0, !1), 3 === t && (D(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), F(e), 0 === e.avail_out)) return n.last_flush = -1, m;
        }
        return t !== f ? m : n.wrap <= 0 ? 1 : (2 === n.wrap ? (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), U(n, e.adler >> 16 & 255), U(n, e.adler >> 24 & 255), U(n, 255 & e.total_in), U(n, e.total_in >> 8 & 255), U(n, e.total_in >> 16 & 255), U(n, e.total_in >> 24 & 255)) : (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), F(e), 0 < n.wrap && (n.wrap = -n.wrap), 0 !== n.pending ? m : 1);
      }, r.deflateEnd = function (e) {
        var t;
        return e && e.state ? (t = e.state.status) !== C && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== E && 666 !== t ? R(e, _) : (e.state = null, t === E ? R(e, -3) : m) : _;
      }, r.deflateSetDictionary = function (e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          h,
          u,
          l = t.length;
        if (!e || !e.state) return _;
        if (2 === (s = (r = e.state).wrap) || 1 === s && r.status !== C || r.lookahead) return _;
        for (1 === s && (e.adler = d(e.adler, t, l, 0)), r.wrap = 0, l >= r.w_size && (0 === s && (D(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new c.Buf8(r.w_size), c.arraySet(u, t, l - r.w_size, r.w_size, 0), t = u, l = r.w_size), a = e.avail_in, o = e.next_in, h = e.input, e.avail_in = l, e.next_in = 0, e.input = t, j(r); r.lookahead >= x;) {
          for (n = r.strstart, i = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + x - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++, --i;);
          r.strstart = n, r.lookahead = x - 1, j(r);
        }
        return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = x - 1, r.match_available = 0, e.next_in = o, e.input = h, e.avail_in = a, r.wrap = s, m;
      }, r.deflateInfo = "pako deflate (from Nodeca project)";
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./messages": 51,
      "./trees": 52
    }],
    47: [function (e, t, r) {
      "use strict";

      t.exports = function () {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}],
    48: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
        r = e.state, n = e.next_in, z = e.input, i = n + (e.avail_in - 5), s = e.next_out, C = e.output, a = s - (t - e.avail_out), o = s + (e.avail_out - 257), h = r.dmax, u = r.wsize, l = r.whave, f = r.wnext, c = r.window, d = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
        e: do {
          p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
          t: for (;;) {
            if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;else {
              if (!(16 & y)) {
                if (0 == (64 & y)) {
                  v = m[(65535 & v) + (d & (1 << y) - 1)];
                  continue t;
                }
                if (32 & y) {
                  r.mode = 12;
                  break e;
                }
                e.msg = "invalid literal/length code", r.mode = 30;
                break e;
              }
              w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
              r: for (;;) {
                if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                  if (0 == (64 & y)) {
                    v = _[(65535 & v) + (d & (1 << y) - 1)];
                    continue r;
                  }
                  e.msg = "invalid distance code", r.mode = 30;
                  break e;
                }
                if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                  e.msg = "invalid distance too far back", r.mode = 30;
                  break e;
                }
                if (d >>>= y, p -= y, (y = s - a) < k) {
                  if (l < (y = k - y) && r.sane) {
                    e.msg = "invalid distance too far back", r.mode = 30;
                    break e;
                  }
                  if (S = c, (x = 0) === f) {
                    if (x += u - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y;);
                      x = s - k, S = C;
                    }
                  } else if (f < y) {
                    if (x += u + f - y, (y -= f) < w) {
                      for (w -= y; C[s++] = c[x++], --y;);
                      if (x = 0, f < w) {
                        for (w -= y = f; C[s++] = c[x++], --y;);
                        x = s - k, S = C;
                      }
                    }
                  } else if (x += f - y, y < w) {
                    for (w -= y; C[s++] = c[x++], --y;);
                    x = s - k, S = C;
                  }
                  for (; 2 < w;) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                  w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                } else {
                  for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3););
                  w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                }
                break;
              }
            }
            break;
          }
        } while (n < i && s < o);
        n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e.next_in = n, e.next_out = s, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = d, r.bits = p;
      };
    }, {}],
    49: [function (e, t, r) {
      "use strict";

      var I = e("../utils/common"),
        O = e("./adler32"),
        B = e("./crc32"),
        R = e("./inffast"),
        T = e("./inftrees"),
        D = 1,
        F = 2,
        N = 0,
        U = -2,
        P = 1,
        n = 852,
        i = 592;
      function L(e) {
        return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
      }
      function s() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function a(e) {
        var t;
        return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = P, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new I.Buf32(n), t.distcode = t.distdyn = new I.Buf32(i), t.sane = 1, t.back = -1, N) : U;
      }
      function o(e) {
        var t;
        return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, a(e)) : U;
      }
      function h(e, t) {
        var r, n;
        return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? U : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, o(e))) : U;
      }
      function u(e, t) {
        var r, n;
        return e ? (n = new s(), (e.state = n).window = null, (r = h(e, t)) !== N && (e.state = null), r) : U;
      }
      var l,
        f,
        c = !0;
      function j(e) {
        if (c) {
          var t;
          for (l = new I.Buf32(512), f = new I.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
          for (; t < 256;) e.lens[t++] = 9;
          for (; t < 280;) e.lens[t++] = 7;
          for (; t < 288;) e.lens[t++] = 8;
          for (T(D, e.lens, 0, 288, l, 0, e.work, {
            bits: 9
          }), t = 0; t < 32;) e.lens[t++] = 5;
          T(F, e.lens, 0, 32, f, 0, e.work, {
            bits: 5
          }), c = !1;
        }
        e.lencode = l, e.lenbits = 9, e.distcode = f, e.distbits = 5;
      }
      function Z(e, t, r, n) {
        var i,
          s = e.state;
        return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), n >= s.wsize ? (I.arraySet(s.window, t, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (n < (i = s.wsize - s.wnext) && (i = n), I.arraySet(s.window, t, r - n, i, s.wnext), (n -= i) ? (I.arraySet(s.window, t, r - n, n, 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0;
      }
      r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function (e) {
        return u(e, 15);
      }, r.inflateInit2 = u, r.inflate = function (e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          h,
          u,
          l,
          f,
          c,
          d,
          p,
          m,
          _,
          g,
          b,
          v,
          y,
          w,
          k,
          x,
          S,
          z,
          C = 0,
          E = new I.Buf8(4),
          A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return U;
        12 === (r = e.state).mode && (r.mode = 13), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, f = o, c = h, x = N;
        e: for (;;) switch (r.mode) {
          case P:
            if (0 === r.wrap) {
              r.mode = 13;
              break;
            }
            for (; l < 16;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (2 & r.wrap && 35615 === u) {
              E[r.check = 0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0), l = u = 0, r.mode = 2;
              break;
            }
            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
              e.msg = "incorrect header check", r.mode = 30;
              break;
            }
            if (8 != (15 & u)) {
              e.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (l -= 4, k = 8 + (15 & (u >>>= 4)), 0 === r.wbits) r.wbits = k;else if (k > r.wbits) {
              e.msg = "invalid window size", r.mode = 30;
              break;
            }
            r.dmax = 1 << k, e.adler = r.check = 1, r.mode = 512 & u ? 10 : 12, l = u = 0;
            break;
          case 2:
            for (; l < 16;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (r.flags = u, 8 != (255 & r.flags)) {
              e.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (57344 & r.flags) {
              e.msg = "unknown header flags set", r.mode = 30;
              break;
            }
            r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 3;
          case 3:
            for (; l < 32;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            r.head && (r.head.time = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, E[2] = u >>> 16 & 255, E[3] = u >>> 24 & 255, r.check = B(r.check, E, 4, 0)), l = u = 0, r.mode = 4;
          case 4:
            for (; l < 16;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 5;
          case 5:
            if (1024 & r.flags) {
              for (; l < 16;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0;
            } else r.head && (r.head.extra = null);
            r.mode = 6;
          case 6:
            if (1024 & r.flags && (o < (d = r.length) && (d = o), d && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, n, s, d, k)), 512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, r.length -= d), r.length)) break e;
            r.length = 0, r.mode = 7;
          case 7:
            if (2048 & r.flags) {
              if (0 === o) break e;
              for (d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && d < o;);
              if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
            } else r.head && (r.head.name = null);
            r.length = 0, r.mode = 8;
          case 8:
            if (4096 & r.flags) {
              if (0 === o) break e;
              for (d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && d < o;);
              if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
            } else r.head && (r.head.comment = null);
            r.mode = 9;
          case 9:
            if (512 & r.flags) {
              for (; l < 16;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              if (u !== (65535 & r.check)) {
                e.msg = "header crc mismatch", r.mode = 30;
                break;
              }
              l = u = 0;
            }
            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 12;
            break;
          case 10:
            for (; l < 32;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            e.adler = r.check = L(u), l = u = 0, r.mode = 11;
          case 11:
            if (0 === r.havedict) return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, 2;
            e.adler = r.check = 1, r.mode = 12;
          case 12:
            if (5 === t || 6 === t) break e;
          case 13:
            if (r.last) {
              u >>>= 7 & l, l -= 7 & l, r.mode = 27;
              break;
            }
            for (; l < 3;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            switch (r.last = 1 & u, l -= 1, 3 & (u >>>= 1)) {
              case 0:
                r.mode = 14;
                break;
              case 1:
                if (j(r), r.mode = 20, 6 !== t) break;
                u >>>= 2, l -= 2;
                break e;
              case 2:
                r.mode = 17;
                break;
              case 3:
                e.msg = "invalid block type", r.mode = 30;
            }
            u >>>= 2, l -= 2;
            break;
          case 14:
            for (u >>>= 7 & l, l -= 7 & l; l < 32;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if ((65535 & u) != (u >>> 16 ^ 65535)) {
              e.msg = "invalid stored block lengths", r.mode = 30;
              break;
            }
            if (r.length = 65535 & u, l = u = 0, r.mode = 15, 6 === t) break e;
          case 15:
            r.mode = 16;
          case 16:
            if (d = r.length) {
              if (o < d && (d = o), h < d && (d = h), 0 === d) break e;
              I.arraySet(i, n, s, d, a), o -= d, s += d, h -= d, a += d, r.length -= d;
              break;
            }
            r.mode = 12;
            break;
          case 17:
            for (; l < 14;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (r.nlen = 257 + (31 & u), u >>>= 5, l -= 5, r.ndist = 1 + (31 & u), u >>>= 5, l -= 5, r.ncode = 4 + (15 & u), u >>>= 4, l -= 4, 286 < r.nlen || 30 < r.ndist) {
              e.msg = "too many length or distance symbols", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 18;
          case 18:
            for (; r.have < r.ncode;) {
              for (; l < 3;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.lens[A[r.have++]] = 7 & u, u >>>= 3, l -= 3;
            }
            for (; r.have < 19;) r.lens[A[r.have++]] = 0;
            if (r.lencode = r.lendyn, r.lenbits = 7, S = {
              bits: r.lenbits
            }, x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
              e.msg = "invalid code lengths set", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 19;
          case 19:
            for (; r.have < r.nlen + r.ndist;) {
              for (; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              if (b < 16) u >>>= _, l -= _, r.lens[r.have++] = b;else {
                if (16 === b) {
                  for (z = _ + 2; l < z;) {
                    if (0 === o) break e;
                    o--, u += n[s++] << l, l += 8;
                  }
                  if (u >>>= _, l -= _, 0 === r.have) {
                    e.msg = "invalid bit length repeat", r.mode = 30;
                    break;
                  }
                  k = r.lens[r.have - 1], d = 3 + (3 & u), u >>>= 2, l -= 2;
                } else if (17 === b) {
                  for (z = _ + 3; l < z;) {
                    if (0 === o) break e;
                    o--, u += n[s++] << l, l += 8;
                  }
                  l -= _, k = 0, d = 3 + (7 & (u >>>= _)), u >>>= 3, l -= 3;
                } else {
                  for (z = _ + 7; l < z;) {
                    if (0 === o) break e;
                    o--, u += n[s++] << l, l += 8;
                  }
                  l -= _, k = 0, d = 11 + (127 & (u >>>= _)), u >>>= 7, l -= 7;
                }
                if (r.have + d > r.nlen + r.ndist) {
                  e.msg = "invalid bit length repeat", r.mode = 30;
                  break;
                }
                for (; d--;) r.lens[r.have++] = k;
              }
            }
            if (30 === r.mode) break;
            if (0 === r.lens[256]) {
              e.msg = "invalid code -- missing end-of-block", r.mode = 30;
              break;
            }
            if (r.lenbits = 9, S = {
              bits: r.lenbits
            }, x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
              e.msg = "invalid literal/lengths set", r.mode = 30;
              break;
            }
            if (r.distbits = 6, r.distcode = r.distdyn, S = {
              bits: r.distbits
            }, x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
              e.msg = "invalid distances set", r.mode = 30;
              break;
            }
            if (r.mode = 20, 6 === t) break e;
          case 20:
            r.mode = 21;
          case 21:
            if (6 <= o && 258 <= h) {
              e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, R(e, c), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, 12 === r.mode && (r.back = -1);
              break;
            }
            for (r.back = 0; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (g && 0 == (240 & g)) {
              for (v = _, y = g, w = b; g = (C = r.lencode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              u >>>= v, l -= v, r.back += v;
            }
            if (u >>>= _, l -= _, r.back += _, r.length = b, 0 === g) {
              r.mode = 26;
              break;
            }
            if (32 & g) {
              r.back = -1, r.mode = 12;
              break;
            }
            if (64 & g) {
              e.msg = "invalid literal/length code", r.mode = 30;
              break;
            }
            r.extra = 15 & g, r.mode = 22;
          case 22:
            if (r.extra) {
              for (z = r.extra; l < z;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.length += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
            }
            r.was = r.length, r.mode = 23;
          case 23:
            for (; g = (C = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (0 == (240 & g)) {
              for (v = _, y = g, w = b; g = (C = r.distcode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              u >>>= v, l -= v, r.back += v;
            }
            if (u >>>= _, l -= _, r.back += _, 64 & g) {
              e.msg = "invalid distance code", r.mode = 30;
              break;
            }
            r.offset = b, r.extra = 15 & g, r.mode = 24;
          case 24:
            if (r.extra) {
              for (z = r.extra; l < z;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
            }
            if (r.offset > r.dmax) {
              e.msg = "invalid distance too far back", r.mode = 30;
              break;
            }
            r.mode = 25;
          case 25:
            if (0 === h) break e;
            if (d = c - h, r.offset > d) {
              if ((d = r.offset - d) > r.whave && r.sane) {
                e.msg = "invalid distance too far back", r.mode = 30;
                break;
              }
              p = d > r.wnext ? (d -= r.wnext, r.wsize - d) : r.wnext - d, d > r.length && (d = r.length), m = r.window;
            } else m = i, p = a - r.offset, d = r.length;
            for (h < d && (d = h), h -= d, r.length -= d; i[a++] = m[p++], --d;);
            0 === r.length && (r.mode = 21);
            break;
          case 26:
            if (0 === h) break e;
            i[a++] = r.length, h--, r.mode = 21;
            break;
          case 27:
            if (r.wrap) {
              for (; l < 32;) {
                if (0 === o) break e;
                o--, u |= n[s++] << l, l += 8;
              }
              if (c -= h, e.total_out += c, r.total += c, c && (e.adler = r.check = r.flags ? B(r.check, i, c, a - c) : O(r.check, i, c, a - c)), c = h, (r.flags ? u : L(u)) !== r.check) {
                e.msg = "incorrect data check", r.mode = 30;
                break;
              }
              l = u = 0;
            }
            r.mode = 28;
          case 28:
            if (r.wrap && r.flags) {
              for (; l < 32;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              if (u !== (4294967295 & r.total)) {
                e.msg = "incorrect length check", r.mode = 30;
                break;
              }
              l = u = 0;
            }
            r.mode = 29;
          case 29:
            x = 1;
            break e;
          case 30:
            x = -3;
            break e;
          case 31:
            return -4;
          case 32:
          default:
            return U;
        }
        return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, (r.wsize || c !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && Z(e, e.output, e.next_out, c - e.avail_out) ? (r.mode = 31, -4) : (f -= e.avail_in, c -= e.avail_out, e.total_in += f, e.total_out += c, r.total += c, r.wrap && c && (e.adler = r.check = r.flags ? B(r.check, i, c, e.next_out - c) : O(r.check, i, c, e.next_out - c)), e.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == f && 0 === c || 4 === t) && x === N && (x = -5), x);
      }, r.inflateEnd = function (e) {
        if (!e || !e.state) return U;
        var t = e.state;
        return t.window && (t.window = null), e.state = null, N;
      }, r.inflateGetHeader = function (e, t) {
        var r;
        return e && e.state ? 0 == (2 & (r = e.state).wrap) ? U : ((r.head = t).done = !1, N) : U;
      }, r.inflateSetDictionary = function (e, t) {
        var r,
          n = t.length;
        return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, t, n, 0) !== r.check ? -3 : Z(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U;
      }, r.inflateInfo = "pako inflate (from Nodeca project)";
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./inffast": 48,
      "./inftrees": 50
    }],
    50: [function (e, t, r) {
      "use strict";

      var D = e("../utils/common"),
        F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      t.exports = function (e, t, r, n, i, s, a, o) {
        var h,
          u,
          l,
          f,
          c,
          d,
          p,
          m,
          _,
          g = o.bits,
          b = 0,
          v = 0,
          y = 0,
          w = 0,
          k = 0,
          x = 0,
          S = 0,
          z = 0,
          C = 0,
          E = 0,
          A = null,
          I = 0,
          O = new D.Buf16(16),
          B = new D.Buf16(16),
          R = null,
          T = 0;
        for (b = 0; b <= 15; b++) O[b] = 0;
        for (v = 0; v < n; v++) O[t[r + v]]++;
        for (k = g, w = 15; 1 <= w && 0 === O[w]; w--);
        if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
        for (y = 1; y < w && 0 === O[y]; y++);
        for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
        if (0 < z && (0 === e || 1 !== w)) return -1;
        for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
        for (v = 0; v < n; v++) 0 !== t[r + v] && (a[B[t[r + v]]++] = v);
        if (d = 0 === e ? (A = R = a, 19) : 1 === e ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
        for (;;) {
          for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u;);
          for (h = 1 << b - 1; E & h;) h >>= 1;
          if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
            if (b === w) break;
            b = t[r + a[v]];
          }
          if (k < b && (E & f) !== l) {
            for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0);) x++, z <<= 1;
            if (C += 1 << x, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
            i[l = E & f] = k << 24 | x << 16 | c - s | 0;
          }
        }
        return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
      };
    }, {
      "../utils/common": 41
    }],
    51: [function (e, t, r) {
      "use strict";

      t.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      };
    }, {}],
    52: [function (e, t, r) {
      "use strict";

      var i = e("../utils/common"),
        o = 0,
        h = 1;
      function n(e) {
        for (var t = e.length; 0 <= --t;) e[t] = 0;
      }
      var s = 0,
        a = 29,
        u = 256,
        l = u + 1 + a,
        f = 30,
        c = 19,
        _ = 2 * l + 1,
        g = 15,
        d = 16,
        p = 7,
        m = 256,
        b = 16,
        v = 17,
        y = 18,
        w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        z = new Array(2 * (l + 2));
      n(z);
      var C = new Array(2 * f);
      n(C);
      var E = new Array(512);
      n(E);
      var A = new Array(256);
      n(A);
      var I = new Array(a);
      n(I);
      var O,
        B,
        R,
        T = new Array(f);
      function D(e, t, r, n, i) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
      }
      function F(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
      }
      function N(e) {
        return e < 256 ? E[e] : E[256 + (e >>> 7)];
      }
      function U(e, t) {
        e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
      }
      function P(e, t, r) {
        e.bi_valid > d - r ? (e.bi_buf |= t << e.bi_valid & 65535, U(e, e.bi_buf), e.bi_buf = t >> d - e.bi_valid, e.bi_valid += r - d) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
      }
      function L(e, t, r) {
        P(e, r[2 * t], r[2 * t + 1]);
      }
      function j(e, t) {
        for (var r = 0; r |= 1 & e, e >>>= 1, r <<= 1, 0 < --t;);
        return r >>> 1;
      }
      function Z(e, t, r) {
        var n,
          i,
          s = new Array(g + 1),
          a = 0;
        for (n = 1; n <= g; n++) s[n] = a = a + r[n - 1] << 1;
        for (i = 0; i <= t; i++) {
          var o = e[2 * i + 1];
          0 !== o && (e[2 * i] = j(s[o]++, o));
        }
      }
      function W(e) {
        var t;
        for (t = 0; t < l; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < f; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < c; t++) e.bl_tree[2 * t] = 0;
        e.dyn_ltree[2 * m] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
      }
      function M(e) {
        8 < e.bi_valid ? U(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
      }
      function H(e, t, r, n) {
        var i = 2 * t,
          s = 2 * r;
        return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r];
      }
      function G(e, t, r) {
        for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && H(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !H(t, n, e.heap[i], e.depth));) e.heap[r] = e.heap[i], r = i, i <<= 1;
        e.heap[r] = n;
      }
      function K(e, t, r) {
        var n,
          i,
          s,
          a,
          o = 0;
        if (0 !== e.last_lit) for (; n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], i = e.pending_buf[e.l_buf + o], o++, 0 === n ? L(e, i, t) : (L(e, (s = A[i]) + u + 1, t), 0 !== (a = w[s]) && P(e, i -= I[s], a), L(e, s = N(--n), r), 0 !== (a = k[s]) && P(e, n -= T[s], a)), o < e.last_lit;);
        L(e, m, t);
      }
      function Y(e, t) {
        var r,
          n,
          i,
          s = t.dyn_tree,
          a = t.stat_desc.static_tree,
          o = t.stat_desc.has_stree,
          h = t.stat_desc.elems,
          u = -1;
        for (e.heap_len = 0, e.heap_max = _, r = 0; r < h; r++) 0 !== s[2 * r] ? (e.heap[++e.heap_len] = u = r, e.depth[r] = 0) : s[2 * r + 1] = 0;
        for (; e.heap_len < 2;) s[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, o && (e.static_len -= a[2 * i + 1]);
        for (t.max_code = u, r = e.heap_len >> 1; 1 <= r; r--) G(e, s, r);
        for (i = h; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], G(e, s, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, s[2 * i] = s[2 * r] + s[2 * n], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, s[2 * r + 1] = s[2 * n + 1] = i, e.heap[1] = i++, G(e, s, 1), 2 <= e.heap_len;);
        e.heap[--e.heap_max] = e.heap[1], function (e, t) {
          var r,
            n,
            i,
            s,
            a,
            o,
            h = t.dyn_tree,
            u = t.max_code,
            l = t.stat_desc.static_tree,
            f = t.stat_desc.has_stree,
            c = t.stat_desc.extra_bits,
            d = t.stat_desc.extra_base,
            p = t.stat_desc.max_length,
            m = 0;
          for (s = 0; s <= g; s++) e.bl_count[s] = 0;
          for (h[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < _; r++) p < (s = h[2 * h[2 * (n = e.heap[r]) + 1] + 1] + 1) && (s = p, m++), h[2 * n + 1] = s, u < n || (e.bl_count[s]++, a = 0, d <= n && (a = c[n - d]), o = h[2 * n], e.opt_len += o * (s + a), f && (e.static_len += o * (l[2 * n + 1] + a)));
          if (0 !== m) {
            do {
              for (s = p - 1; 0 === e.bl_count[s];) s--;
              e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[p]--, m -= 2;
            } while (0 < m);
            for (s = p; 0 !== s; s--) for (n = e.bl_count[s]; 0 !== n;) u < (i = e.heap[--r]) || (h[2 * i + 1] !== s && (e.opt_len += (s - h[2 * i + 1]) * h[2 * i], h[2 * i + 1] = s), n--);
          }
        }(e, t), Z(s, u, e.bl_count);
      }
      function X(e, t, r) {
        var n,
          i,
          s = -1,
          a = t[1],
          o = 0,
          h = 7,
          u = 4;
        for (0 === a && (h = 138, u = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++) i = a, a = t[2 * (n + 1) + 1], ++o < h && i === a || (o < u ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[2 * b]++) : o <= 10 ? e.bl_tree[2 * v]++ : e.bl_tree[2 * y]++, s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4));
      }
      function V(e, t, r) {
        var n,
          i,
          s = -1,
          a = t[1],
          o = 0,
          h = 7,
          u = 4;
        for (0 === a && (h = 138, u = 3), n = 0; n <= r; n++) if (i = a, a = t[2 * (n + 1) + 1], !(++o < h && i === a)) {
          if (o < u) for (; L(e, i, e.bl_tree), 0 != --o;);else 0 !== i ? (i !== s && (L(e, i, e.bl_tree), o--), L(e, b, e.bl_tree), P(e, o - 3, 2)) : o <= 10 ? (L(e, v, e.bl_tree), P(e, o - 3, 3)) : (L(e, y, e.bl_tree), P(e, o - 11, 7));
          s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4);
        }
      }
      n(T);
      var q = !1;
      function J(e, t, r, n) {
        P(e, (s << 1) + (n ? 1 : 0), 3), function (e, t, r, n) {
          M(e), n && (U(e, r), U(e, ~r)), i.arraySet(e.pending_buf, e.window, t, r, e.pending), e.pending += r;
        }(e, t, r, !0);
      }
      r._tr_init = function (e) {
        q || (function () {
          var e,
            t,
            r,
            n,
            i,
            s = new Array(g + 1);
          for (n = r = 0; n < a - 1; n++) for (I[n] = r, e = 0; e < 1 << w[n]; e++) A[r++] = n;
          for (A[r - 1] = n, n = i = 0; n < 16; n++) for (T[n] = i, e = 0; e < 1 << k[n]; e++) E[i++] = n;
          for (i >>= 7; n < f; n++) for (T[n] = i << 7, e = 0; e < 1 << k[n] - 7; e++) E[256 + i++] = n;
          for (t = 0; t <= g; t++) s[t] = 0;
          for (e = 0; e <= 143;) z[2 * e + 1] = 8, e++, s[8]++;
          for (; e <= 255;) z[2 * e + 1] = 9, e++, s[9]++;
          for (; e <= 279;) z[2 * e + 1] = 7, e++, s[7]++;
          for (; e <= 287;) z[2 * e + 1] = 8, e++, s[8]++;
          for (Z(z, l + 1, s), e = 0; e < f; e++) C[2 * e + 1] = 5, C[2 * e] = j(e, 5);
          O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
        }(), q = !0), e.l_desc = new F(e.dyn_ltree, O), e.d_desc = new F(e.dyn_dtree, B), e.bl_desc = new F(e.bl_tree, R), e.bi_buf = 0, e.bi_valid = 0, W(e);
      }, r._tr_stored_block = J, r._tr_flush_block = function (e, t, r, n) {
        var i,
          s,
          a = 0;
        0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function (e) {
          var t,
            r = 4093624447;
          for (t = 0; t <= 31; t++, r >>>= 1) if (1 & r && 0 !== e.dyn_ltree[2 * t]) return o;
          if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return h;
          for (t = 32; t < u; t++) if (0 !== e.dyn_ltree[2 * t]) return h;
          return o;
        }(e)), Y(e, e.l_desc), Y(e, e.d_desc), a = function (e) {
          var t;
          for (X(e, e.dyn_ltree, e.l_desc.max_code), X(e, e.dyn_dtree, e.d_desc.max_code), Y(e, e.bl_desc), t = c - 1; 3 <= t && 0 === e.bl_tree[2 * S[t] + 1]; t--);
          return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
        }(e), i = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= i && (i = s)) : i = s = r + 5, r + 4 <= i && -1 !== t ? J(e, t, r, n) : 4 === e.strategy || s === i ? (P(e, 2 + (n ? 1 : 0), 3), K(e, z, C)) : (P(e, 4 + (n ? 1 : 0), 3), function (e, t, r, n) {
          var i;
          for (P(e, t - 257, 5), P(e, r - 1, 5), P(e, n - 4, 4), i = 0; i < n; i++) P(e, e.bl_tree[2 * S[i] + 1], 3);
          V(e, e.dyn_ltree, t - 1), V(e, e.dyn_dtree, r - 1);
        }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), K(e, e.dyn_ltree, e.dyn_dtree)), W(e), n && M(e);
      }, r._tr_tally = function (e, t, r) {
        return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (A[r] + u + 1)]++, e.dyn_dtree[2 * N(t)]++), e.last_lit === e.lit_bufsize - 1;
      }, r._tr_align = function (e) {
        P(e, 2, 3), L(e, m, z), function (e) {
          16 === e.bi_valid ? (U(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
        }(e);
      };
    }, {
      "../utils/common": 41
    }],
    53: [function (e, t, r) {
      "use strict";

      t.exports = function () {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}],
    54: [function (e, t, r) {
      (function (e) {
        !function (r, n) {
          "use strict";

          if (!r.setImmediate) {
            var i,
              s,
              t,
              a,
              o = 1,
              h = {},
              u = !1,
              l = r.document,
              e = Object.getPrototypeOf && Object.getPrototypeOf(r);
            e = e && e.setTimeout ? e : r, i = "[object process]" === {}.toString.call(r.process) ? function (e) {
              process.nextTick(function () {
                c(e);
              });
            } : function () {
              if (r.postMessage && !r.importScripts) {
                var e = !0,
                  t = r.onmessage;
                return r.onmessage = function () {
                  e = !1;
                }, r.postMessage("", "*"), r.onmessage = t, e;
              }
            }() ? (a = "setImmediate$" + Math.random() + "$", r.addEventListener ? r.addEventListener("message", d, !1) : r.attachEvent("onmessage", d), function (e) {
              r.postMessage(a + e, "*");
            }) : r.MessageChannel ? ((t = new MessageChannel()).port1.onmessage = function (e) {
              c(e.data);
            }, function (e) {
              t.port2.postMessage(e);
            }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function (e) {
              var t = l.createElement("script");
              t.onreadystatechange = function () {
                c(e), t.onreadystatechange = null, s.removeChild(t), t = null;
              }, s.appendChild(t);
            }) : function (e) {
              setTimeout(c, 0, e);
            }, e.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
              var n = {
                callback: e,
                args: t
              };
              return h[o] = n, i(o), o++;
            }, e.clearImmediate = f;
          }
          function f(e) {
            delete h[e];
          }
          function c(e) {
            if (u) setTimeout(c, 0, e);else {
              var t = h[e];
              if (t) {
                u = !0;
                try {
                  !function (e) {
                    var t = e.callback,
                      r = e.args;
                    switch (r.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(r[0]);
                        break;
                      case 2:
                        t(r[0], r[1]);
                        break;
                      case 3:
                        t(r[0], r[1], r[2]);
                        break;
                      default:
                        t.apply(n, r);
                    }
                  }(t);
                } finally {
                  f(e), u = !1;
                }
              }
            }
          }
          function d(e) {
            e.source === r && "string" == typeof e.data && 0 === e.data.indexOf(a) && c(+e.data.slice(a.length));
          }
        }("undefined" == typeof self ? void 0 === e ? this : e : self);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}]
  }, {}, [10])(10);
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-book-assets/jszip.js", error: String((e && e.message) || e) }); }

// brand-book-assets/token-tables.js
try { (() => {
// Auto-generates the "I nostri token" tables from the live CSS variables.
// Edit tokens/*.css and these tables update automatically — single source of truth.
(function () {
  function build() {
    var root = getComputedStyle(document.documentElement);
    var probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.whiteSpace = 'nowrap';
    document.body.appendChild(probe);
    function res(name, prop) {
      probe.style[prop] = '';
      probe.style[prop] = 'var(' + name + ')';
      return getComputedStyle(probe)[prop];
    }
    function hx(v) {
      if (!v || v.indexOf('rgb') !== 0) return v;
      var inside = v.substring(v.indexOf('(') + 1, v.indexOf(')'));
      var p = inside.split(',');
      function h(x) {
        var s = (parseInt(x, 10) || 0).toString(16);
        return s.length < 2 ? '0' + s : s;
      }
      return ('#' + h(p[0]) + h(p[1]) + h(p[2])).toUpperCase();
    }
    var GR = 'display:grid;grid-template-columns:280px 1fr 60px;gap:16px;align-items:center;';
    var TH = 'font-family:var(--font-paragraph);font-weight:700;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--greyscale-mid)';
    function head() {
      return '<div style="' + GR + 'padding:0 0 8px;border-bottom:2px solid var(--greyscale-extralight)"><span style="' + TH + '">Token</span><span style="' + TH + '">Valore</span><span style="' + TH + ';justify-self:end">Anteprima</span></div>';
    }
    function rowH(n, v, pv) {
      return '<div style="' + GR + 'padding:11px 0;border-bottom:1px solid var(--greyscale-extralight)"><code style="font-size:13px;color:#060233">' + n + '</code><span style="font-size:13px;color:var(--greyscale-mid)">' + v + '</span><span style="justify-self:end;display:flex">' + pv + '</span></div>';
    }
    function pColor(n) {
      return '<span style="width:44px;height:26px;border-radius:5px;background:var(' + n + ');box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)"></span>';
    }
    function pFam(n) {
      return '<span style="font-family:var(' + n + ');font-weight:700;font-size:20px;color:#060233">Aa</span>';
    }
    function pSize(px) {
      return '<span style="font-family:var(--font-title);font-weight:700;font-size:' + px + 'px;line-height:1;color:#060233">Aa</span>';
    }
    function pWeight(n) {
      return '<span style="font-family:var(--font-paragraph);font-weight:var(' + n + ');font-size:18px;color:#060233">Aa</span>';
    }
    function pSpace(px) {
      return '<span style="height:14px;width:' + px + 'px;background:var(--mint-400);border-radius:3px"></span>';
    }
    function pRadius(n) {
      return '<span style="width:32px;height:32px;border-radius:var(' + n + ');background:var(--mint-200);box-shadow:inset 0 0 0 1px var(--mint-300)"></span>';
    }
    function pShadow(n) {
      return '<span style="width:42px;height:26px;border-radius:6px;background:#fff;box-shadow:var(' + n + ')"></span>';
    }
    var GROUPS = [{
      h: 'Colore',
      type: 'color',
      names: ['--mint-00', '--mint-100', '--mint-200', '--mint-300', '--mint-400', '--mint-500', '--mint-600', '--mint-800', '--seafoam', '--purple-200', '--purple-400', '--purple-500', '--purple-600', '--iris', '--neon-violet', '--midnight', '--grey-100', '--grey-200', '--grey-400', '--grey-600', '--grey-800', '--grey-900']
    }, {
      h: 'Tipografia',
      type: 'type',
      names: ['--font-title', '--font-paragraph', '--font-display', '--h1', '--h2', '--h3', '--h4', '--h5', '--h6', '--h1-landing', '--h2-landing', '--h3-landing', '--label', '--label-1', '--label-2', '--label-3', '--label-4', '--paragraph-p1', '--paragraph-span1', '--paragraph-span2', '--paragraph-span3', '--paragraph-span4', '--button-1', '--button-2', '--button-3', '--button-4', '--more-sugar-1', '--more-sugar-2']
    }, {
      h: 'Spaziatura',
      type: 'space',
      names: ['--space-0', '--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-8', '--space-10', '--space-12', '--space-16', '--space-20']
    }, {
      h: 'Raggi',
      type: 'radius',
      names: ['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-2xl', '--radius-full']
    }, {
      h: 'Ombre',
      type: 'shadow',
      names: ['--shadow-card', '--shadow-modal', '--shadow-input-border', '--shadow-input-focus', '--shadow-input-disabled']
    }, {
      h: 'Semantici',
      type: 'color',
      names: ['--brand-base', '--brand-primary', '--accent-mid', '--accent-dark', '--ui-primary', '--ui-secondary', '--text-brand-mid', '--feedback-success', '--feedback-success-text', '--feedback-error', '--feedback-error-text', '--feedback-warning', '--feedback-waiting', '--feedback-info', '--topic-marketing', '--topic-design', '--topic-dev', '--topic-data', '--topic-blockchain', '--topic-startup', '--topic-mindset']
    }, {
      h: 'Pesi',
      type: 'weight',
      names: ['--weight-regular', '--weight-medium', '--weight-semibold', '--weight-bold', '--weight-extra', '--weight-black']
    }, {
      h: 'Layout',
      type: 'plain',
      names: ['--container-max', '--sidebar-w', '--sidebar-w-collapsed', '--focus-ring']
    }];
    var out = '';
    GROUPS.forEach(function (grp) {
      var rows = '';
      grp.names.forEach(function (n) {
        var v = '',
          pv = '';
        if (grp.type === 'color') {
          var rgb = res(n, 'color');
          if (!rgb) return;
          v = hx(rgb);
          pv = pColor(n);
        } else if (grp.type === 'type') {
          if (n.indexOf('--font') === 0) {
            v = res(n, 'fontFamily').replace(/["']/g, '').split(',')[0];
            pv = pFam(n);
          } else {
            var fs = res(n, 'fontSize');
            v = fs;
            pv = pSize(Math.min(parseFloat(fs) || 16, 28));
          }
        } else if (grp.type === 'weight') {
          v = res(n, 'fontWeight');
          pv = pWeight(n);
        } else if (grp.type === 'space') {
          var s = res(n, 'fontSize');
          v = s;
          pv = pSpace(Math.min(parseFloat(s) || 0, 52));
        } else if (grp.type === 'radius') {
          v = res(n, 'borderTopLeftRadius');
          pv = pRadius(n);
        } else if (grp.type === 'shadow') {
          var sh = res(n, 'boxShadow');
          v = sh && sh !== 'none' ? sh.length > 44 ? sh.slice(0, 44) + '…' : sh : root.getPropertyValue(n).trim();
          pv = pShadow(n);
        } else {
          v = (root.getPropertyValue(n) || '').trim();
        }
        rows += rowH(n, v, pv);
      });
      out += '<h3 style="margin-top:48px">' + grp.h + '</h3><div style="margin:14px 0 8px">' + head() + rows + '</div>';
    });
    var host = document.getElementById('tok-tables');
    if (host) host.innerHTML = out;
    probe.remove();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);else build();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-book-assets/token-tables.js", error: String((e && e.message) || e) }); }

// components/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 40,
  md: 56,
  lg: 80
};

/** Avatar — round profile image with optional mint ring; falls back to initials on a mint tint. */
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  className = "",
  style = {},
  ...rest
}) {
  const dim = typeof size === "number" ? size : sizes[size];
  const [failed, setFailed] = React.useState(false);
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const showImg = src && !failed;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-full)",
      overflow: "hidden",
      flexShrink: 0,
      backgroundColor: "var(--brand-primary-light)",
      color: "var(--brand-secondary)",
      fontFamily: "var(--font-title)",
      fontWeight: "var(--weight-bold)",
      fontSize: dim * 0.36,
      boxShadow: ring ? "0 0 0 3px var(--brand-primary)" : "none",
      ...style
    }
  }, rest), showImg ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    onError: () => setFailed(true),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: "var(--greyscale-extralight)",
    fg: "var(--greyscale-dark)"
  },
  brand: {
    bg: "var(--brand-primary)",
    fg: "var(--greyscale-base)"
  },
  success: {
    bg: "var(--feedback-success-light)",
    fg: "var(--feedback-success-text)"
  },
  error: {
    bg: "var(--feedback-error-light)",
    fg: "var(--feedback-error-text)"
  },
  warning: {
    bg: "var(--feedback-warning-light)",
    fg: "var(--feedback-warning-text)"
  },
  info: {
    bg: "var(--feedback-info-light)",
    fg: "var(--feedback-info-text)"
  }
};

/**
 * Badge — small solid status/count chip. The "NEW" sidebar badge and point
 * counters are this shape. Uppercase by default.
 */
function Badge({
  tone = "neutral",
  children,
  className = "",
  style = {},
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      backgroundColor: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-sm)",
      padding: "2px 6px",
      fontFamily: "var(--font-paragraph)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--label-4)",
      lineHeight: "var(--leading-tight)",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeStyles = {
  sm: {
    padding: "4px 8px",
    fontSize: "var(--button-4)"
  },
  md: {
    padding: "8px 16px",
    fontSize: "var(--button-3)"
  },
  lg: {
    padding: "16px 32px",
    fontSize: "var(--button-2)"
  }
};

// Secondary-button tone (border + text); default greys-up to dark slate on hover.
const toneBorder = {
  default: "var(--accent-dark)",
  success: "var(--feedback-success-text)",
  error: "var(--feedback-error-text)"
};

/**
 * Button — primary brand action (purple accent) or secondary outline.
 * Uppercase, Inter semibold, rounded 4px. Mirrors the product Button.
 */
function Button({
  as = "button",
  variant = "primary",
  size = "lg",
  tone = "default",
  disabled = false,
  icon,
  children,
  className = "",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: disabled ? "default" : "pointer",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-paragraph)",
    fontWeight: "var(--weight-semibold)",
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: "var(--leading-tight)",
    transition: "background-color .15s linear, border-color .15s linear, color .15s linear",
    outline: focus ? "2px solid var(--midnight)" : "none",
    outlineOffset: "2px",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
    ...sizeStyles[size]
  };
  let variantStyle;
  if (variant === "primary") {
    variantStyle = {
      border: "none",
      color: "var(--greyscale-base)",
      backgroundColor: hover ? "var(--accent-dark)" : "var(--accent-mid)"
    };
  } else {
    const hoverDark = tone === "default" && hover;
    variantStyle = {
      border: `1px solid ${hoverDark ? "var(--greyscale-dark)" : toneBorder[tone]}`,
      color: hoverDark ? "var(--greyscale-dark)" : toneBorder[tone],
      backgroundColor: "var(--ui-secondary)"
    };
  }
  const Tag = as === "link" ? "a" : "button";
  const tagProps = Tag === "button" ? {
    type: "button",
    disabled
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      ...base,
      ...variantStyle,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, tagProps, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the universal white surface: rounded-lg, one soft shadow, no border.
 * Used for nearly every grouped block in the product. `interactive` lifts on hover.
 */
function Card({
  padding = "24px",
  interactive = false,
  children,
  className = "",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      backgroundColor: "var(--ui-primary)",
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "0 8px 24px rgba(0,0,0,0.08)" : "var(--shadow-card)",
      padding,
      color: "var(--greyscale-dark)",
      transition: "box-shadow .15s linear, transform .15s linear",
      transform: hover ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card.jsx", error: String((e && e.message) || e) }); }

// components/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Footer — the marketing/platform site footer: left-aligned brand mark, a row of
 * link columns, and a bottom legal line. Midnight surface, mint hover on links.
 */
function Footer({
  columns = [],
  legal = "© 2017 - 2026 start2impact srl Società Benefit | PIVA 10104990964",
  legalLinks = [],
  base = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--midnight)",
      color: "var(--greyscale-base)",
      padding: "56px 40px 40px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      maxWidth: 1100,
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "assets/logo/logo-white.svg",
    alt: "start2impact",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 40,
      justifyContent: "flex-start",
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      minWidth: 150,
      flex: "0 1 auto"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 18px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--paragraph-span1)",
      color: "var(--greyscale-base)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, col.links.map(l => {
    const label = typeof l === "string" ? l : l.label;
    const active = typeof l === "object" && l.active;
    return /*#__PURE__*/React.createElement("li", {
      key: label
    }, /*#__PURE__*/React.createElement("a", {
      href: typeof l === "object" && l.href || "#",
      style: {
        textDecoration: active ? "underline" : "none",
        textUnderlineOffset: "3px",
        color: active ? "var(--brand-primary)" : "var(--greyscale-light)",
        fontFamily: "var(--font-paragraph)",
        fontSize: "var(--paragraph-span2)"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = "var(--brand-primary)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = "var(--greyscale-light)";
      }
    }, label));
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,
      marginTop: 56,
      maxWidth: 1100,
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span3)",
      color: "var(--greyscale-light)"
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), legalLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label || l,
    href: typeof l === "object" && l.href || "#",
    style: {
      color: "var(--greyscale-base)",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      fontWeight: 600
    }
  }, l.label || l))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Footer.jsx", error: String((e && e.message) || e) }); }

// components/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Module-level cache of fetched + normalized SVG markup, keyed by base+name.
const _iconCache = {};

/**
 * Icon — renders a start2impact SVG glyph from assets/icons inline so it
 * recolors via `currentColor` and rasterizes in every renderer (browser,
 * thumbnails, html-to-image). Mirrors the product's FontAwesome usage.
 */
function Icon({
  name,
  base = "",
  size = 20,
  color,
  title,
  className = "",
  style = {},
  ...rest
}) {
  const key = base + "|" + name;
  const [svg, setSvg] = React.useState(_iconCache[key] || null);
  React.useEffect(() => {
    let active = true;
    if (_iconCache[key]) {
      setSvg(_iconCache[key]);
      return;
    }
    fetch(`${base}assets/icons/${name}.svg`).then(r => r.ok ? r.text() : Promise.reject(r.status)).then(t => {
      // Strip authored width/height/fill so the glyph inherits size + currentColor.
      const norm = t.replace(/\s(width|height|fill)="[^"]*"/g, "").replace(/<svg/, '<svg fill="currentColor" width="100%" height="100%" style="display:block"');
      _iconCache[key] = norm;
      if (active) setSvg(norm);
    }).catch(() => {});
    return () => {
      active = false;
    };
  }, [key, base, name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || name,
    className: className,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flexShrink: 0,
      lineHeight: 0,
      color: color || "currentColor",
      ...style
    },
    dangerouslySetInnerHTML: svg ? {
      __html: svg
    } : undefined
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon.jsx", error: String((e && e.message) || e) }); }

// components/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  success: {
    icon: "circle-check",
    bg: "var(--feedback-success-light)",
    fg: "var(--feedback-success-text)",
    iconColor: "var(--feedback-success)"
  },
  error: {
    icon: "circle-exclamation",
    bg: "var(--feedback-error-light)",
    fg: "var(--feedback-error-text)",
    iconColor: "var(--feedback-error)"
  },
  warning: {
    icon: "hexagon-exclamation",
    bg: "var(--feedback-warning-light)",
    fg: "var(--feedback-warning-text)",
    iconColor: "var(--feedback-warning)"
  },
  waiting: {
    icon: "triangle-exclamation",
    bg: "var(--feedback-waiting-light)",
    fg: "var(--feedback-waiting-text)",
    iconColor: "var(--feedback-waiting)"
  },
  info: {
    icon: "circle-info",
    bg: "var(--feedback-info-light)",
    fg: "var(--feedback-info-text)",
    iconColor: "var(--feedback-info)"
  }
};

/**
 * Alert — inline feedback banner: tinted bg + saturated icon + dark text,
 * rounded-2xl. Five product states. Mirrors the product Alert.
 */
function Alert({
  variant = "info",
  size = "md",
  title,
  description,
  base = "",
  className = "",
  style = {},
  ...rest
}) {
  const v = variants[variant] || variants.info;
  const pad = size === "sm" ? "12px" : "16px";
  const iconSize = size === "sm" ? 16 : 20;
  const titleSize = size === "sm" ? "var(--label-2)" : "var(--label-1)";
  const descSize = size === "sm" ? "var(--paragraph-span2)" : "var(--paragraph-span1)";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "status",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      borderRadius: "var(--radius-2xl)",
      backgroundColor: v.bg,
      padding: pad,
      color: v.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: v.icon,
    base: base,
    size: iconSize,
    color: v.iconColor,
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      wordBreak: "break-word"
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-paragraph)",
      fontWeight: "var(--weight-semibold)",
      fontSize: titleSize,
      lineHeight: "var(--leading-tight)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: title ? "2px 0 0" : 0,
      fontFamily: "var(--font-paragraph)",
      fontWeight: "var(--weight-regular)",
      fontSize: descSize,
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Alert.jsx", error: String((e && e.message) || e) }); }

// components/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — mint fill + white check when active, with an optional label. */
function Checkbox({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  size = "lg",
  base = "",
  className = "",
  style = {},
  ...rest
}) {
  const dim = size === "md" ? 12 : 20;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: dim,
      height: dim,
      borderRadius: size === "md" ? "3px" : "var(--radius-sm)",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: checked ? "var(--brand-secondary)" : "var(--ui-primary)",
      boxShadow: checked ? "none" : "inset 0 0 0 2px var(--brand-secondary-light)",
      transition: "background-color .15s linear"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    className: className,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit",
      ...style
    }
  }, rest)), checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    base: base,
    size: dim - 6,
    color: "var(--greyscale-base)"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: size === "md" ? "var(--paragraph-span4)" : "var(--paragraph-span2)",
      color: "var(--greyscale-dark)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Drawer — panel that slides in from a screen edge over a scrim, for secondary
 * content or actions without leaving the page. Header (title + close),
 * scrollable body, optional bottom-right primary action.
 */
function Drawer({
  isVisible = false,
  onClose,
  title = "",
  anchor = "right",
  width = 420,
  hasCloseButton = true,
  actionLabel,
  actionIcon,
  onAction,
  base = "",
  children,
  style = {},
  ...rest
}) {
  if (!isVisible) return null;
  const side = anchor === "left" ? {
    left: 0
  } : {
    right: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onClose && onClose(),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 999,
      backgroundColor: "rgba(37,48,45,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      ...side,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: width,
      backgroundColor: "var(--greyscale-base)",
      boxShadow: "var(--shadow-modal)",
      textAlign: "left",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px",
      color: "var(--greyscale-dark)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--h3)"
    }
  }, title), hasCloseButton && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Chiudi",
    onClick: () => onClose && onClose(),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "xmark",
    base: base,
    size: 24,
    color: "var(--feedback-error)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "0 24px 24px"
    }
  }, children), actionLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "24px",
      borderTop: "1px solid var(--greyscale-extralight)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "button",
    variant: "primary",
    size: "md",
    icon: actionIcon,
    onClick: onAction
  }, actionLabel))));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/Dropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dropdown — select a value from a list. Field with label, help/error text and
 * a popover list. Shares the Input inner-shadow ring (mint on focus, red when invalid).
 */
function Dropdown({
  id,
  label,
  options = [],
  value,
  onChange,
  placeholder = "Seleziona…",
  helpText,
  isInvalid = false,
  errorMessage,
  disabled = false,
  base = "",
  width,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const selected = norm.find(o => o.value === value);
  let ring = "var(--shadow-input-border)";
  if (disabled) ring = "var(--shadow-input-disabled)";else if (isInvalid) ring = "inset 0 0 0 2px var(--feedback-error)";else if (focus || open) ring = "var(--shadow-input-focus)";
  const help = isInvalid && errorMessage ? errorMessage : helpText;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: width || "auto"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span3)",
      color: "var(--greyscale-dark)",
      marginBottom: "8px"
    }
  }, label), /*#__PURE__*/React.createElement("button", _extends({
    id: id,
    type: "button",
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-invalid": isInvalid || undefined,
    onClick: () => !disabled && setOpen(o => !o),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "var(--radius-lg)",
      padding: "16px",
      border: "none",
      outline: "none",
      cursor: disabled ? "default" : "pointer",
      boxShadow: ring,
      backgroundColor: disabled ? "var(--brand-secondary-light)" : "var(--ui-primary)",
      color: selected ? "var(--greyscale-dark)" : "var(--greyscale-mid)",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      lineHeight: "var(--leading-tight)",
      textAlign: "left",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    base: base,
    size: 14,
    color: "var(--greyscale-mid)"
  })), help && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "8px",
      color: isInvalid ? "var(--feedback-error)" : "var(--greyscale-mid)",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span3)"
    }
  }, help), open && !disabled && /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    style: {
      listStyle: "none",
      margin: "8px 0 0",
      padding: "6px",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: "var(--ui-primary)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      maxHeight: "260px",
      overflow: "auto"
    }
  }, norm.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("li", {
      key: o.value,
      role: "option",
      "aria-selected": active,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        padding: "9px 12px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-paragraph)",
        fontSize: "var(--paragraph-span2)",
        color: "var(--greyscale-dark)",
        backgroundColor: active ? "var(--brand-primary-light)" : "transparent"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.backgroundColor = "var(--ui-secondary)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.backgroundColor = "transparent";
      }
    }, o.label);
  })));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24
};

/**
 * IconButton — square/rounded button holding a single icon.
 * kinds: primary (purple fill), secondary (outline), ghost (text only).
 */
function IconButton({
  name,
  base = "",
  kind = "secondary",
  size = "md",
  disabled = false,
  ariaLabel,
  className = "",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = sizes[size];
  const kinds = {
    primary: {
      backgroundColor: hover ? "var(--accent-dark)" : "var(--accent-mid)",
      color: "var(--greyscale-base)",
      border: "none"
    },
    secondary: {
      backgroundColor: hover ? "var(--greyscale-extralight)" : "var(--ui-primary)",
      color: "var(--greyscale-dark)",
      border: "1px solid var(--greyscale-extralight)"
    },
    ghost: {
      backgroundColor: hover ? "var(--greyscale-extralight)" : "transparent",
      color: "var(--greyscale-mid)",
      border: "none"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel || name,
    disabled: disabled,
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      pointerEvents: disabled ? "none" : "auto",
      transition: "background-color .15s linear",
      ...kinds[kind],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    base: base,
    size: iconSizes[size]
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with the product's signature 2px inner-shadow ring (no
 * border) that turns mint on focus, red on error. Supports label, error,
 * password reveal and a trailing icon.
 */
function Input({
  id,
  label,
  type = "text",
  isInvalid = false,
  errorMessage,
  disabled = false,
  icon,
  base = "",
  showPasswordButton = true,
  className = "",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [reveal, setReveal] = React.useState(false);
  const isPassword = type === "password";
  let ring = "var(--shadow-input-border)";
  if (disabled) ring = "var(--shadow-input-disabled)";else if (isInvalid) ring = "inset 0 0 0 2px var(--feedback-error)";else if (focus) ring = "var(--shadow-input-focus)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span3)",
      color: "var(--greyscale-dark)",
      marginBottom: "8px"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: isPassword && !reveal ? "password" : isPassword ? "text" : type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className: className,
    style: {
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "var(--radius-lg)",
      padding: "16px",
      paddingRight: isPassword || icon ? "44px" : "16px",
      border: "none",
      outline: "none",
      boxShadow: ring,
      backgroundColor: disabled ? "var(--brand-secondary-light)" : "var(--ui-primary)",
      color: "var(--greyscale-dark)",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      lineHeight: "var(--leading-tight)",
      ...style
    }
  }, rest)), isPassword && showPasswordButton && !disabled && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": reveal ? "Nascondi password" : "Mostra password",
    onClick: () => setReveal(r => !r),
    style: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--greyscale-mid)",
      opacity: 0.6,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: reveal ? "eye-slash" : "eye",
    base: base,
    size: 18
  })), icon && !isPassword && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--greyscale-mid)",
      display: "flex"
    }
  }, icon)), isInvalid && errorMessage && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "8px",
      color: "var(--feedback-error)",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span3)"
    }
  }, errorMessage));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input.jsx", error: String((e && e.message) || e) }); }

// components/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Link — inline text link. Accent purple, semibold, underlined; darkens on
 * hover. Optional trailing external-link icon. Mirrors the product links.
 */
function Link({
  href = "#",
  children,
  external = false,
  disabled = false,
  base = "",
  className = "",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: disabled ? undefined : href,
    "aria-disabled": disabled || undefined,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      color: disabled ? "var(--greyscale-mid)" : hover ? "var(--accent-dark)" : "var(--accent-mid)",
      fontFamily: "var(--font-paragraph)",
      fontWeight: "var(--weight-semibold)",
      textDecoration: "underline",
      textUnderlineOffset: "2px",
      cursor: disabled ? "default" : "pointer",
      pointerEvents: disabled ? "none" : "auto",
      ...style
    }
  }, rest), children, external && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "link",
    base: base,
    size: 14
  }));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Link.jsx", error: String((e && e.message) || e) }); }

// components/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal — centered dialog: header (title + red xmark close), hairline-divided
 * body, footer Annulla/Conferma CTAs. Scrim greyscale-dark/40. Mirrors the product Modal.
 */
function Modal({
  isVisible = false,
  onClose,
  title = "",
  hasCloseButton = true,
  showCta = true,
  onConfirm,
  onCancel,
  confirmLabel = "Conferma",
  cancelLabel = "Annulla",
  disableCta = false,
  base = "",
  children,
  width = 600,
  style = {},
  ...rest
}) {
  if (!isVisible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onClose && onClose(),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      backgroundColor: "rgba(37,48,45,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: width,
      maxHeight: "90vh",
      overflow: "hidden",
      borderRadius: "var(--radius-lg)",
      backgroundColor: "var(--greyscale-base)",
      boxShadow: "var(--shadow-modal)",
      textAlign: "left",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px",
      color: "var(--greyscale-dark)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--h3)"
    }
  }, title), hasCloseButton && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Chiudi",
    onClick: () => onClose && onClose(),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "xmark",
    base: base,
    size: 24,
    color: "var(--feedback-error)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "24px",
      borderTop: "1px solid var(--greyscale-extralight)",
      borderBottom: showCta ? "1px solid var(--greyscale-extralight)" : "none"
    }
  }, children), showCta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "16px",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "button",
    variant: "secondary",
    size: "md",
    disabled: disableCta,
    onClick: onCancel
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "button",
    variant: "primary",
    size: "md",
    disabled: disableCta,
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Modal.jsx", error: String((e && e.message) || e) }); }

// components/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ProgressBar — track + mint (success) fill. Used for course/master completion. */
function ProgressBar({
  value = 0,
  height = 24,
  color = "var(--feedback-success)",
  showLabel = false,
  className = "",
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      height,
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      backgroundColor: "var(--greyscale-extralight)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      width: `${pct}%`,
      borderRadius: "var(--radius-md)",
      backgroundColor: color,
      transition: "width .3s ease-in-out"
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-paragraph)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--label-2)",
      color: "var(--greyscale-dark)",
      minWidth: 40,
      textAlign: "right"
    }
  }, pct, "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — mint ring + mint dot when active. Options sharing a `name` form a group. */
function Radio({
  id,
  name,
  label,
  checked,
  onChange,
  disabled = false,
  size = "lg",
  className = "",
  style = {},
  ...rest
}) {
  const dim = size === "lg" ? 20 : 14;
  const dot = size === "lg" ? 10 : 7;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-full)",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: checked ? "inset 0 0 0 2px var(--brand-mid, var(--brand-secondary))" : "inset 0 0 0 2px var(--brand-secondary-light)"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    name: name,
    type: "radio",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    className: className,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit",
      ...style
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: dot,
      height: dot,
      borderRadius: "var(--radius-full)",
      backgroundColor: "var(--brand-secondary)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: size === "lg" ? "var(--paragraph-span3)" : "var(--paragraph-span4)",
      color: "var(--greyscale-dark)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Radio.jsx", error: String((e && e.message) || e) }); }

// components/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sidebar — the platform app-shell navigation (menu spalla): brand logo, user
 * block (avatar + points + streak) and a vertical nav with an active purple bar.
 * Mirrors libs/sidebar.
 */
function Sidebar({
  items = [],
  user,
  active,
  onNavigate,
  base = "",
  width = 256,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width,
      flexShrink: 0,
      boxSizing: "border-box",
      borderRight: "2px solid var(--greyscale-extralight)",
      background: "var(--greyscale-base)",
      display: "flex",
      flexDirection: "column",
      paddingBottom: 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "assets/logo/logo-full.svg",
    alt: "start2impact",
    height: "32"
  })), user && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      textAlign: "center",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: user.pic,
    name: user.name,
    size: 80,
    ring: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-paragraph)",
      fontWeight: 600,
      fontSize: "var(--label-2)",
      color: "var(--greyscale-dark)"
    }
  }, user.name), user.points != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--greyscale-dark)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "medal",
    base: base,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--paragraph-span2)"
    }
  }, user.points, " pt")), user.streak != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      color: "var(--greyscale-mid)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "fire",
    base: base,
    size: 20,
    color: "var(--feedback-waiting)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--paragraph-span2)"
    }
  }, user.streak, " giorni consecutivi!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, items.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item.id);
      },
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "10px 24px",
        marginBottom: 20,
        textDecoration: "none",
        color: isActive ? "var(--greyscale-dark)" : "var(--greyscale-mid)",
        fontWeight: isActive ? 600 : 400
      }
    }, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 6,
        borderRadius: "0 8px 8px 0",
        background: "var(--accent-mid)"
      }
    }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      base: base,
      size: 20,
      color: isActive ? "var(--accent-dark)" : "var(--greyscale-mid)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-paragraph)",
        fontSize: isActive ? "var(--label-1)" : "var(--paragraph-span1)"
      }
    }, item.name), item.isNew && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "brand"
    }, "New")));
  })));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Spinner — mint rotating ring loader for inline loading states. */
function Spinner({
  size = 20,
  color = "var(--brand-primary)",
  thickness = 2.5,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    role: "status",
    "aria-label": "Caricamento",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      border: `${thickness}px solid var(--greyscale-extralight)`,
      borderTopColor: color,
      animation: "s2i-spin .7s linear infinite",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, "@keyframes s2i-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline tab bar. Active tab is greyscale-dark with a mint underline;
 * inactive is muted. Controlled via value/onChange.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  className = "",
  style = {},
  ...rest
}) {
  const active = value ?? (tabs[0] && tabs[0].id);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "tablist",
    style: {
      display: "flex",
      gap: "32px",
      borderBottom: "1px solid var(--greyscale-extralight)",
      ...style
    }
  }, rest), tabs.map(t => {
    const isActive = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(t.id),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 12px",
        fontFamily: "var(--font-paragraph)",
        fontWeight: isActive ? "var(--weight-semibold)" : "var(--weight-regular)",
        fontSize: "var(--label-1)",
        color: isActive ? "var(--greyscale-dark)" : "var(--greyscale-mid)",
        transition: "color .15s linear"
      }
    }, t.label, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        borderRadius: "var(--radius-full)",
        backgroundColor: "var(--brand-primary)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeStyles = {
  sm: {
    fontSize: "var(--label-4)",
    padding: "2px 6px"
  },
  md: {
    fontSize: "var(--label-3)",
    padding: "4px 8px"
  },
  lg: {
    fontSize: "var(--label-2)",
    padding: "6px 10px"
  }
};

/**
 * Tag — outlined category/topic pill. Border + text share one color on a
 * transparent fill. Mirrors the product Tag (used for course categories).
 */
function Tag({
  color = "var(--greyscale-dark)",
  label,
  children,
  size = "md",
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      color,
      border: `1px solid ${color}`,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-paragraph)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: "var(--leading-tight)",
      whiteSpace: "nowrap",
      ...sizeStyles[size],
      ...style
    }
  }, rest), label || children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tag.jsx", error: String((e && e.message) || e) }); }

// components/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multiline field sharing the Input inner-shadow ring (mint on focus, red on error). */
function Textarea({
  id,
  label,
  isInvalid = false,
  errorMessage,
  disabled = false,
  rows = 4,
  className = "",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  let ring = "var(--shadow-input-border)";
  if (disabled) ring = "var(--shadow-input-disabled)";else if (isInvalid) ring = "inset 0 0 0 2px var(--feedback-error)";else if (focus) ring = "var(--shadow-input-focus)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span3)",
      color: "var(--greyscale-dark)",
      marginBottom: "8px"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className: className,
    style: {
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "var(--radius-lg)",
      padding: "16px",
      border: "none",
      outline: "none",
      boxShadow: ring,
      resize: "vertical",
      backgroundColor: disabled ? "var(--brand-secondary-light)" : "var(--ui-primary)",
      color: "var(--greyscale-dark)",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      lineHeight: 1.5,
      ...style
    }
  }, rest)), isInvalid && errorMessage && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "8px",
      color: "var(--feedback-error)",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span3)"
    }
  }, errorMessage));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle — pill on/off switch; mint track when on, white knob slides right. */
function Toggle({
  checked = false,
  onChange,
  size = "lg",
  disabled = false,
  className = "",
  style = {},
  ...rest
}) {
  const dims = size === "lg" ? {
    w: 36,
    h: 18,
    c: 14,
    tx: 16
  } : {
    w: 24,
    h: 12,
    c: 8,
    tx: 12
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    className: className,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: dims.w,
      height: dims.h,
      padding: "2px",
      border: "none",
      borderRadius: "var(--radius-full)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      backgroundColor: checked ? "var(--brand-secondary)" : "var(--brand-secondary-light)",
      transition: "background-color .2s ease-in-out",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.c,
      height: dims.c,
      borderRadius: "var(--radius-full)",
      backgroundColor: "var(--greyscale-base)",
      boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
      transform: checked ? `translateX(${dims.tx}px)` : "translateX(0)",
      transition: "transform .2s ease-in-out"
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Toggle.jsx", error: String((e && e.message) || e) }); }

// landing.jsx
try { (() => {
// Marketing landing — start2impact. Header, hero, stats band, "I nostri Master" grid,
// "Perché funziona" + testimonial carousel, consultation form, WhatsApp band, footer.
// Interactive: nav/buttons, carousel paging, consultation form (validates + success state).
const M_BASE = "../../";
const {
  Button: MButton,
  Icon: MIcon,
  Card: MCard,
  Footer: MFooter
} = window.DesignSystem_3f5762;
const {
  useState
} = React;
const PURPLE = "var(--brand-primary, #5938BC)";
const SEAFOAM = "var(--theme-verde-core, #85E1C8)";
const MIDNIGHT = "var(--midnight, #060233)";
const INK = "#100A3D";
const MASTERS = [{
  title: "Growth Marketing e Agenti AI",
  img: "master-startup.png",
  bg: "#FCEEE3",
  tag: "MASTER UNIVERSITARIO",
  uni: true,
  desc: "Strategie di acquisizione, retention e funnel ottimizzati con l'AI."
}, {
  title: "AI e Agenti AI per il business",
  img: "master-ai.png",
  bg: "#ECEAFB",
  tag: "MASTER UNIVERSITARIO",
  uni: true,
  desc: "Modelli AI, prompt engineering e automazioni con LLM e agenti."
}, {
  title: "Digital Marketing e Agenti AI",
  img: "master-marketing-megaphone.png",
  bg: "#FCEAE0",
  tag: "MASTER UNIVERSITARIO",
  uni: true,
  desc: "Campagne Adv, contenuti social ed email e automazioni con l'AI."
}, {
  title: "Digital Marketing e Agenti AI",
  img: "master-marketing-like.png",
  bg: "#FCEEE3",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Campagne Adv, contenuti social ed email e automazioni con l'AI."
}, {
  title: "UX/UI Design e Agente AI",
  img: "master-design.png",
  bg: "#FCE7F0",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Progettazione di interfacce, design system e prototipazione avanzata."
}, {
  title: "Fullstack Development e Agente AI",
  img: "master-sviluppo.png",
  bg: "#E4F1FB",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Frontend, backend, database e deploy con tecnologie moderne."
}, {
  title: "Data Science, Analytics e Agenti AI",
  img: "master-data-science.png",
  bg: "#E6F6EF",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Analisi dei dati, machine learning e visualizzazione con Python."
}];
const TESTIMONIALS = [{
  name: "Erica Giagnorio",
  company: "CHEF IN CAMICIA",
  label: "Da zero a Brand Manager",
  grad: "linear-gradient(160deg,#1C7A56,#0C3D2B)"
}, {
  name: "Emanuele Immesi",
  company: "MIODOTTORE",
  label: "Da zero a Data Analyst",
  grad: "linear-gradient(160deg,#176A6A,#0C3236)"
}, {
  name: "Filippo Andrello",
  company: "CAFFEINA",
  label: "Da zero a Content Creator",
  grad: "linear-gradient(160deg,#2A7A4E,#0C3D24)"
}, {
  name: "Sara Bianchi",
  company: "WELL CO.",
  label: "Da zero a UX Designer",
  grad: "linear-gradient(160deg,#1C6E7A,#0C3236)"
}, {
  name: "Marco De Luca",
  company: "FINTECH+",
  label: "Da zero a Fullstack Dev",
  grad: "linear-gradient(160deg,#26795A,#0C3D2B)"
}];
const FEATURES = [{
  icon: "graduation-cap",
  title: "Percorsi formativi completi",
  desc: "Online on demand con Q&A live: studi quando vuoi e fai domande in diretta ai professionisti."
}, {
  icon: "pen-to-square",
  title: "Progetti su casi reali",
  desc: "Metti in pratica da subito con progetti individuali corretti dai top professionisti del settore."
}, {
  icon: "medal",
  title: "Rimborso se non trovi lavoro*",
  desc: "Garanzia Money Back: investi sul tuo futuro con la massima tranquillità."
}];
function PlayBtn({
  size = 56
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 512",
    style: {
      width: size * 0.3,
      height: size * 0.3,
      fill: INK,
      marginLeft: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
  })));
}
function Header() {
  const link = {
    color: "#2C2A45",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 15,
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #ECEAF2",
      borderWidth: "0px",
      borderBottomStyle: "solid",
      borderBottomColor: "rgb(236, 234, 242)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M_BASE + "assets/logo/logo-full.svg",
    alt: "start2impact",
    height: "30"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Master"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Metodo"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Orientamento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "secondary",
    size: "md"
  }, "Login"), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    size: "md"
  }, "Scopri i Master")))));
}
function HeroCheck({
  bold,
  rest
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      fontSize: 16,
      color: "#2C2A45",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: SEAFOAM,
      display: "grid",
      placeItems: "center",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 448 512",
    style: {
      width: 12,
      height: 12,
      fill: INK
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
  }))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, bold), " ", rest));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "64px 32px 72px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: 8,
      border: "1.5px solid " + SEAFOAM,
      color: "#1C7A56",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.04em"
    }
  }, "SOCIET\xC0 BENEFIT DAL 2017"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "22px 0 0",
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.04,
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      color: INK
    }
  }, "Scopri i Master sui lavori pi\xF9 richiesti"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      fontSize: 17,
      color: "#56536E",
      lineHeight: 1.55,
      maxWidth: 460
    }
  }, "Percorsi pratici e on demand con Agenti AI in ogni Master, progetti su casi reali e una garanzia che ti accompagna fino al lavoro."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "26px 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(HeroCheck, {
    bold: "Percorsi completi.",
    rest: "Online on demand + Q&A live"
  }), /*#__PURE__*/React.createElement(HeroCheck, {
    bold: "Progetti su casi reali.",
    rest: "Corretti da top professionisti del settore"
  }), /*#__PURE__*/React.createElement(HeroCheck, {
    bold: "Rimborso se non trovi lavoro*.",
    rest: "Garanzia Money Back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    size: "lg"
  }, "Scopri i Master"), /*#__PURE__*/React.createElement(MButton, {
    variant: "secondary",
    size: "lg"
  }, "Consulenza gratuita"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "stretch",
      minHeight: 420,
      borderRadius: 20,
      background: "linear-gradient(160deg,#EAF8F2,#D6F0E6)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M_BASE + "assets/masters/master-students.png",
    alt: "Studenti start2impact",
    style: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: "92%",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 28,
      background: INK,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      padding: "10px 18px 7px",
      borderRadius: 10,
      transform: "rotate(-2deg)"
    }
  }, "3.500+ assunti"))));
}
function Stats() {
  const items = [{
    big: "3.500+",
    small: "studenti hanno già\ntrovato lavoro"
  }, {
    big: "TOP 5",
    small: "aziende education in\nEuropa — Financial Times"
  }, {
    big: "4,8/5",
    small: "recensioni verificate\nsu Trustpilot"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#E9F8F1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "34px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 40,
      color: INK,
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, s.big), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#3A6B57",
      lineHeight: 1.3,
      whiteSpace: "pre-line"
    }
  }, s.small)))));
}
function MasterCard({
  m
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(20,16,50,0.08)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: m.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M_BASE + "assets/masters/" + m.img,
    alt: "",
    style: {
      height: "82%",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 22px",
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.05em",
      color: PURPLE,
      background: "#F1EEFB",
      alignSelf: "flex-start",
      padding: "5px 9px",
      borderRadius: 5
    }
  }, m.tag), m.uni && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 12,
      fontSize: 12,
      fontWeight: 600,
      color: "#8C89A3"
    }
  }, /*#__PURE__*/React.createElement("span", null, "1.500 ORE"), /*#__PURE__*/React.createElement("span", null, "60 CFU")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: m.uni ? "12px 0 0" : "14px 0 0",
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 19,
      color: INK,
      lineHeight: 1.15
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "#56536E",
      lineHeight: 1.45
    }
  }, m.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    size: "md",
    style: {
      width: "100%"
    }
  }, "Scopri"))));
}
function Masters() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "76px 32px 64px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 42,
      textTransform: "uppercase",
      color: INK,
      letterSpacing: "-0.01em"
    }
  }, "I nostri Master"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 17,
      color: "#56536E"
    }
  }, "Master universitari e professionalizzanti, ognuno con un Agente AI integrato nel percorso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 22,
      marginTop: 36
    }
  }, MASTERS.slice(0, 4).map((m, i) => /*#__PURE__*/React.createElement(MasterCard, {
    key: i,
    m: m
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 22,
      marginTop: 22
    }
  }, MASTERS.slice(4).map((m, i) => /*#__PURE__*/React.createElement(MasterCard, {
    key: i,
    m: m
  }))));
}
function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = TESTIMONIALS.length - 2; // showing 3 at a time
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
      transform: "translateX(calc(" + -page + " * (33.333% + 7.33px)))"
    }
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 calc(33.333% - 14.67px)",
      aspectRatio: "1 / 1.18",
      borderRadius: 18,
      background: t.grad,
      position: "relative",
      overflow: "hidden",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 18,
      left: 18,
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      background: "rgba(0,0,0,0.35)",
      padding: "6px 11px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "circle-user",
    base: M_BASE,
    size: 13,
    color: "#fff"
  }), t.company), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PlayBtn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      bottom: 18,
      right: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 19,
      lineHeight: 1.05
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginTop: 10,
      background: INK,
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      padding: "8px 12px",
      borderRadius: 9
    }
  }, t.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      justifyContent: "center",
      marginTop: 26
    }
  }, Array.from({
    length: pages
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setPage(i),
    "aria-label": "Pagina " + (i + 1),
    style: {
      width: i === page ? 26 : 9,
      height: 9,
      borderRadius: 20,
      border: "none",
      padding: 0,
      cursor: "pointer",
      background: i === page ? PURPLE : "#CFCadd",
      transition: "all 0.3s"
    }
  }))));
}
function Why() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#F4F4F7"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "76px 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 42,
      textTransform: "uppercase",
      color: INK,
      letterSpacing: "-0.01em"
    }
  }, "Perch\xE9 funziona"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 17,
      color: "#56536E"
    }
  }, "3.500+ studenti hanno gi\xE0 trovato lavoro con il nostro metodo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 28,
      marginTop: 40
    }
  }, FEATURES.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      background: "#fff",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 6px 18px rgba(20,16,50,0.07)"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: f.icon,
    base: M_BASE,
    size: 22,
    color: PURPLE
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 19,
      color: INK
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 15,
      color: "#56536E",
      lineHeight: 1.5
    }
  }, f.desc)))), /*#__PURE__*/React.createElement(Testimonials, null)));
}
function ConsultForm() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [done, setDone] = useState(false);
  const valid = /\S+@\S+\.\S+/.test(email) && agree;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 40,
      textTransform: "uppercase",
      color: INK,
      lineHeight: 1.05,
      letterSpacing: "-0.01em"
    }
  }, "Non sai quale Master scegliere?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 0",
      fontSize: 17,
      color: "#56536E",
      lineHeight: 1.55,
      maxWidth: 440
    }
  }, "Prova la nostra consulenza di carriera immediata e gratuita: scopri i lavori pi\xF9 adatti a te, gli stipendi e il Master migliore per il tuo percorso.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F8F8FB",
      borderRadius: 18,
      padding: 30,
      boxShadow: "0 14px 40px rgba(20,16,50,0.08)"
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "50%",
      background: SEAFOAM,
      display: "grid",
      placeItems: "center",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 448 512",
    style: {
      width: 24,
      height: 24,
      fill: INK
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 22,
      color: INK
    }
  }, "Richiesta inviata!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 15,
      color: "#56536E"
    }
  }, "Ti contatteremo a ", /*#__PURE__*/React.createElement("strong", null, email), " entro 24 ore.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 18,
      color: INK
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "paper-plane-top",
    base: M_BASE,
    size: 18,
    color: PURPLE
  }), " Consulenza di carriera gratuita"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    type: "email",
    placeholder: "Inserisci la tua e-mail\u2026",
    style: {
      width: "100%",
      marginTop: 18,
      padding: "13px 16px",
      borderRadius: 10,
      border: "1.5px solid #DDD9E8",
      fontSize: 15,
      fontFamily: "var(--font-paragraph)",
      outline: "none",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 9,
      marginTop: 14,
      fontSize: 13,
      color: "#56536E",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    style: {
      marginTop: 2,
      accentColor: PURPLE,
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("span", null, "Accetto i Termini e Condizioni e la Privacy Policy")), /*#__PURE__*/React.createElement("button", {
    onClick: () => valid && setDone(true),
    disabled: !valid,
    style: {
      width: "100%",
      marginTop: 18,
      padding: "14px",
      borderRadius: 10,
      border: "none",
      background: valid ? PURPLE : "#C9C3DE",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      cursor: valid ? "pointer" : "not-allowed",
      transition: "background 0.2s"
    }
  }, "Ricevi la consulenza")))));
}
function WhatsappBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "20px 32px 84px",
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 220,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      background: "linear-gradient(150deg,#16A06A,#0C7A4E)",
      borderRadius: "42% 58% 56% 44% / 48% 42% 58% 52%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 40,
      left: 36,
      width: 66,
      height: 66,
      borderRadius: "50%",
      background: "#fff",
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "circle-user",
    base: M_BASE,
    size: 46,
    color: "#0C7A4E"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 34,
      right: 34,
      width: 66,
      height: 66,
      borderRadius: "50%",
      background: "#fff",
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "circle-user",
    base: M_BASE,
    size: 46,
    color: "#16A06A"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 40,
      textTransform: "uppercase",
      color: INK,
      lineHeight: 1.05,
      letterSpacing: "-0.01em"
    }
  }, "Parla con il nostro team"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 17,
      color: "#56536E",
      lineHeight: 1.55,
      maxWidth: 460
    }
  }, "Hai dubbi sul percorso giusto? Scrivici su WhatsApp e ti rispondiamo in tempo reale."), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 26,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 26px",
      borderRadius: 10,
      border: "none",
      background: "#16A06A",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "whatsapp",
    base: M_BASE,
    size: 18,
    color: "#fff"
  }), " Scrivi su WhatsApp"))));
}
function SiteFooter() {
  const columns = [{
    title: "About",
    links: [{
      label: "Chi siamo",
      active: true
    }, "Lavora con noi", "Per le aziende"]
  }, {
    title: "Formazione",
    links: ["Master", "Supporto Ricerca Lavoro", "Garanzia Money Back"]
  }, {
    title: "Risorse gratuite",
    links: ["Orientamento", "Blog", "Storie di successo"]
  }, {
    title: "Supporto",
    links: ["WhatsApp", "FAQ", "Recensioni", "Login"]
  }, {
    title: "Social",
    links: ["YouTube", "Instagram", "LinkedIn"]
  }];
  return /*#__PURE__*/React.createElement(MFooter, {
    base: M_BASE,
    columns: columns,
    legal: "\xA9 2017\u20132026 start2impact | Societ\xE0 Benefit | P.IVA 10104960964",
    legalLinks: ["Termini", "Privacy", "Cookie"]
  });
}
function Landing() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Masters, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(ConsultForm, null), /*#__PURE__*/React.createElement(WhatsappBand, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Landing, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing.jsx", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// slides/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *   prompt       Seed idea for "Genera con AI" (text→image). Falls back to
 *                `placeholder` when omitted.
 *   ai           'off' hides the AI generation affordances.    (default on)
 *   ai-cutout    Presence pre-checks "isolate on white background" in the
 *                AI dialog (for cutout-style subjects).
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── AI image generation ─────────────────────────────────────────────────
  // Two combined steps: (1) Claude turns the author's idea into a concrete
  // English visual subject (text→text via window.claude.complete); (2) a
  // keyless text-to-image service (Pollinations) renders it from a plain URL.
  // The chosen image is fetched as a Blob — never <img src=remoteURL> — so the
  // canvas re-encode in toDataUrl() is NOT CORS-tainted and the bytes can be
  // stored in the sidecar and exported. window.claude.complete only exists in
  // the host runtime; without it we fall back to the raw idea as the prompt.
  const AI_STYLES = {
    photo: {
      label: 'Foto',
      suffix: 'professional photograph, natural light, sharp focus, high detail'
    },
    illustration: {
      label: 'Illustrazione',
      suffix: 'modern flat vector illustration, clean bold shapes, minimal'
    },
    render: {
      label: '3D',
      suffix: '3D render, soft studio lighting, smooth clay materials, shallow depth of field'
    }
  };
  async function aiSubjectFromIdea(idea) {
    if (!(window.claude && typeof window.claude.complete === 'function')) return idea;
    try {
      const out = await window.claude.complete('Trasforma questa idea in UNA breve descrizione visiva in inglese ' + '(massimo 16 parole) di un soggetto concreto e fotografabile. ' + 'Niente testo, niente loghi, niente collage. ' + 'Idea: "' + idea + '". Rispondi SOLO con la descrizione, senza virgolette.');
      const s = (out || '').trim().replace(/^["'\s]+|["'\s]+$/g, '');
      return s || idea;
    } catch (e) {
      console.warn('<image-slot> AI prompt step failed, using raw idea:', e);
      return idea;
    }
  }
  function buildImagePrompt(subject, styleKey, cutout) {
    const st = AI_STYLES[styleKey] || AI_STYLES.photo;
    let p = subject + ', ' + st.suffix;
    if (cutout) p += ', single subject isolated on plain solid white background, centered, fully in frame';
    p += ', no text, no words, no captions, no logo, no watermark';
    return p;
  }
  function pollinationsUrl(prompt, seed) {
    return 'https://image.pollinations.ai/prompt/' + encodeURIComponent(prompt) + '?width=1024&height=1024&nologo=true&model=flux&seed=' + seed;
  }
  const AI_MODAL_CSS = `
  .islot-ai{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;
    justify-content:center;padding:24px;background:rgba(6,2,51,.55);backdrop-filter:blur(3px);
    font-family:system-ui,-apple-system,Segoe UI,sans-serif}
  .islot-ai[data-open]{display:flex}
  .islot-ai *{box-sizing:border-box}
  .islot-ai__panel{width:min(540px,100%);max-height:calc(100vh - 48px);overflow:auto;background:#fff;
    border-radius:18px;box-shadow:0 30px 80px rgba(6,2,51,.45);display:flex;flex-direction:column}
  .islot-ai__head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 14px;
    border-bottom:1px solid #ECEAF4}
  .islot-ai__title{font-weight:700;font-size:16px;color:#060233;display:flex;align-items:center;gap:8px}
  .islot-ai__x{appearance:none;border:0;background:#F2F1F8;color:#5b5773;width:30px;height:30px;
    border-radius:8px;cursor:pointer;font-size:13px}
  .islot-ai__x:hover{background:#E6E3F2}
  .islot-ai__body{padding:18px 20px;display:flex;flex-direction:column;gap:14px}
  .islot-ai__lbl{font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#6b6786}
  .islot-ai__ta{width:100%;resize:vertical;border:1.5px solid #DEDBEC;border-radius:10px;padding:11px 13px;
    font:15px/1.4 inherit;color:#1a1830;outline:none}
  .islot-ai__ta:focus{border-color:#6E5DC6}
  .islot-ai__opts{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap}
  .islot-ai__seg{display:inline-flex;background:#F2F1F8;border-radius:9px;padding:3px}
  .islot-ai__seg button{appearance:none;border:0;background:transparent;cursor:pointer;padding:7px 13px;
    border-radius:7px;font:600 13px/1 inherit;color:#5b5773}
  .islot-ai__seg button.on{background:#fff;color:#060233;box-shadow:0 1px 4px rgba(6,2,51,.12)}
  .islot-ai__chk{display:flex;align-items:center;gap:7px;font-size:13px;color:#3a3658;cursor:pointer}
  .islot-ai__chk input{accent-color:#6E5DC6;width:15px;height:15px}
  .islot-ai__preview{position:relative;border-radius:12px;overflow:hidden;background:#F2F1F8;
    aspect-ratio:16/10;display:flex;align-items:center;justify-content:center}
  .islot-ai__hint{color:#9692ab;font-size:13px}
  .islot-ai__preview img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .islot-ai__spin{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#F2F1F8}
  .islot-ai__spin span{width:34px;height:34px;border-radius:50%;border:3px solid #DAD6EC;
    border-top-color:#6E5DC6;animation:islotspin .8s linear infinite}
  @keyframes islotspin{to{transform:rotate(360deg)}}
  .islot-ai__err{color:#b3261e;font-size:13px;background:#FCEBEA;border-radius:8px;padding:8px 11px}
  .islot-ai__foot{display:flex;align-items:center;justify-content:space-between;gap:12px;
    padding:14px 20px 18px;border-top:1px solid #ECEAF4}
  .islot-ai__note{font-size:12px;color:#8a86a0;flex:1;min-width:0}
  .islot-ai__btns{display:flex;gap:8px}
  .islot-ai__btn{appearance:none;border:0;cursor:pointer;border-radius:9px;padding:10px 16px;font:600 13px/1 inherit}
  .islot-ai__btn.ghost{background:#F2F1F8;color:#5b5773}
  .islot-ai__btn.ghost:hover{background:#E6E3F2}
  .islot-ai__btn.alt{background:#fff;color:#6E5DC6;box-shadow:inset 0 0 0 1.5px #C9C1EC}
  .islot-ai__btn.alt:hover{background:#F6F4FD}
  .islot-ai__btn.primary{background:#6E5DC6;color:#fff;box-shadow:0 4px 14px rgba(110,93,198,.4)}
  .islot-ai__btn.primary:hover{background:#5a49b0}
  .islot-ai__btn:disabled{opacity:.5;cursor:default;box-shadow:none}`;
  const AI_MODAL_HTML = '<div class="islot-ai__panel" role="dialog" aria-modal="true" aria-label="Genera immagine con AI">' + '<div class="islot-ai__head">' + '<div class="islot-ai__title"><span class="islot-ai__spark">✨</span> Genera immagine con AI</div>' + '<button class="islot-ai__x" type="button" data-x aria-label="Chiudi">✕</button>' + '</div>' + '<div class="islot-ai__body">' + '<div class="islot-ai__lbl">Descrivi cosa vuoi vedere</div>' + '<textarea class="islot-ai__ta" data-ta rows="2" placeholder="es. studenti che collaborano a un progetto digitale"></textarea>' + '<div class="islot-ai__opts">' + '<div class="islot-ai__seg" data-seg>' + '<button type="button" data-style="photo" class="on">Foto</button>' + '<button type="button" data-style="illustration">Illustrazione</button>' + '<button type="button" data-style="render">3D</button>' + '</div>' + '<label class="islot-ai__chk"><input type="checkbox" data-cutout> Scontorna su bianco</label>' + '</div>' + '<div class="islot-ai__preview">' + '<div class="islot-ai__hint" data-hint>L’anteprima comparirà qui</div>' + '<div class="islot-ai__spin" data-spin hidden><span></span></div>' + '<img data-img alt="">' + '</div>' + '<div class="islot-ai__err" data-err hidden></div>' + '</div>' + '<div class="islot-ai__foot">' + '<div class="islot-ai__note" data-note></div>' + '<div class="islot-ai__btns">' + '<button type="button" class="islot-ai__btn ghost" data-cancel>Annulla</button>' + '<button type="button" class="islot-ai__btn alt" data-regen hidden>Rigenera</button>' + '<button type="button" class="islot-ai__btn primary" data-gen>Genera</button>' + '<button type="button" class="islot-ai__btn primary" data-use hidden>Usa immagine</button>' + '</div>' + '</div>' + '</div>';
  let aiModal = null;
  function getAIModal() {
    if (aiModal) return aiModal;
    const styleEl = document.createElement('style');
    styleEl.textContent = AI_MODAL_CSS;
    document.head.appendChild(styleEl);
    const wrap = document.createElement('div');
    wrap.className = 'islot-ai';
    wrap.innerHTML = AI_MODAL_HTML;
    document.body.appendChild(wrap);
    const q = s => wrap.querySelector(s);
    const taEl = q('[data-ta]'),
      seg = q('[data-seg]'),
      cutoutEl = q('[data-cutout]'),
      prevImg = q('[data-img]'),
      hintEl = q('[data-hint]'),
      spinEl = q('[data-spin]'),
      errEl = q('[data-err]'),
      noteEl = q('[data-note]'),
      btnGen = q('[data-gen]'),
      btnRegen = q('[data-regen]'),
      btnUse = q('[data-use]'),
      btnCancel = q('[data-cancel]'),
      btnX = q('[data-x]');
    let curSlot = null,
      curStyle = 'photo',
      curSubject = null,
      curUrl = null,
      token = 0,
      busy = false;
    const setErr = m => {
      errEl.textContent = m || '';
      errEl.hidden = !m;
    };
    const close = () => {
      token++;
      busy = false;
      curSlot = null;
      wrap.removeAttribute('data-open');
    };
    async function doGenerate(useCached) {
      if (busy) return;
      const idea = taEl.value.trim();
      if (!idea) {
        setErr('Scrivi una breve descrizione.');
        taEl.focus();
        return;
      }
      setErr('');
      busy = true;
      const t = ++token;
      hintEl.hidden = true;
      prevImg.hidden = true;
      spinEl.hidden = false;
      btnGen.disabled = btnRegen.disabled = btnUse.disabled = true;
      let subject = curSubject;
      if (!useCached || !subject) {
        noteEl.textContent = 'Interpreto l’idea…';
        subject = await aiSubjectFromIdea(idea);
        if (t !== token) return;
        curSubject = subject;
      }
      const seed = Math.floor(Math.random() * 1e9);
      const url = pollinationsUrl(buildImagePrompt(subject, curStyle, cutoutEl.checked), seed);
      noteEl.textContent = 'Genero l’immagine…';
      const probe = new Image();
      probe.onload = () => {
        if (t !== token) return;
        curUrl = url;
        prevImg.src = url;
        prevImg.hidden = false;
        spinEl.hidden = true;
        btnGen.hidden = true;
        btnRegen.hidden = false;
        btnUse.hidden = false;
        btnGen.disabled = btnRegen.disabled = btnUse.disabled = false;
        busy = false;
        noteEl.textContent = 'Pronta — rigenera per un’altra variante.';
      };
      probe.onerror = () => {
        if (t !== token) return;
        spinEl.hidden = true;
        hintEl.hidden = false;
        btnGen.disabled = btnRegen.disabled = btnUse.disabled = false;
        busy = false;
        setErr('Generazione non riuscita. Riprova.');
        noteEl.textContent = '';
      };
      probe.src = url;
    }
    async function doUse() {
      if (!curUrl || !curSlot || busy) return;
      busy = true;
      btnUse.disabled = btnRegen.disabled = true;
      noteEl.textContent = 'Importo l’immagine…';
      const slot = curSlot;
      try {
        const blob = await (await fetch(curUrl)).blob();
        const w = slot.clientWidth || slot.offsetWidth || 800;
        const dataUrl = await toDataUrl(blob, w);
        slot._applyImageDataUrl(dataUrl);
        busy = false;
        close();
      } catch (e) {
        busy = false;
        btnUse.disabled = btnRegen.disabled = false;
        setErr('Import non riuscito. Riprova o cambia descrizione.');
        console.warn('<image-slot> AI use failed:', e);
      }
    }
    seg.addEventListener('click', e => {
      const b = e.target.closest('button[data-style]');
      if (!b) return;
      curStyle = b.getAttribute('data-style');
      seg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    });
    btnGen.addEventListener('click', () => doGenerate(false));
    btnRegen.addEventListener('click', () => doGenerate(true));
    btnUse.addEventListener('click', doUse);
    btnCancel.addEventListener('click', close);
    btnX.addEventListener('click', close);
    wrap.addEventListener('click', e => {
      if (e.target === wrap) close();
    });
    wrap.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });
    aiModal = {
      open(slot, idea) {
        curSlot = slot;
        curSubject = null;
        curUrl = null;
        busy = false;
        curStyle = 'photo';
        taEl.value = idea || '';
        seg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.getAttribute('data-style') === 'photo'));
        cutoutEl.checked = slot.hasAttribute('ai-cutout');
        setErr('');
        prevImg.hidden = true;
        prevImg.removeAttribute('src');
        spinEl.hidden = true;
        hintEl.hidden = false;
        btnGen.hidden = false;
        btnGen.disabled = false;
        btnRegen.hidden = true;
        btnUse.hidden = true;
        noteEl.textContent = window.claude && window.claude.complete ? '' : 'Suggerimento AI non disponibile: uso la tua descrizione.';
        wrap.setAttribute('data-open', '');
        setTimeout(() => taEl.focus(), 30);
      }
    };
    return aiModal;
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.empty .aibtn{margin-top:2px;appearance:none;border:0;cursor:pointer;' + '  font:600 12px/1 system-ui,-apple-system,sans-serif;color:#fff;background:#6E5DC6;' + '  border-radius:7px;padding:7px 12px;box-shadow:0 2px 8px rgba(110,93,198,.35)}' + '.empty .aibtn:hover{background:#5a49b0}' + ':host(:not([data-ai])) .aibtn,:host(:not([data-ai])) .ctl button[data-act=ai]{display:none}' + '.ctl button[data-act=ai]{background:#6E5DC6}' + '.ctl button[data-act=ai]:hover{background:#5a49b0}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div>' + '    <button class="aibtn" type="button">✨ Genera con AI</button></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="ai" title="Genera con AI">✨ AI</button>' + '  <button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._aibtn = root.querySelector('.empty .aibtn');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      this._aibtn.addEventListener('click', e => {
        e.stopPropagation();
        this._openAI();
      });
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'ai') {
          this._openAI();
        }
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // AI generation affordances. Off via ai="off". _openAI seeds the dialog
    // from `prompt` (or `placeholder`); _applyImageDataUrl funnels a chosen
    // generation through the same store path as a drop.
    _aiEnabled() {
      return (this.getAttribute('ai') || '').toLowerCase() !== 'off';
    }
    _openAI() {
      if (!this._aiEnabled()) return;
      const idea = this.getAttribute('prompt') || this.getAttribute('placeholder') || '';
      getAIModal().open(this, idea);
    }
    _applyImageDataUrl(url) {
      if (!url) return;
      this._exitReframe(false);
      this._gen++;
      const val = {
        u: url,
        s: 1,
        x: 0,
        y: 0
      };
      if (this.id) setSlot(this.id, val);else {
        this._local = val;
        this._render();
      }
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';
      this.toggleAttribute('data-ai', this._aiEnabled());
      // AI generation works without an editing host (renders in-memory; only
      // cross-reload persistence needs the host), so it's always offered.
      if (this._aibtn) this._aibtn.style.display = '';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing/landing.jsx
try { (() => {
// Marketing landing — start2impact. Header, hero, stats band, "I nostri Master" grid,
// "Perché funziona" + testimonial carousel, consultation form, WhatsApp band, footer.
// Interactive: nav/buttons, carousel paging, consultation form (validates + success state).
const M_BASE = "../../";
const {
  Button: MButton,
  Icon: MIcon,
  Card: MCard,
  Footer: MFooter
} = window.DesignSystem_3f5762;
const {
  useState
} = React;
const PURPLE = "var(--brand-primary, #5938BC)";
const VIOLA = "var(--accent-mid, #6E5DC6)";
const SEAFOAM = "var(--theme-verde-core, #85E1C8)";
const MIDNIGHT = "var(--midnight, #060233)";
const INK = "#100A3D";
const MASTERS = [{
  title: "Growth Marketing e Agenti AI",
  img: "card-startup.png",
  bg: "#FCEEE3",
  tag: "MASTER UNIVERSITARIO",
  uni: true,
  desc: "Strategie di acquisizione, retention e funnel ottimizzati con l'AI."
}, {
  title: "AI e Agenti AI per il business",
  img: "card-ai.png",
  bg: "#ECEAFB",
  tag: "MASTER UNIVERSITARIO",
  uni: true,
  desc: "Modelli AI, prompt engineering e automazioni con LLM e agenti."
}, {
  title: "Digital Marketing e Agenti AI",
  img: "card-marketing-megaphone.png",
  bg: "#FCEAE0",
  tag: "MASTER UNIVERSITARIO",
  uni: true,
  desc: "Campagne Adv, contenuti social ed email e automazioni con l'AI."
}, {
  title: "Digital Marketing e Agenti AI",
  img: "card-marketing-like.png",
  bg: "#FCEEE3",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Campagne Adv, contenuti social ed email e automazioni con l'AI."
}, {
  title: "UX/UI Design e Agente AI",
  img: "card-design.png",
  bg: "#FCE7F0",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Progettazione di interfacce, design system e prototipazione avanzata."
}, {
  title: "Fullstack Development e Agente AI",
  img: "card-sviluppo.png",
  bg: "#E4F1FB",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Frontend, backend, database e deploy con tecnologie moderne."
}, {
  title: "Data Science, Analytics e Agenti AI",
  img: "card-data-science.png",
  bg: "#E6F6EF",
  tag: "MASTER PROFESSIONALIZZANTE",
  uni: false,
  desc: "Analisi dei dati, machine learning e visualizzazione con Python."
}];
const TESTIMONIALS = [{
  name: "Erica Giagnorio",
  company: "CHEF IN CAMICIA",
  label: "Da zero a Brand Manager",
  grad: "linear-gradient(160deg,#1C7A56,#0C3D2B)"
}, {
  name: "Emanuele Immesi",
  company: "MIODOTTORE",
  label: "Da zero a Data Analyst",
  grad: "linear-gradient(160deg,#176A6A,#0C3236)"
}, {
  name: "Filippo Andrello",
  company: "CAFFEINA",
  label: "Da zero a Content Creator",
  grad: "linear-gradient(160deg,#2A7A4E,#0C3D24)"
}, {
  name: "Sara Bianchi",
  company: "WELL CO.",
  label: "Da zero a UX Designer",
  grad: "linear-gradient(160deg,#1C6E7A,#0C3236)"
}, {
  name: "Marco De Luca",
  company: "FINTECH+",
  label: "Da zero a Fullstack Dev",
  grad: "linear-gradient(160deg,#26795A,#0C3D2B)"
}];
const FEATURES = [{
  icon: "graduation-cap",
  title: "Percorsi formativi completi",
  desc: "Online on demand con Q&A live: studi quando vuoi e fai domande in diretta ai professionisti."
}, {
  icon: "pen-to-square",
  title: "Progetti su casi reali",
  desc: "Metti in pratica da subito con progetti individuali corretti dai top professionisti del settore."
}, {
  icon: "medal",
  title: "Rimborso se non trovi lavoro*",
  desc: "Garanzia Money Back: investi sul tuo futuro con la massima tranquillità."
}];
function PlayBtn({
  size = 56
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 512",
    style: {
      width: size * 0.3,
      height: size * 0.3,
      fill: INK,
      marginLeft: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
  })));
}
function Header() {
  const link = {
    color: "#2C2A45",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 15,
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #ECEAF2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M_BASE + "assets/logo/logo-full.svg",
    alt: "start2impact",
    height: "30"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Master"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Metodo"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Orientamento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "secondary",
    size: "md"
  }, "Login"), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    size: "md"
  }, "Scopri i Master")))));
}
function HeroCheck({
  bold,
  rest
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      fontSize: 16,
      color: "#2C2A45",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: SEAFOAM,
      display: "grid",
      placeItems: "center",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 448 512",
    style: {
      width: 12,
      height: 12,
      fill: INK
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
  }))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, bold), " ", rest));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "64px 32px 72px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: 8,
      border: "1.5px solid " + SEAFOAM,
      color: "#1C7A56",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.04em"
    }
  }, "SOCIET\xC0 BENEFIT DAL 2017"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "22px 0 0",
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.04,
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      color: INK
    }
  }, "Scopri i Master sui lavori pi\xF9 richiesti"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      fontSize: 17,
      color: "#56536E",
      lineHeight: 1.55,
      maxWidth: 460
    }
  }, "Percorsi pratici e on demand con Agenti AI in ogni Master, progetti su casi reali e una garanzia che ti accompagna fino al lavoro."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "26px 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(HeroCheck, {
    bold: "Percorsi completi.",
    rest: "Online on demand + Q&A live"
  }), /*#__PURE__*/React.createElement(HeroCheck, {
    bold: "Progetti su casi reali.",
    rest: "Corretti da top professionisti del settore"
  }), /*#__PURE__*/React.createElement(HeroCheck, {
    bold: "Rimborso se non trovi lavoro*.",
    rest: "Garanzia Money Back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    size: "lg"
  }, "Scopri i Master"), /*#__PURE__*/React.createElement(MButton, {
    variant: "secondary",
    size: "lg"
  }, "Consulenza gratuita"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "stretch",
      minHeight: 420,
      borderRadius: 20,
      background: "linear-gradient(160deg,#EAF8F2,#D6F0E6)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M_BASE + "assets/masters/master-students.png",
    alt: "Studenti start2impact",
    style: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: "92%",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 28,
      background: INK,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      padding: "10px 18px 7px",
      borderRadius: 10,
      transform: "rotate(-2deg)"
    }
  }, "3.500+ assunti"))));
}
function Stats() {
  const items = [{
    big: "3.500+",
    small: "studenti hanno già\ntrovato lavoro"
  }, {
    big: "TOP 5",
    small: "aziende education in\nEuropa — Financial Times"
  }, {
    big: "4,8/5",
    small: "recensioni verificate\nsu Trustpilot"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#E9F8F1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "34px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 40,
      color: INK,
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, s.big), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#3A6B57",
      lineHeight: 1.3,
      whiteSpace: "pre-line"
    }
  }, s.small)))));
}
function MasterCard({
  m
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(20,16,50,0.08)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M_BASE + "assets/masters/" + m.img,
    alt: "",
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 22px",
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, m.uni && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      fontWeight: 600,
      color: "#8C89A3",
      paddingBottom: 14,
      borderBottom: "1px solid #ECEAF2"
    }
  }, /*#__PURE__*/React.createElement("span", null, "1.500 ORE"), /*#__PURE__*/React.createElement("span", null, "60 CFU")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: m.uni ? "16px 0 0" : 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 19,
      color: INK,
      lineHeight: 1.15
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "#56536E",
      lineHeight: 1.45
    }
  }, m.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    size: "md",
    style: {
      width: "100%"
    }
  }, "Scopri"))));
}
function Masters() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "76px 32px 64px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 42,
      textTransform: "uppercase",
      color: INK,
      letterSpacing: "-0.01em"
    }
  }, "I nostri Master"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 17,
      color: "#56536E"
    }
  }, "Master universitari e professionalizzanti, ognuno con un Agente AI integrato nel percorso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 22,
      marginTop: 36
    }
  }, MASTERS.slice(0, 4).map((m, i) => /*#__PURE__*/React.createElement(MasterCard, {
    key: i,
    m: m
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 22,
      marginTop: 22
    }
  }, MASTERS.slice(4).map((m, i) => /*#__PURE__*/React.createElement(MasterCard, {
    key: i,
    m: m
  }))));
}
function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = TESTIMONIALS.length - 2; // showing 3 at a time
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
      transform: "translateX(calc(" + -page + " * (33.333% + 7.33px)))"
    }
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 calc(33.333% - 14.67px)",
      aspectRatio: "1 / 1.18",
      borderRadius: 18,
      background: t.grad,
      position: "relative",
      overflow: "hidden",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 18,
      left: 18,
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      background: "rgba(0,0,0,0.35)",
      padding: "6px 11px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "circle-user",
    base: M_BASE,
    size: 13,
    color: "#fff"
  }), t.company), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PlayBtn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      bottom: 18,
      right: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 19,
      lineHeight: 1.05
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginTop: 10,
      background: INK,
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      padding: "8px 12px",
      borderRadius: 9
    }
  }, t.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      justifyContent: "center",
      marginTop: 26
    }
  }, Array.from({
    length: pages
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setPage(i),
    "aria-label": "Pagina " + (i + 1),
    style: {
      width: i === page ? 26 : 9,
      height: 9,
      borderRadius: 20,
      border: "none",
      padding: 0,
      cursor: "pointer",
      background: i === page ? PURPLE : "#CFCadd",
      transition: "all 0.3s"
    }
  }))));
}
function Why() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#F4F4F7"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "76px 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 42,
      textTransform: "uppercase",
      color: INK,
      letterSpacing: "-0.01em"
    }
  }, "Perch\xE9 funziona"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 17,
      color: "#56536E"
    }
  }, "3.500+ studenti hanno gi\xE0 trovato lavoro con il nostro metodo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 28,
      marginTop: 40
    }
  }, FEATURES.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      borderRadius: 16,
      padding: 28,
      boxShadow: "0 10px 30px rgba(20,16,50,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      background: "#F4F4F7",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: f.icon,
    base: M_BASE,
    size: 22,
    color: PURPLE
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 19,
      color: INK
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 15,
      color: "#56536E",
      lineHeight: 1.5
    }
  }, f.desc)))), /*#__PURE__*/React.createElement(Testimonials, null)));
}
function ConsultForm() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [done, setDone] = useState(false);
  const valid = /\S+@\S+\.\S+/.test(email) && agree;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 40,
      textTransform: "uppercase",
      color: INK,
      lineHeight: 1.05,
      letterSpacing: "-0.01em"
    }
  }, "Non sai quale Master scegliere?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 0",
      fontSize: 17,
      color: "#56536E",
      lineHeight: 1.55,
      maxWidth: 440
    }
  }, "Prova la nostra consulenza di carriera immediata e gratuita: scopri i lavori pi\xF9 adatti a te, gli stipendi e il Master migliore per il tuo percorso.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F8F8FB",
      borderRadius: 18,
      padding: 30,
      boxShadow: "0 14px 40px rgba(20,16,50,0.08)"
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "50%",
      background: SEAFOAM,
      display: "grid",
      placeItems: "center",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 448 512",
    style: {
      width: 24,
      height: 24,
      fill: INK
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 22,
      color: INK
    }
  }, "Richiesta inviata!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 15,
      color: "#56536E"
    }
  }, "Ti contatteremo a ", /*#__PURE__*/React.createElement("strong", null, email), " entro 24 ore.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-tight)",
      fontWeight: 700,
      fontSize: 18,
      color: INK
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "paper-plane-top",
    base: M_BASE,
    size: 18,
    color: PURPLE
  }), " Consulenza di carriera gratuita"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    type: "email",
    placeholder: "Inserisci la tua e-mail\u2026",
    style: {
      width: "100%",
      marginTop: 18,
      padding: "13px 16px",
      borderRadius: 10,
      border: "1.5px solid #DDD9E8",
      fontSize: 15,
      fontFamily: "var(--font-paragraph)",
      outline: "none",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 9,
      marginTop: 14,
      fontSize: 13,
      color: "#56536E",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    style: {
      marginTop: 2,
      accentColor: PURPLE,
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("span", null, "Accetto i Termini e Condizioni e la Privacy Policy")), /*#__PURE__*/React.createElement("button", {
    onClick: () => valid && setDone(true),
    disabled: !valid,
    style: {
      width: "100%",
      marginTop: 18,
      padding: "14px",
      borderRadius: 10,
      border: "none",
      background: valid ? VIOLA : "#C9C3DE",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      cursor: valid ? "pointer" : "not-allowed",
      transition: "background 0.2s"
    }
  }, "Ricevi la consulenza")))));
}
function WhatsappBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "20px 32px 84px",
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M_BASE + "assets/masters/whatsapp-team.png",
    alt: "Il team start2impact su WhatsApp",
    style: {
      display: "block",
      width: "auto",
      height: "auto",
      maxWidth: 160,
      maxHeight: 160
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-tight)",
      fontWeight: 800,
      fontSize: 40,
      textTransform: "uppercase",
      color: INK,
      lineHeight: 1.05,
      letterSpacing: "-0.01em"
    }
  }, "Parla con il nostro team"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 17,
      color: "#56536E",
      lineHeight: 1.55,
      maxWidth: 460
    }
  }, "Hai dubbi sul percorso giusto? Scrivici su WhatsApp e ti rispondiamo in tempo reale."), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 26,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 26px",
      borderRadius: 10,
      border: "none",
      background: VIOLA,
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "whatsapp",
    base: M_BASE,
    size: 18,
    color: "#fff"
  }), " Scrivi su WhatsApp"))));
}
function SiteFooter() {
  const columns = [{
    title: "About",
    links: [{
      label: "Chi siamo",
      active: true
    }, "Lavora con noi", "Per le aziende"]
  }, {
    title: "Formazione",
    links: ["Master", "Supporto Ricerca Lavoro", "Garanzia Money Back"]
  }, {
    title: "Risorse gratuite",
    links: ["Orientamento", "Blog", "Storie di successo"]
  }, {
    title: "Supporto",
    links: ["WhatsApp", "FAQ", "Recensioni", "Login"]
  }, {
    title: "Social",
    links: ["YouTube", "Instagram", "LinkedIn"]
  }];
  return /*#__PURE__*/React.createElement(MFooter, {
    base: M_BASE,
    columns: columns,
    legal: "\xA9 2017\u20132026 start2impact | Societ\xE0 Benefit | P.IVA 10104960964",
    legalLinks: ["Termini", "Privacy", "Cookie"]
  });
}
function Landing() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Masters, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(ConsultForm, null), /*#__PURE__*/React.createElement(WhatsappBand, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Landing, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/App.jsx
try { (() => {
// App shell — composes the Sidebar + the active screen. Screens come from the
// sibling babel files via window (separate babel scripts don't share scope).
const APP_BASE = "../../";
const {
  Icon: AppIcon,
  Sidebar
} = window.DesignSystem_3f5762;
function PlatformApp() {
  const {
    user,
    nav
  } = window.S2I_DATA;
  const [active, setActive] = React.useState("home");
  const screens = {
    home: window.HomeScreen,
    corsi: window.CoursesScreen,
    master: window.MasterScreen,
    gruppo: window.GruppoStudioScreen,
    career: window.CareerScreen,
    profilo: window.ProfiloScreen
  };
  const placeholder = (label, icon) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 24px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h2)",
      color: "var(--greyscale-dark)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "80px 0",
      color: "var(--greyscale-mid)",
      background: "var(--greyscale-base)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      color: "var(--greyscale-light)"
    }
  }, /*#__PURE__*/React.createElement(AppIcon, {
    name: icon,
    base: APP_BASE,
    size: 44
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: "var(--paragraph-span1)"
    }
  }, "Sezione \u201C", label, "\u201D \u2014 non inclusa in questo kit.")));
  const Screen = screens[active];
  const item = nav.find(n => n.id === active);
  const wide = active === "career" || active === "gruppo" || active === "profilo";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      background: "var(--ui-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    base: APP_BASE,
    items: nav,
    active: active,
    onNavigate: setActive,
    user: {
      name: user.firstname + " " + user.lastname,
      pic: user.pic,
      points: user.points,
      streak: user.streak
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? 1100 : 920,
      margin: "0 auto",
      padding: "40px 32px 80px"
    }
  }, Screen ? /*#__PURE__*/React.createElement(Screen, null) : placeholder(item.name, item.icon))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(PlatformApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/CourseCard.jsx
try { (() => {
// CourseCard — mirrors the product's course row: rounded-lg, p-4, shadow,
// a topic-tinted tile (centred icon) instead of a cover image, title (h5),
// topic Tag, duration + points, "Incluso nel tuo Master", optional progress.
const CC_BASE = "../../";
const {
  Icon: CIcon,
  Tag: CTag,
  Button: CButton,
  ProgressBar: CProgress
} = window.DesignSystem_3f5762;
function CourseCard({
  course
}) {
  const cta = course.progress === 100 ? "Rivedi" : course.progress > 0 ? "Continua" : "Inizia";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      background: "var(--greyscale-base)",
      padding: 16,
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      flexShrink: 0,
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `color-mix(in srgb, ${course.color} 14%, white)`
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: course.icon || "book",
    base: CC_BASE,
    size: 26,
    color: course.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h5)",
      color: "var(--greyscale-dark)"
    }
  }, course.title), /*#__PURE__*/React.createElement(CTag, {
    color: course.color,
    label: course.topic,
    size: "sm"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      color: "var(--greyscale-mid)",
      lineHeight: 1.4
    }
  }, course.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "primary",
    size: "md"
  }, cta))), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "2px solid var(--pine-100)",
      margin: "16px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span2)"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "clock",
    base: CC_BASE,
    size: 16
  }), " ", course.duration), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span2)"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "medal",
    base: CC_BASE,
    size: 16
  }), " ", course.points, " punti"), course.included && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--text-brand-mid)",
      fontSize: "var(--label-2)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "circle-check",
    base: CC_BASE,
    size: 16,
    color: "var(--text-brand-mid)"
  }), " Incluso nel tuo Master"), typeof course.progress === "number" && course.progress > 0 && course.progress < 100 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement(CProgress, {
    value: course.progress,
    showLabel: true
  }))));
}
window.CourseCard = CourseCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/CourseCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/data.js
try { (() => {
// Fake data for the start2impact platform UI kit. Mirrors the shape of the
// real student platform (apps/frontend) — user, master, courses, community.
window.S2I_DATA = {
  user: {
    firstname: "Mario",
    lastname: "Rossi",
    points: 15450,
    streak: 12,
    pic: "https://i.pravatar.cc/160?img=12",
    masterName: "UX/UI Design e Agenti AI",
    hours: 284,
    profileComplete: 96
  },
  master: {
    title: "UX/UI Design e Agenti AI",
    progress: 96,
    hero: "../../assets/masters/master-sviluppo.png",
    heroTint: "radial-gradient(circle at 50% 40%, #e7eefc, #9db6f0)"
  },
  nav: [{
    id: "home",
    name: "Home",
    icon: "house",
    isNew: false
  }, {
    id: "master",
    name: "Master",
    icon: "graduation-cap",
    isNew: false
  }, {
    id: "corsi",
    name: "Corsi",
    icon: "bookmark",
    isNew: false
  }, {
    id: "gruppo",
    name: "Gruppo Studio",
    icon: "calendar-range",
    isNew: true
  }, {
    id: "career",
    name: "Career Service",
    icon: "briefcase",
    isNew: false
  }, {
    id: "profilo",
    name: "Profilo",
    icon: "user",
    isNew: false
  }],
  // Courses in the chosen master
  masterCourses: [{
    id: 1,
    title: "HTML & CSS: le basi del Web",
    topic: "Sviluppo",
    color: "var(--topic-dev)",
    icon: "file-lines",
    duration: "8 ore",
    points: 120,
    progress: 100,
    included: true,
    desc: "Costruisci le tue prime pagine web e impara a dare struttura e stile ai contenuti."
  }, {
    id: 2,
    title: "JavaScript moderno",
    topic: "Sviluppo",
    color: "var(--topic-dev)",
    icon: "list-check",
    duration: "14 ore",
    points: 200,
    progress: 60,
    included: true,
    desc: "Dalla sintassi di base a fetch, async/await e manipolazione del DOM con progetti reali."
  }, {
    id: 3,
    title: "React: costruisci interfacce",
    topic: "Sviluppo",
    color: "var(--topic-dev)",
    icon: "graduation-cap",
    duration: "18 ore",
    points: 240,
    progress: 0,
    included: true,
    desc: "Componenti, stato e hook per creare applicazioni front-end professionali."
  }],
  // Course catalog (all topics)
  catalog: [{
    id: 11,
    title: "Fondamenti di Marketing Digitale",
    topic: "Marketing",
    color: "var(--topic-marketing)",
    icon: "rocket",
    duration: "10 ore",
    points: 150,
    included: true,
    desc: "SEO, social, funnel e advertising: la cassetta degli attrezzi del marketer digitale."
  }, {
    id: 12,
    title: "UX/UI Design da zero",
    topic: "Design",
    color: "var(--topic-design)",
    icon: "pen-to-square",
    duration: "12 ore",
    points: 180,
    included: false,
    desc: "Ricerca, wireframe e prototipi: progetta esperienze che le persone amano usare."
  }, {
    id: 13,
    title: "Python per la Data Science",
    topic: "Data Science",
    color: "var(--topic-data)",
    icon: "list-check",
    duration: "16 ore",
    points: 220,
    included: true,
    desc: "Pandas, visualizzazione e primi modelli per leggere e raccontare i dati."
  }, {
    id: 14,
    title: "AI per il lavoro",
    topic: "AI",
    color: "var(--topic-blockchain)",
    icon: "gem",
    duration: "11 ore",
    points: 170,
    included: false,
    desc: "Prompting, strumenti generativi e automazioni per lavorare meglio con l'AI."
  }, {
    id: 15,
    title: "Crea la tua Startup",
    topic: "Startup",
    color: "var(--topic-startup)",
    icon: "handshake",
    duration: "9 ore",
    points: 140,
    included: false,
    desc: "Dall'idea al business model, fino al primo pitch agli investitori."
  }],
  profile: {
    bio: ["Designer in formazione con una passione per le interfacce che mettono le persone al centro. Studio UX/UI e agenti AI applicati al prodotto.", "Durante il Master ho lavorato a progetti pratici reali, corretti da professionisti del settore, costruendo un portfolio concreto."],
    settori: [{
      name: "Fashion",
      icon: "star"
    }, {
      name: "Lifestyle",
      icon: "fire"
    }, {
      name: "Education",
      icon: "graduation-cap"
    }, {
      name: "Food",
      icon: "gem"
    }],
    onu: [{
      n: 4,
      label: "Quality Education",
      color: "#C5192D"
    }, {
      n: 8,
      label: "Decent Work",
      color: "#A21942"
    }, {
      n: 9,
      label: "Industry & Innovation",
      color: "#FD6925"
    }]
  },
  gruppo: {
    channels1: [{
      icon: "bell",
      name: "Messaggi da start2impact",
      count: 11
    }, {
      icon: "message-question",
      name: "Q&A con Professionisti",
      count: 7
    }, {
      icon: "location-dot",
      name: "Eventi della Community",
      count: null
    }],
    channels2: [{
      icon: "comments",
      name: "Chat Generale",
      count: 12
    }, {
      icon: "book-bookmark",
      name: "Gruppo Studio",
      count: 12
    }],
    posts: [{
      author: "Simona Paris",
      initials: "SP",
      tint: "#C026D3",
      time: "2h",
      title: "Progetto UI",
      body: "Ciao a tutti! Ho iniziato da poco il progetto di User Interface 1 e in fase di lavoro ho fatto delle modifiche al frame, quindi ora il layout risulta diverso rispetto al frame che ho presentato nel progetto di Wireframing. Potrebbe essere un problema in fase di correzione?",
      likes: 1,
      comments: 0
    }, {
      author: "Danilo Zarba",
      initials: "DZ",
      tint: "var(--accent-mid)",
      time: "2d",
      title: "Tentativi progetto",
      body: "Buongiorno! Mi sorge un dubbio: riguardo ai progetti, c'è un numero massimo di tentativi o si possono ripetere finché non si riesce a passare l'esame? Grazie",
      likes: 4,
      comments: 2
    }]
  },
  topics: [{
    id: "all",
    name: "Tutti",
    color: "var(--greyscale-dark)"
  }, {
    id: "Marketing",
    name: "Marketing",
    color: "var(--topic-marketing)"
  }, {
    id: "Design",
    name: "Design",
    color: "var(--topic-design)"
  }, {
    id: "Sviluppo",
    name: "Sviluppo",
    color: "var(--topic-dev)"
  }, {
    id: "Data Science",
    name: "Data Science",
    color: "var(--topic-data)"
  }, {
    id: "AI",
    name: "AI",
    color: "var(--topic-blockchain)"
  }, {
    id: "Startup",
    name: "Startup",
    color: "var(--topic-startup)"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/data.js", error: String((e && e.message) || e) }); }

// ui_kits/platform/screens.jsx
try { (() => {
// Platform screens — Home (student dashboard) and Courses (catalog with filters).
const S_BASE = "../../";
const {
  Icon: SIcon,
  Card: SCard,
  ProgressBar: SProgress,
  IconButton: SIconButton,
  Button: SButton,
  Input: SInput,
  Alert: SAlert,
  Dropdown: SDropdown,
  Drawer: SDrawer
} = window.DesignSystem_3f5762;
const {
  CourseCard
} = window; // defined in CourseCard.jsx (loaded first)

function PageHeader({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h2)",
      color: "var(--greyscale-dark)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, children, /*#__PURE__*/React.createElement(SIconButton, {
    name: "bell",
    base: S_BASE,
    kind: "ghost",
    ariaLabel: "Notifiche"
  })));
}
function HomeScreen() {
  const {
    user,
    master,
    masterCourses
  } = window.S2I_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: `Ciao ${user.firstname}`
  }), /*#__PURE__*/React.createElement(SCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 2fr 1fr",
      gap: 28,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: master.heroTint,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: master.hero,
    alt: master.title,
    style: {
      width: "86%",
      height: "86%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      color: "var(--greyscale-mid)"
    }
  }, "Il Master che hai scelto \xE8:"), /*#__PURE__*/React.createElement(SIconButton, {
    name: "pen-to-square",
    base: S_BASE,
    kind: "ghost",
    size: "sm",
    ariaLabel: "Modifica master"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h4)",
      color: "var(--greyscale-dark)"
    }
  }, master.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      color: "var(--greyscale-mid)",
      display: "block",
      marginBottom: 10
    }
  }, "Percorso completo al:"), /*#__PURE__*/React.createElement(SProgress, {
    value: master.progress,
    showLabel: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(SAlert, {
    variant: "info",
    base: S_BASE,
    title: "Fai il primo passo",
    description: "Parti dal Corso introduttivo per fare pratica gi\xE0 dopo poche ore di studio e ricevere una correzione da professionisti del settore."
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "40px 0 24px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h3)",
      color: "var(--greyscale-dark)"
    }
  }, "I Corsi del tuo Master"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, masterCourses.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    course: c
  }))));
}
function CoursesScreen() {
  const {
    catalog,
    topics
  } = window.S2I_DATA;
  const [topic, setTopic] = React.useState("all");
  const [q, setQ] = React.useState("");
  const [sort, setSort] = React.useState("consigliati");
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [draftTopic, setDraftTopic] = React.useState("all");
  const hours = c => parseInt(c.duration, 10) || 0;
  const sorted = list => {
    const a = [...list];
    if (sort === "durata") a.sort((x, y) => hours(x) - hours(y));else if (sort === "punti") a.sort((x, y) => y.points - x.points);
    return a;
  };
  const filtered = sorted(catalog.filter(c => {
    const okTopic = topic === "all" || c.topic === topic;
    const okQ = !q || c.title.toLowerCase().includes(q.toLowerCase());
    return okTopic && okQ;
  }));
  const topicOptions = topics.map(t => ({
    value: t.id,
    label: t.name
  }));
  const sortOptions = [{
    value: "consigliati",
    label: "Consigliati"
  }, {
    value: "durata",
    label: "Durata"
  }, {
    value: "punti",
    label: "Punti"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Corsi"
  }, /*#__PURE__*/React.createElement(SButton, {
    as: "button",
    variant: "secondary",
    size: "md",
    onClick: () => {
      setDraftTopic(topic);
      setFiltersOpen(true);
    },
    icon: /*#__PURE__*/React.createElement(SIcon, {
      name: "sort",
      base: S_BASE,
      size: 16
    })
  }, "Filtri")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 24
    }
  }, topics.map(t => {
    const on = t.id === topic;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTopic(t.id),
      style: {
        cursor: "pointer",
        borderRadius: "var(--radius-full)",
        padding: "8px 16px",
        fontFamily: "var(--font-paragraph)",
        fontWeight: 600,
        fontSize: "var(--label-2)",
        border: `1px solid ${on ? t.color : "var(--greyscale-extralight)"}`,
        background: on ? t.color : "var(--greyscale-base)",
        color: on ? "var(--greyscale-base)" : "var(--greyscale-mid)",
        transition: "all .15s linear"
      }
    }, t.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SInput, {
    id: "search",
    base: S_BASE,
    placeholder: "Scrivi il nome del Corso che stai cercando",
    value: q,
    onChange: e => setQ(e.target.value),
    icon: /*#__PURE__*/React.createElement(SIcon, {
      name: "circle-question",
      base: S_BASE,
      size: 18
    })
  })), /*#__PURE__*/React.createElement(SDropdown, {
    id: "sort",
    base: S_BASE,
    width: 200,
    value: sort,
    onChange: setSort,
    options: sortOptions
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, filtered.length ? filtered.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    course: c
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "60px 0",
      color: "var(--greyscale-mid)"
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: "folder",
    base: S_BASE,
    size: 40,
    color: "var(--greyscale-light)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: "var(--paragraph-span1)"
    }
  }, "Nessun Corso trovato con questo nome"))), /*#__PURE__*/React.createElement(SDrawer, {
    base: S_BASE,
    isVisible: filtersOpen,
    onClose: () => setFiltersOpen(false),
    title: "Filtri",
    anchor: "right",
    actionLabel: "Applica",
    actionIcon: /*#__PURE__*/React.createElement(SIcon, {
      name: "check",
      base: S_BASE,
      size: 16
    }),
    onAction: () => {
      setTopic(draftTopic);
      setFiltersOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SDropdown, {
    id: "f-topic",
    base: S_BASE,
    label: "Categoria",
    value: draftTopic,
    onChange: setDraftTopic,
    helpText: "Filtra i corsi per area",
    options: topicOptions
  }), /*#__PURE__*/React.createElement(SDropdown, {
    id: "f-sort",
    base: S_BASE,
    label: "Ordina per",
    value: sort,
    onChange: setSort,
    options: sortOptions
  }))));
}
window.HomeScreen = HomeScreen;
window.CoursesScreen = CoursesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/screens2.jsx
try { (() => {
// Additional platform screens — Master, Gruppo Studio (community), Career Service, Profilo.
const S2_BASE = "../../";
const {
  Icon: S2Icon,
  Card: S2Card,
  ProgressBar: S2Progress,
  Button: S2Button,
  Tabs: S2Tabs,
  Avatar: S2Avatar
} = window.DesignSystem_3f5762;
const {
  CourseCard
} = window; // defined in CourseCard.jsx (loaded first)

function PageH({
  title
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 32px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h2)",
      color: "var(--greyscale-dark)"
    }
  }, title);
}

/* ---------------- Master ---------------- */
function MasterScreen() {
  const {
    master,
    masterCourses
  } = window.S2I_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageH, {
    title: "Master"
  }), /*#__PURE__*/React.createElement(S2Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 2fr 1fr",
      gap: 28,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: master.heroTint,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: master.hero,
    alt: master.title,
    style: {
      width: "86%",
      height: "86%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      color: "var(--greyscale-mid)"
    }
  }, "Il Master che hai scelto \xE8:"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h4)",
      color: "var(--greyscale-dark)"
    }
  }, master.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-paragraph)",
      fontSize: "var(--paragraph-span2)",
      color: "var(--greyscale-mid)",
      display: "block",
      marginBottom: 10
    }
  }, "Percorso completo al:"), /*#__PURE__*/React.createElement(S2Progress, {
    value: master.progress,
    showLabel: true
  })))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "40px 0 24px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h3)",
      color: "var(--greyscale-dark)"
    }
  }, "I Corsi del tuo Master"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, masterCourses.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    course: c
  }))));
}

/* ---------------- Gruppo Studio (community) ---------------- */
function GruppoStudioScreen() {
  const {
    gruppo
  } = window.S2I_DATA;
  const rail = (label, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--label-2)",
      fontWeight: 700,
      color: "var(--greyscale-dark)",
      margin: "0 0 10px"
    }
  }, label), items.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 10px",
      borderRadius: "var(--radius-sm)",
      color: "var(--greyscale-dark)",
      fontSize: "var(--paragraph-span2)"
    }
  }, /*#__PURE__*/React.createElement(S2Icon, {
    name: c.icon,
    base: S2_BASE,
    size: 16,
    color: "var(--greyscale-mid)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, c.name), c.count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--greyscale-mid)",
      border: "1px solid var(--greyscale-extralight)",
      borderRadius: 6,
      padding: "1px 7px"
    }
  }, c.count))));
  const post = p => /*#__PURE__*/React.createElement(S2Card, {
    key: p.author,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "999px",
      background: p.tint,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 13
    }
  }, p.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--greyscale-dark)",
      fontSize: "var(--paragraph-span1)"
    }
  }, p.author, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--greyscale-mid)",
      fontWeight: 400,
      fontSize: "var(--paragraph-span3)"
    }
  }, "\xB7 ", p.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span3)"
    }
  }, "in Gruppo Studio"))), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h5)",
      color: "var(--greyscale-dark)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--greyscale-dark)",
      lineHeight: 1.6,
      fontSize: "var(--paragraph-span2)"
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      marginTop: 16,
      color: "var(--greyscale-mid)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(S2Icon, {
    name: "fire",
    base: S2_BASE,
    size: 16
  }), " ", p.likes, " like"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(S2Icon, {
    name: "comments",
    base: S2_BASE,
    size: 16
  }), " ", p.comments, " commenti")));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageH, {
    title: "Gruppo Studio"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--greyscale-base)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--greyscale-extralight)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: S2_BASE + "assets/logo/marchio.svg",
    alt: "",
    height: "24",
    onError: e => {
      e.target.style.display = "none";
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      color: "var(--greyscale-dark)"
    }
  }, "start2impact")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "var(--greyscale-mid)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--paragraph-span2)",
      color: "var(--greyscale-dark)"
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--paragraph-span2)"
    }
  }, "Eventi"), /*#__PURE__*/React.createElement(S2Icon, {
    name: "bell",
    base: S2_BASE,
    size: 18
  }), /*#__PURE__*/React.createElement(S2Icon, {
    name: "comments",
    base: S2_BASE,
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "230px 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px",
      borderRight: "1px solid var(--greyscale-extralight)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--accent-mid)",
      color: "#fff",
      borderRadius: "var(--radius-sm)",
      padding: "10px 12px",
      fontWeight: 600,
      fontSize: "var(--paragraph-span2)",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(S2Icon, {
    name: "house",
    base: S2_BASE,
    size: 16,
    color: "#fff"
  }), " Feed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--label-2)",
      fontWeight: 700,
      color: "var(--greyscale-dark)",
      margin: "0 0 10px"
    }
  }, "start2impact"), rail(null, gruppo.channels1), rail("UX/UI Design e Agenti AI", gruppo.channels2)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--ui-secondary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h4)",
      color: "var(--greyscale-dark)"
    }
  }, "Feed"), /*#__PURE__*/React.createElement(S2Button, {
    as: "button",
    variant: "primary",
    size: "md"
  }, "Nuovo post")), gruppo.posts.map(post)))));
}

/* ---------------- Career Service ---------------- */
function CareerScreen() {
  const steps = [{
    n: 1,
    label: "Corso sulla ricerca lavoro"
  }, {
    n: 2,
    label: "Call di consulenza su CV e candidature"
  }, {
    n: 3,
    label: "Simulazione colloqui: conoscitivo e tecnico"
  }, {
    n: 4,
    label: "Ricerca lavoro con Career Coach individuale"
  }, {
    n: 5,
    label: "Supporto nella scelta dell'azienda"
  }];
  const stories = [{
    name: "Mattia Checcaglini",
    role: "Junior Digital Marketing Specialist",
    tint: "#6E5DC6",
    text: "Il Career Service è stato fondamentale per orientarmi nella ricerca. Mi ha aiutato a capire dove potevo dare il meglio."
  }, {
    name: "Eleonora Selle",
    role: "UI Designer · Master in UX/UI",
    tint: "#28CC9E",
    text: "Mi ha insegnato come farmi notare dai selezionatori su LinkedIn e a presentarmi al meglio ai colloqui."
  }, {
    name: "Clarissa Cortese",
    role: "Full Stack Developer in yome Group",
    tint: "#7070E0",
    text: "Il tempo dedicato ai progetti ha fatto la differenza: a ogni domanda del colloquio avevo un esempio pratico."
  }];
  const companies = ["freedom", "accenture", "MioDottore", "LifeGate", "NTT DATA", "yome"];
  const howto = [{
    icon: "clipboard-list-check",
    title: "Preparazione ed esercizi pratici"
  }, {
    icon: "users",
    title: "Call di consulenza 1-to-1 e supporto costante"
  }, {
    icon: "paper-plane-top",
    title: "Simulazione colloqui con Senior HR e tecnici"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageH, {
    title: "Career Service"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 28px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h5)",
      color: "var(--greyscale-dark)"
    }
  }, "Come ti supportiamo nella ricerca del lavoro adatto a te."), /*#__PURE__*/React.createElement(S2Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 8,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 22,
      left: "10%",
      right: "10%",
      height: 2,
      background: "var(--brand-primary-light)"
    }
  }), steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--brand-primary)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 800,
      fontSize: 18
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--paragraph-span3)",
      color: "var(--greyscale-dark)",
      textAlign: "center",
      maxWidth: 150,
      lineHeight: 1.35
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(S2Button, {
    as: "button",
    variant: "secondary",
    size: "md"
  }, "Scopri di pi\xF9"), /*#__PURE__*/React.createElement(S2Button, {
    as: "button",
    variant: "primary",
    size: "md"
  }, "Inizia ora"))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "48px 0 6px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h4)",
      color: "var(--greyscale-dark)"
    }
  }, "Storie di successo grazie al Career Service"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span2)"
    }
  }, "Ecco cosa dice chi ha ricevuto il nostro supporto."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, stories.map(s => /*#__PURE__*/React.createElement(S2Card, {
    key: s.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: s.tint,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 15,
      flexShrink: 0
    }
  }, s.name.split(" ").map(w => w[0]).join("")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--greyscale-dark)",
      fontSize: "var(--paragraph-span2)"
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span3)"
    }
  }, s.role))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--greyscale-dark)",
      lineHeight: 1.6,
      fontSize: "var(--paragraph-span2)"
    }
  }, s.text)))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "48px 0 6px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h5)",
      color: "var(--greyscale-dark)"
    }
  }, "Le aziende che hanno assunto studenti di start2impact come te"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span2)"
    }
  }, "Ti supportiamo a scegliere la realt\xE0 migliore per te in base a tipologia e competenze richieste."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, companies.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      flex: "1 1 120px",
      textAlign: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--greyscale-light)"
    }
  }, c))), /*#__PURE__*/React.createElement(S2Card, {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 28px",
      textAlign: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h4)",
      color: "var(--greyscale-dark)"
    }
  }, "Ecco come funziona il Career Service"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, howto.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.title,
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--brand-primary-light)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(S2Icon, {
    name: h.icon,
    base: S2_BASE,
    size: 26,
    color: "var(--brand-base)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--greyscale-dark)",
      fontSize: "var(--paragraph-span1)",
      maxWidth: 200
    }
  }, h.title))))));
}

/* ---------------- Profilo ---------------- */
function ProfiloScreen() {
  const {
    user,
    profile
  } = window.S2I_DATA;
  const [tab, setTab] = React.useState("portfolio");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(S2Avatar, {
    src: user.pic,
    name: user.firstname + " " + user.lastname,
    size: 150,
    ring: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 8px",
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span2)"
    }
  }, "Profilo completo al"), /*#__PURE__*/React.createElement(S2Progress, {
    value: user.profileComplete,
    showLabel: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--accent-dark)",
      fontWeight: 600,
      fontSize: "var(--label-2)"
    }
  }, /*#__PURE__*/React.createElement(S2Icon, {
    name: "user-pen",
    base: S2_BASE,
    size: 16,
    color: "var(--accent-dark)"
  }), " Impostazioni personali")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 16px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h2)",
      color: "var(--greyscale-dark)"
    }
  }, user.firstname, " ", user.lastname), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      color: "var(--greyscale-mid)",
      fontSize: "var(--paragraph-span1)"
    }
  }, "Ho completato il Master in:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h4)",
      color: "var(--brand-base)"
    }
  }, user.masterName), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      color: "var(--greyscale-dark)",
      fontSize: "var(--paragraph-span1)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: "var(--h4)"
    }
  }, user.hours), " \xA0Ore di Formazione Pratica svolte"), profile.bio.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      margin: "0 0 18px",
      color: "var(--greyscale-dark)",
      lineHeight: 1.65,
      fontSize: "var(--paragraph-span1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 8,
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--brand-primary)"
    }
  }), /*#__PURE__*/React.createElement("span", null, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h5)",
      color: "var(--greyscale-dark)"
    }
  }, "I miei Settori di interesse:"), /*#__PURE__*/React.createElement(S2Icon, {
    name: "user-pen",
    base: S2_BASE,
    size: 18,
    color: "var(--accent-dark)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      background: "var(--brand-primary-light)",
      borderRadius: "var(--radius-lg)",
      padding: 18
    }
  }, profile.settori.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      width: 78,
      height: 78,
      borderRadius: "var(--radius-lg)",
      background: "var(--brand-base)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(S2Icon, {
    name: s.icon,
    base: S2_BASE,
    size: 22,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, s.name))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--h5)",
      color: "var(--greyscale-dark)"
    }
  }, "I miei Obiettivi ONU:"), /*#__PURE__*/React.createElement(S2Icon, {
    name: "user-pen",
    base: S2_BASE,
    size: 18,
    color: "var(--accent-dark)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      background: "var(--brand-primary-light)",
      borderRadius: "var(--radius-lg)",
      padding: 18
    }
  }, profile.onu.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.n,
    title: o.label,
    style: {
      width: 88,
      height: 88,
      borderRadius: 8,
      background: o.color,
      color: "#fff",
      padding: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 800,
      fontSize: 24,
      lineHeight: 1
    }
  }, o.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: 1.2
    }
  }, o.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(S2Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: "portfolio",
      label: "Portfolio"
    }, {
      id: "skill",
      label: "Skill"
    }, {
      id: "certificati",
      label: "Certificati"
    }, {
      id: "informazioni",
      label: "Informazioni"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 2px",
      color: "var(--greyscale-mid)"
    }
  }, "Sezione ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--greyscale-dark)"
    }
  }, tab), " \u2014 non inclusa in questo kit.")));
}
window.MasterScreen = MasterScreen;
window.GruppoStudioScreen = GruppoStudioScreen;
window.CareerScreen = CareerScreen;
window.ProfiloScreen = ProfiloScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/screens2.jsx", error: String((e && e.message) || e) }); }

// uploads/token-table.js
try { (() => {
// Auto-generates the "I nostri token" tables from the live CSS variables.
// Edit tokens/*.css and these tables update automatically — single source of truth.
(function () {
  function build() {
    var root = getComputedStyle(document.documentElement);
    var probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.whiteSpace = 'nowrap';
    document.body.appendChild(probe);
    function res(name, prop) {
      probe.style[prop] = '';
      probe.style[prop] = 'var(' + name + ')';
      return getComputedStyle(probe)[prop];
    }
    function hx(v) {
      if (!v || v.indexOf('rgb') !== 0) return v;
      var inside = v.substring(v.indexOf('(') + 1, v.indexOf(')'));
      var p = inside.split(',');
      function h(x) {
        var s = (parseInt(x, 10) || 0).toString(16);
        return s.length < 2 ? '0' + s : s;
      }
      return ('#' + h(p[0]) + h(p[1]) + h(p[2])).toUpperCase();
    }
    var GR = 'display:grid;grid-template-columns:280px 1fr 60px;gap:16px;align-items:center;';
    var TH = 'font-family:var(--font-paragraph);font-weight:700;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--greyscale-mid)';
    function head() {
      return '<div style="' + GR + 'padding:0 0 8px;border-bottom:2px solid var(--greyscale-extralight)"><span style="' + TH + '">Token</span><span style="' + TH + '">Valore</span><span style="' + TH + ';justify-self:end">Anteprima</span></div>';
    }
    function rowH(n, v, pv) {
      return '<div style="' + GR + 'padding:11px 0;border-bottom:1px solid var(--greyscale-extralight)"><code style="font-size:13px;color:#060233">' + n + '</code><span style="font-size:13px;color:var(--greyscale-mid)">' + v + '</span><span style="justify-self:end;display:flex">' + pv + '</span></div>';
    }
    function pColor(n) {
      return '<span style="width:44px;height:26px;border-radius:5px;background:var(' + n + ');box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)"></span>';
    }
    function pFam(n) {
      return '<span style="font-family:var(' + n + ');font-weight:700;font-size:20px;color:#060233">Aa</span>';
    }
    function pSize(px) {
      return '<span style="font-family:var(--font-title);font-weight:700;font-size:' + px + 'px;line-height:1;color:#060233">Aa</span>';
    }
    function pWeight(n) {
      return '<span style="font-family:var(--font-paragraph);font-weight:var(' + n + ');font-size:18px;color:#060233">Aa</span>';
    }
    function pSpace(px) {
      return '<span style="height:14px;width:' + px + 'px;background:var(--mint-400);border-radius:3px"></span>';
    }
    function pRadius(n) {
      return '<span style="width:32px;height:32px;border-radius:var(' + n + ');background:var(--mint-200);box-shadow:inset 0 0 0 1px var(--mint-300)"></span>';
    }
    function pShadow(n) {
      return '<span style="width:42px;height:26px;border-radius:6px;background:#fff;box-shadow:var(' + n + ')"></span>';
    }
    var GROUPS = [{
      h: 'Colore',
      type: 'color',
      names: ['--mint-00', '--mint-100', '--mint-200', '--mint-300', '--mint-400', '--mint-500', '--mint-600', '--mint-800', '--seafoam', '--purple-200', '--purple-400', '--purple-500', '--purple-600', '--iris', '--neon-violet', '--midnight', '--grey-100', '--grey-200', '--grey-400', '--grey-600', '--grey-800', '--grey-900']
    }, {
      h: 'Tipografia',
      type: 'type',
      names: ['--font-title', '--font-paragraph', '--font-display', '--h1', '--h2', '--h3', '--h4', '--h5', '--h6', '--h1-landing', '--h2-landing', '--h3-landing', '--label', '--label-1', '--label-2', '--label-3', '--label-4', '--paragraph-p1', '--paragraph-span1', '--paragraph-span2', '--paragraph-span3', '--paragraph-span4', '--button-1', '--button-2', '--button-3', '--button-4', '--more-sugar-1', '--more-sugar-2']
    }, {
      h: 'Spaziatura',
      type: 'space',
      names: ['--space-0', '--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-8', '--space-10', '--space-12', '--space-16', '--space-20']
    }, {
      h: 'Raggi',
      type: 'radius',
      names: ['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-2xl', '--radius-full']
    }, {
      h: 'Ombre',
      type: 'shadow',
      names: ['--shadow-card', '--shadow-modal', '--shadow-input-border', '--shadow-input-focus', '--shadow-input-disabled']
    }, {
      h: 'Semantici',
      type: 'color',
      names: ['--brand-base', '--brand-primary', '--accent-mid', '--accent-dark', '--ui-primary', '--ui-secondary', '--text-brand-mid', '--feedback-success', '--feedback-success-text', '--feedback-error', '--feedback-error-text', '--feedback-warning', '--feedback-waiting', '--feedback-info', '--topic-marketing', '--topic-design', '--topic-dev', '--topic-data', '--topic-blockchain', '--topic-startup', '--topic-mindset']
    }, {
      h: 'Pesi',
      type: 'weight',
      names: ['--weight-regular', '--weight-medium', '--weight-semibold', '--weight-bold', '--weight-extra', '--weight-black']
    }, {
      h: 'Layout',
      type: 'plain',
      names: ['--container-max', '--sidebar-w', '--sidebar-w-collapsed', '--focus-ring']
    }];
    var out = '';
    GROUPS.forEach(function (grp) {
      var rows = '';
      grp.names.forEach(function (n) {
        var v = '',
          pv = '';
        if (grp.type === 'color') {
          var rgb = res(n, 'color');
          if (!rgb) return;
          v = hx(rgb);
          pv = pColor(n);
        } else if (grp.type === 'type') {
          if (n.indexOf('--font') === 0) {
            v = res(n, 'fontFamily').replace(/["']/g, '').split(',')[0];
            pv = pFam(n);
          } else {
            var fs = res(n, 'fontSize');
            v = fs;
            pv = pSize(Math.min(parseFloat(fs) || 16, 28));
          }
        } else if (grp.type === 'weight') {
          v = res(n, 'fontWeight');
          pv = pWeight(n);
        } else if (grp.type === 'space') {
          var s = res(n, 'fontSize');
          v = s;
          pv = pSpace(Math.min(parseFloat(s) || 0, 52));
        } else if (grp.type === 'radius') {
          v = res(n, 'borderTopLeftRadius');
          pv = pRadius(n);
        } else if (grp.type === 'shadow') {
          var sh = res(n, 'boxShadow');
          v = sh && sh !== 'none' ? sh.length > 44 ? sh.slice(0, 44) + '…' : sh : root.getPropertyValue(n).trim();
          pv = pShadow(n);
        } else {
          v = (root.getPropertyValue(n) || '').trim();
        }
        rows += rowH(n, v, pv);
      });
      out += '<h3 style="margin-top:48px">' + grp.h + '</h3><div style="margin:14px 0 8px">' + head() + rows + '</div>';
    });
    var host = document.getElementById('tok-tables');
    if (host) host.innerHTML = out;
    probe.remove();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);else build();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/token-table.js", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

})();
