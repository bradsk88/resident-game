/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/local.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A library of seedable RNGs implemented in Javascript.\n//\n// Usage:\n//\n// var seedrandom = require('seedrandom');\n// var random = seedrandom(1); // or any seed.\n// var x = random();       // 0 <= x < 1.  Every bit is random.\n// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.\n\n// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.\n// Period: ~2^116\n// Reported to pass all BigCrush tests.\nvar alea = __webpack_require__(/*! ./lib/alea */ \"./node_modules/seedrandom/lib/alea.js\");\n\n// xor128, a pure xor-shift generator by George Marsaglia.\n// Period: 2^128-1.\n// Reported to fail: MatrixRank and LinearComp.\nvar xor128 = __webpack_require__(/*! ./lib/xor128 */ \"./node_modules/seedrandom/lib/xor128.js\");\n\n// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.\n// Period: 2^192-2^32\n// Reported to fail: CollisionOver, SimpPoker, and LinearComp.\nvar xorwow = __webpack_require__(/*! ./lib/xorwow */ \"./node_modules/seedrandom/lib/xorwow.js\");\n\n// xorshift7, by François Panneton and Pierre L'ecuyer, takes\n// a different approach: it adds robustness by allowing more shifts\n// than Marsaglia's original three.  It is a 7-shift generator\n// with 256 bits, that passes BigCrush with no systmatic failures.\n// Period 2^256-1.\n// No systematic BigCrush failures reported.\nvar xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ \"./node_modules/seedrandom/lib/xorshift7.js\");\n\n// xor4096, by Richard Brent, is a 4096-bit xor-shift with a\n// very long period that also adds a Weyl generator. It also passes\n// BigCrush with no systematic failures.  Its long period may\n// be useful if you have many generators and need to avoid\n// collisions.\n// Period: 2^4128-2^32.\n// No systematic BigCrush failures reported.\nvar xor4096 = __webpack_require__(/*! ./lib/xor4096 */ \"./node_modules/seedrandom/lib/xor4096.js\");\n\n// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random\n// number generator derived from ChaCha, a modern stream cipher.\n// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf\n// Period: ~2^127\n// No systematic BigCrush failures reported.\nvar tychei = __webpack_require__(/*! ./lib/tychei */ \"./node_modules/seedrandom/lib/tychei.js\");\n\n// The original ARC4-based prng included in this library.\n// Period: ~2^1600\nvar sr = __webpack_require__(/*! ./seedrandom */ \"./node_modules/seedrandom/seedrandom.js\");\n\nsr.alea = alea;\nsr.xor128 = xor128;\nsr.xorwow = xorwow;\nsr.xorshift7 = xorshift7;\nsr.xor4096 = xor4096;\nsr.tychei = tychei;\n\nmodule.exports = sr;\n\n\n//# sourceURL=webpack:///./node_modules/seedrandom/index.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010\n// http://baagoe.com/en/RandomMusings/javascript/\n// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror\n// Original work is under MIT license -\n\n// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n// \n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n// \n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n\n\n(function(global, module, define) {\n\nfunction Alea(seed) {\n  var me = this, mash = Mash();\n\n  me.next = function() {\n    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32\n    me.s0 = me.s1;\n    me.s1 = me.s2;\n    return me.s2 = t - (me.c = t | 0);\n  };\n\n  // Apply the seeding algorithm from Baagoe.\n  me.c = 1;\n  me.s0 = mash(' ');\n  me.s1 = mash(' ');\n  me.s2 = mash(' ');\n  me.s0 -= mash(seed);\n  if (me.s0 < 0) { me.s0 += 1; }\n  me.s1 -= mash(seed);\n  if (me.s1 < 0) { me.s1 += 1; }\n  me.s2 -= mash(seed);\n  if (me.s2 < 0) { me.s2 += 1; }\n  mash = null;\n}\n\nfunction copy(f, t) {\n  t.c = f.c;\n  t.s0 = f.s0;\n  t.s1 = f.s1;\n  t.s2 = f.s2;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new Alea(seed),\n      state = opts && opts.state,\n      prng = xg.next;\n  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }\n  prng.double = function() {\n    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53\n  };\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nfunction Mash() {\n  var n = 0xefc8249d;\n\n  var mash = function(data) {\n    data = data.toString();\n    for (var i = 0; i < data.length; i++) {\n      n += data.charCodeAt(i);\n      var h = 0.02519603282416938 * n;\n      n = h >>> 0;\n      h -= n;\n      h *= n;\n      n = h >>> 0;\n      h -= n;\n      n += h * 0x100000000; // 2^32\n    }\n    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32\n  };\n\n  return mash;\n}\n\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.alea = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/alea.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"Tyche-i\" prng algorithm by\n// Samuel Neves and Filipe Araujo.\n// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  // Set up generator function.\n  me.next = function() {\n    var b = me.b, c = me.c, d = me.d, a = me.a;\n    b = (b << 25) ^ (b >>> 7) ^ c;\n    c = (c - d) | 0;\n    d = (d << 24) ^ (d >>> 8) ^ a;\n    a = (a - b) | 0;\n    me.b = b = (b << 20) ^ (b >>> 12) ^ c;\n    me.c = c = (c - d) | 0;\n    me.d = (d << 16) ^ (c >>> 16) ^ a;\n    return me.a = (a - b) | 0;\n  };\n\n  /* The following is non-inverted tyche, which has better internal\n   * bit diffusion, but which is about 25% slower than tyche-i in JS.\n  me.next = function() {\n    var a = me.a, b = me.b, c = me.c, d = me.d;\n    a = (me.a + me.b | 0) >>> 0;\n    d = me.d ^ a; d = d << 16 ^ d >>> 16;\n    c = me.c + d | 0;\n    b = me.b ^ c; b = b << 12 ^ d >>> 20;\n    me.a = a = a + b | 0;\n    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;\n    me.c = c = c + d | 0;\n    b = b ^ c;\n    return me.b = (b << 7 ^ b >>> 25);\n  }\n  */\n\n  me.a = 0;\n  me.b = 0;\n  me.c = 2654435769 | 0;\n  me.d = 1367130551;\n\n  if (seed === Math.floor(seed)) {\n    // Integer seed.\n    me.a = (seed / 0x100000000) | 0;\n    me.b = seed | 0;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 20; k++) {\n    me.b ^= strseed.charCodeAt(k) | 0;\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.a = f.a;\n  t.b = f.b;\n  t.c = f.c;\n  t.d = f.d;\n  return t;\n};\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.tychei = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/tychei.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xor128\" prng algorithm by\n// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  me.x = 0;\n  me.y = 0;\n  me.z = 0;\n  me.w = 0;\n\n  // Set up generator function.\n  me.next = function() {\n    var t = me.x ^ (me.x << 11);\n    me.x = me.y;\n    me.y = me.z;\n    me.z = me.w;\n    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);\n  };\n\n  if (seed === (seed | 0)) {\n    // Integer seed.\n    me.x = seed;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 64; k++) {\n    me.x ^= strseed.charCodeAt(k) | 0;\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.x = f.x;\n  t.y = f.y;\n  t.z = f.z;\n  t.w = f.w;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xor128 = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xor128.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.\n//\n// This fast non-cryptographic random number generator is designed for\n// use in Monte-Carlo algorithms. It combines a long-period xorshift\n// generator with a Weyl generator, and it passes all common batteries\n// of stasticial tests for randomness while consuming only a few nanoseconds\n// for each prng generated.  For background on the generator, see Brent's\n// paper: \"Some long-period random number generators using shifts and xors.\"\n// http://arxiv.org/pdf/1004.3115v1.pdf\n//\n// Usage:\n//\n// var xor4096 = require('xor4096');\n// random = xor4096(1);                        // Seed with int32 or string.\n// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.\n// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.\n//\n// For nonzero numeric keys, this impelementation provides a sequence\n// identical to that by Brent's xorgens 3 implementaion in C.  This\n// implementation also provides for initalizing the generator with\n// string seeds, or for saving and restoring the state of the generator.\n//\n// On Chrome, this prng benchmarks about 2.1 times slower than\n// Javascript's built-in Math.random().\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this;\n\n  // Set up generator function.\n  me.next = function() {\n    var w = me.w,\n        X = me.X, i = me.i, t, v;\n    // Update Weyl generator.\n    me.w = w = (w + 0x61c88647) | 0;\n    // Update xor generator.\n    v = X[(i + 34) & 127];\n    t = X[i = ((i + 1) & 127)];\n    v ^= v << 13;\n    t ^= t << 17;\n    v ^= v >>> 15;\n    t ^= t >>> 12;\n    // Update Xor generator array state.\n    v = X[i] = v ^ t;\n    me.i = i;\n    // Result is the combination.\n    return (v + (w ^ (w >>> 16))) | 0;\n  };\n\n  function init(me, seed) {\n    var t, v, i, j, w, X = [], limit = 128;\n    if (seed === (seed | 0)) {\n      // Numeric seeds initialize v, which is used to generates X.\n      v = seed;\n      seed = null;\n    } else {\n      // String seeds are mixed into v and X one character at a time.\n      seed = seed + '\\0';\n      v = 0;\n      limit = Math.max(limit, seed.length);\n    }\n    // Initialize circular array and weyl value.\n    for (i = 0, j = -32; j < limit; ++j) {\n      // Put the unicode characters into the array, and shuffle them.\n      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);\n      // After 32 shuffles, take v as the starting w value.\n      if (j === 0) w = v;\n      v ^= v << 10;\n      v ^= v >>> 15;\n      v ^= v << 4;\n      v ^= v >>> 13;\n      if (j >= 0) {\n        w = (w + 0x61c88647) | 0;     // Weyl.\n        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.\n        i = (0 == t) ? i + 1 : 0;     // Count zeroes.\n      }\n    }\n    // We have detected all zeroes; make the key nonzero.\n    if (i >= 128) {\n      X[(seed && seed.length || 0) & 127] = -1;\n    }\n    // Run the generator 512 times to further mix the state before using it.\n    // Factoring this as a function slows the main generator, so it is just\n    // unrolled here.  The weyl generator is not advanced while warming up.\n    i = 127;\n    for (j = 4 * 128; j > 0; --j) {\n      v = X[(i + 34) & 127];\n      t = X[i = ((i + 1) & 127)];\n      v ^= v << 13;\n      t ^= t << 17;\n      v ^= v >>> 15;\n      t ^= t >>> 12;\n      X[i] = v ^ t;\n    }\n    // Storing state as object members is faster than using closure variables.\n    me.w = w;\n    me.X = X;\n    me.i = i;\n  }\n\n  init(me, seed);\n}\n\nfunction copy(f, t) {\n  t.i = f.i;\n  t.w = f.w;\n  t.X = f.X.slice();\n  return t;\n};\n\nfunction impl(seed, opts) {\n  if (seed == null) seed = +(new Date);\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (state.X) copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xor4096 = impl;\n}\n\n})(\n  this,                                     // window object or global\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xor4096.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xorshift7\" algorithm by\n// François Panneton and Pierre L'ecuyer:\n// \"On the Xorgshift Random Number Generators\"\n// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this;\n\n  // Set up generator function.\n  me.next = function() {\n    // Update xor generator.\n    var X = me.x, i = me.i, t, v, w;\n    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);\n    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);\n    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);\n    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);\n    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);\n    X[i] = v;\n    me.i = (i + 1) & 7;\n    return v;\n  };\n\n  function init(me, seed) {\n    var j, w, X = [];\n\n    if (seed === (seed | 0)) {\n      // Seed state array using a 32-bit integer.\n      w = X[0] = seed;\n    } else {\n      // Seed state using a string.\n      seed = '' + seed;\n      for (j = 0; j < seed.length; ++j) {\n        X[j & 7] = (X[j & 7] << 15) ^\n            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);\n      }\n    }\n    // Enforce an array length of 8, not all zeroes.\n    while (X.length < 8) X.push(0);\n    for (j = 0; j < 8 && X[j] === 0; ++j);\n    if (j == 8) w = X[7] = -1; else w = X[j];\n\n    me.x = X;\n    me.i = 0;\n\n    // Discard an initial 256 values.\n    for (j = 256; j > 0; --j) {\n      me.next();\n    }\n  }\n\n  init(me, seed);\n}\n\nfunction copy(f, t) {\n  t.x = f.x.slice();\n  t.i = f.i;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  if (seed == null) seed = +(new Date);\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (state.x) copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xorshift7 = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xorshift7.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xorwow\" prng algorithm by\n// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  // Set up generator function.\n  me.next = function() {\n    var t = (me.x ^ (me.x >>> 2));\n    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;\n    return (me.d = (me.d + 362437 | 0)) +\n       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;\n  };\n\n  me.x = 0;\n  me.y = 0;\n  me.z = 0;\n  me.w = 0;\n  me.v = 0;\n\n  if (seed === (seed | 0)) {\n    // Integer seed.\n    me.x = seed;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 64; k++) {\n    me.x ^= strseed.charCodeAt(k) | 0;\n    if (k == strseed.length) {\n      me.d = me.x << 10 ^ me.x >>> 4;\n    }\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.x = f.x;\n  t.y = f.y;\n  t.z = f.z;\n  t.w = f.w;\n  t.v = f.v;\n  t.d = f.d;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xorwow = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xorwow.js?");

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*\nCopyright 2014 David Bau.\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\nCLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\nTORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n*/\n\n(function (pool, math) {\n//\n// The following constants are related to IEEE 754 limits.\n//\n\n// Detect the global object, even if operating in strict mode.\n// http://stackoverflow.com/a/14387057/265298\nvar global = (0, eval)('this'),\n    width = 256,        // each RC4 output is 0 <= x < 256\n    chunks = 6,         // at least six RC4 outputs for each double\n    digits = 52,        // there are 52 significant digits in a double\n    rngname = 'random', // rngname: name for Math.random and Math.seedrandom\n    startdenom = math.pow(width, chunks),\n    significance = math.pow(2, digits),\n    overflow = significance * 2,\n    mask = width - 1,\n    nodecrypto;         // node.js crypto module, initialized at the bottom.\n\n//\n// seedrandom()\n// This is the seedrandom function described above.\n//\nfunction seedrandom(seed, options, callback) {\n  var key = [];\n  options = (options == true) ? { entropy: true } : (options || {});\n\n  // Flatten the seed string or build one from local entropy if needed.\n  var shortseed = mixkey(flatten(\n    options.entropy ? [seed, tostring(pool)] :\n    (seed == null) ? autoseed() : seed, 3), key);\n\n  // Use the seed to initialize an ARC4 generator.\n  var arc4 = new ARC4(key);\n\n  // This function returns a random double in [0, 1) that contains\n  // randomness in every bit of the mantissa of the IEEE 754 value.\n  var prng = function() {\n    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48\n        d = startdenom,                 //   and denominator d = 2 ^ 48.\n        x = 0;                          //   and no 'extra last byte'.\n    while (n < significance) {          // Fill up all significant digits by\n      n = (n + x) * width;              //   shifting numerator and\n      d *= width;                       //   denominator and generating a\n      x = arc4.g(1);                    //   new least-significant-byte.\n    }\n    while (n >= overflow) {             // To avoid rounding up, before adding\n      n /= 2;                           //   last byte, shift everything\n      d /= 2;                           //   right using integer math until\n      x >>>= 1;                         //   we have exactly the desired bits.\n    }\n    return (n + x) / d;                 // Form the number within [0, 1).\n  };\n\n  prng.int32 = function() { return arc4.g(4) | 0; }\n  prng.quick = function() { return arc4.g(4) / 0x100000000; }\n  prng.double = prng;\n\n  // Mix the randomness into accumulated entropy.\n  mixkey(tostring(arc4.S), pool);\n\n  // Calling convention: what to return as a function of prng, seed, is_math.\n  return (options.pass || callback ||\n      function(prng, seed, is_math_call, state) {\n        if (state) {\n          // Load the arc4 state from the given state if it has an S array.\n          if (state.S) { copy(state, arc4); }\n          // Only provide the .state method if requested via options.state.\n          prng.state = function() { return copy(arc4, {}); }\n        }\n\n        // If called as a method of Math (Math.seedrandom()), mutate\n        // Math.random because that is how seedrandom.js has worked since v1.0.\n        if (is_math_call) { math[rngname] = prng; return seed; }\n\n        // Otherwise, it is a newer calling convention, so return the\n        // prng directly.\n        else return prng;\n      })(\n  prng,\n  shortseed,\n  'global' in options ? options.global : (this == math),\n  options.state);\n}\nmath['seed' + rngname] = seedrandom;\n\n//\n// ARC4\n//\n// An ARC4 implementation.  The constructor takes a key in the form of\n// an array of at most (width) integers that should be 0 <= x < (width).\n//\n// The g(count) method returns a pseudorandom integer that concatenates\n// the next (count) outputs from ARC4.  Its return value is a number x\n// that is in the range 0 <= x < (width ^ count).\n//\nfunction ARC4(key) {\n  var t, keylen = key.length,\n      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];\n\n  // The empty key [] is treated as [0].\n  if (!keylen) { key = [keylen++]; }\n\n  // Set up S using the standard key scheduling algorithm.\n  while (i < width) {\n    s[i] = i++;\n  }\n  for (i = 0; i < width; i++) {\n    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];\n    s[j] = t;\n  }\n\n  // The \"g\" method returns the next (count) outputs as one number.\n  (me.g = function(count) {\n    // Using instance members instead of closure state nearly doubles speed.\n    var t, r = 0,\n        i = me.i, j = me.j, s = me.S;\n    while (count--) {\n      t = s[i = mask & (i + 1)];\n      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];\n    }\n    me.i = i; me.j = j;\n    return r;\n    // For robust unpredictability, the function call below automatically\n    // discards an initial batch of values.  This is called RC4-drop[256].\n    // See http://google.com/search?q=rsa+fluhrer+response&btnI\n  })(width);\n}\n\n//\n// copy()\n// Copies internal state of ARC4 to or from a plain object.\n//\nfunction copy(f, t) {\n  t.i = f.i;\n  t.j = f.j;\n  t.S = f.S.slice();\n  return t;\n};\n\n//\n// flatten()\n// Converts an object tree to nested arrays of strings.\n//\nfunction flatten(obj, depth) {\n  var result = [], typ = (typeof obj), prop;\n  if (depth && typ == 'object') {\n    for (prop in obj) {\n      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}\n    }\n  }\n  return (result.length ? result : typ == 'string' ? obj : obj + '\\0');\n}\n\n//\n// mixkey()\n// Mixes a string seed into a key that is an array of integers, and\n// returns a shortened string seed that is equivalent to the result key.\n//\nfunction mixkey(seed, key) {\n  var stringseed = seed + '', smear, j = 0;\n  while (j < stringseed.length) {\n    key[mask & j] =\n      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));\n  }\n  return tostring(key);\n}\n\n//\n// autoseed()\n// Returns an object for autoseeding, using window.crypto and Node crypto\n// module if available.\n//\nfunction autoseed() {\n  try {\n    var out;\n    if (nodecrypto && (out = nodecrypto.randomBytes)) {\n      // The use of 'out' to remember randomBytes makes tight minified code.\n      out = out(width);\n    } else {\n      out = new Uint8Array(width);\n      (global.crypto || global.msCrypto).getRandomValues(out);\n    }\n    return tostring(out);\n  } catch (e) {\n    var browser = global.navigator,\n        plugins = browser && browser.plugins;\n    return [+new Date, global, plugins, global.screen, tostring(pool)];\n  }\n}\n\n//\n// tostring()\n// Converts an array of charcodes to a string\n//\nfunction tostring(a) {\n  return String.fromCharCode.apply(0, a);\n}\n\n//\n// When seedrandom.js is loaded, we immediately mix a few bits\n// from the built-in RNG into the entropy pool.  Because we do\n// not want to interfere with deterministic PRNG state later,\n// seedrandom will not call math.random on its own again after\n// initialization.\n//\nmixkey(math.random(), pool);\n\n//\n// Nodejs and AMD support: export the implementation as a module using\n// either convention.\n//\nif ( true && module.exports) {\n  module.exports = seedrandom;\n  // When in node.js, try using crypto package for autoseeding.\n  try {\n    nodecrypto = __webpack_require__(/*! crypto */ 0);\n  } catch (ex) {}\n} else if (true) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n}\n\n// End anonymous scope, and pass initial values.\n})(\n  [],     // pool: entropy pool starts empty\n  Math    // math: package containing random, pow, and seedrandom\n);\n\n\n//# sourceURL=webpack:///./node_modules/seedrandom/seedrandom.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n\tthrow new Error(\"define cannot be used indirect\");\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-define.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/events/generate.ts":
/*!********************************!*\
  !*** ./src/events/generate.ts ***!
  \********************************/
/*! exports provided: generateStoryEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateStoryEvent\", function() { return generateStoryEvent; });\nvar CommonWalkEvent = /** @class */ (function () {\n    function CommonWalkEvent(description) {\n        this.description = description;\n        this.rarity = 1;\n    }\n    return CommonWalkEvent;\n}());\nvar WALK_EVENTS = [\n    // Common passive events\n    {\n        rarity: 1,\n        events: [\n            new CommonWalkEvent('Walked 100 meters'),\n            new CommonWalkEvent('Nothing too eventful happens'),\n            new CommonWalkEvent('Spotted a fallen tree on the horizon'),\n            new CommonWalkEvent('Resting for a moment'),\n            new CommonWalkEvent(\"\\\"I think I heard a sound\\\"\"),\n            new CommonWalkEvent(\"Heading South\"),\n            new CommonWalkEvent(\"Heading West\"),\n            new CommonWalkEvent(\"Heading East\"),\n            new CommonWalkEvent(\"Heading North\"),\n            new CommonWalkEvent(\"\\\"Lost my bearings. I... think this way is north.\")\n        ],\n    },\n    // Interesting passive events\n    {\n        rarity: 20,\n        events: [\n            {\n                description: \"\\\"There's a well-worn path up ahead. Think I'll see where it goes.\\\"\",\n                rarity: 1,\n            },\n        ],\n    },\n    // Awesome passive events\n    {\n        rarity: 1000,\n        events: [],\n    },\n    // Common item finds\n    {\n        rarity: 20,\n        events: [],\n    },\n    // Common location finds\n    {\n        rarity: 1000,\n        events: [],\n    },\n    // Rare passive events\n    {\n        rarity: 1000,\n        events: [\n            {\n                description: \"\\\"I think I see smoke on the horizon\\\"\",\n                rarity: 10,\n            },\n            {\n                description: \"\\\"The birdsong is lovely\\\"\",\n                rarity: 10,\n            },\n        ],\n    },\n    // Rare item finds\n    {\n        rarity: 2000,\n        events: [],\n    },\n    // Rare location finds\n    // etc.\n    {\n        rarity: 2000,\n        events: [],\n    },\n];\nfunction generateStoryEvent(randomSrc) {\n    var rarityIndex = Math.floor(randomSrc.double() * WALK_EVENTS.length);\n    console.log('group ' + rarityIndex);\n    var eventGroup = WALK_EVENTS[rarityIndex];\n    var result = Math.floor(randomSrc.double() * eventGroup.rarity);\n    console.log('check' + result);\n    if (result !== 0 || eventGroup.events.length === 0) {\n        eventGroup = WALK_EVENTS[0];\n        console.log('group 0');\n    }\n    var eventIndex = Math.floor(randomSrc.double() * eventGroup.events.length);\n    console.log('event ' + eventIndex);\n    var eventResult = Math.floor(randomSrc.double() * eventGroup.events[eventIndex].rarity);\n    console.log('event check ' + eventResult);\n    if (eventResult !== 0) {\n        eventIndex = 0;\n    }\n    var storyEvent = eventGroup.events[eventIndex];\n    console.log(storyEvent.description);\n    return storyEvent;\n}\n\n\n//# sourceURL=webpack:///./src/events/generate.ts?");

/***/ }),

/***/ "./src/server/local.ts":
/*!*****************************!*\
  !*** ./src/server/local.ts ***!
  \*****************************/
/*! exports provided: LocalServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalServer\", function() { return LocalServer; });\n/* harmony import */ var _events_generate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/generate */ \"./src/events/generate.ts\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! seedrandom */ \"./node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LocalServer = /** @class */ (function () {\n    function LocalServer() {\n        this.seed = 'Development'; // TODO: Generate this on first play and store it\n        this.Random = seedrandom__WEBPACK_IMPORTED_MODULE_1__(this.seed);\n    }\n    LocalServer.prototype.walk = function () {\n        return Promise.resolve(Object(_events_generate__WEBPACK_IMPORTED_MODULE_0__[\"generateStoryEvent\"])(this.Random));\n    };\n    return LocalServer;\n}());\n\n\n\n//# sourceURL=webpack:///./src/server/local.ts?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ })

/******/ });