(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["residentServer"] = factory();
	else
		root["residentServer"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/events/generate.ts":
/*!********************************!*\
  !*** ./src/events/generate.ts ***!
  \********************************/
/*! exports provided: generateStoryEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateStoryEvent\", function() { return generateStoryEvent; });\nvar CommonWalkEvent = /** @class */ (function () {\n    function CommonWalkEvent(description) {\n        this.description = description;\n        this.rarity = 1;\n    }\n    return CommonWalkEvent;\n}());\nvar WALK_EVENTS = [\n    // Common passive events\n    {\n        rarity: 1,\n        events: [\n            new CommonWalkEvent('Walked 100 meters'),\n            new CommonWalkEvent('Nothing too eventful happens'),\n            new CommonWalkEvent('Spotted a fallen tree on the horizon'),\n            new CommonWalkEvent('Resting for a moment'),\n            new CommonWalkEvent(\"\\\"I think I heard a sound\\\"\"),\n            new CommonWalkEvent(\"Heading South\"),\n            new CommonWalkEvent(\"Heading West\"),\n            new CommonWalkEvent(\"Heading East\"),\n            new CommonWalkEvent(\"Heading North\"),\n            new CommonWalkEvent(\"\\\"Lost my bearings. I... think this way is north.\")\n        ],\n    },\n    // Interesting passive events\n    {\n        rarity: 20,\n        events: [\n            {\n                description: \"\\\"There's a well-worn path up ahead. Think I'll see where it goes.\\\"\",\n                rarity: 1,\n            },\n        ],\n    },\n    // Awesome passive events\n    {\n        rarity: 1000,\n        events: [],\n    },\n    // Common item finds\n    {\n        rarity: 20,\n        events: [],\n    },\n    // Common location finds\n    {\n        rarity: 1000,\n        events: [],\n    },\n    // Rare passive events\n    {\n        rarity: 1000,\n        events: [\n            {\n                description: \"\\\"I think I see smoke on the horizon\\\"\",\n                rarity: 10,\n            },\n            {\n                description: \"\\\"The birdsong is lovely\\\"\",\n                rarity: 10,\n            },\n        ],\n    },\n    // Rare item finds\n    {\n        rarity: 2000,\n        events: [],\n    },\n    // Rare location finds\n    // etc.\n    {\n        rarity: 2000,\n        events: [],\n    },\n];\nfunction generateStoryEvent(randomSrc) {\n    var rarityIndex = Math.floor(randomSrc.double() * WALK_EVENTS.length);\n    console.log('group ' + rarityIndex);\n    var eventGroup = WALK_EVENTS[rarityIndex];\n    var result = Math.floor(randomSrc.double() * eventGroup.rarity);\n    console.log('check' + result);\n    if (result !== 0 || eventGroup.events.length === 0) {\n        eventGroup = WALK_EVENTS[0];\n        console.log('group 0');\n    }\n    var eventIndex = Math.floor(randomSrc.double() * eventGroup.events.length);\n    console.log('event ' + eventIndex);\n    var eventResult = Math.floor(randomSrc.double() * eventGroup.events[eventIndex].rarity);\n    console.log('event check ' + eventResult);\n    if (eventResult !== 0) {\n        eventIndex = 0;\n    }\n    var storyEvent = eventGroup.events[eventIndex];\n    console.log(storyEvent.description);\n    return storyEvent;\n}\n\n\n//# sourceURL=webpack://residentServer/./src/events/generate.ts?");

/***/ }),

/***/ "./src/server/local.ts":
/*!*****************************!*\
  !*** ./src/server/local.ts ***!
  \*****************************/
/*! exports provided: LocalServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalServer\", function() { return LocalServer; });\n/* harmony import */ var _events_generate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/generate */ \"./src/events/generate.ts\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! seedrandom */ \"seedrandom\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LocalServer = /** @class */ (function () {\n    function LocalServer() {\n        this.seed = 'Development'; // TODO: Generate this on first play and store it\n        this.Random = seedrandom__WEBPACK_IMPORTED_MODULE_1__(this.seed);\n    }\n    LocalServer.prototype.walk = function () {\n        return Promise.resolve(Object(_events_generate__WEBPACK_IMPORTED_MODULE_0__[\"generateStoryEvent\"])(this.Random));\n    };\n    return LocalServer;\n}());\n\n\n\n//# sourceURL=webpack://residentServer/./src/server/local.ts?");

/***/ }),

/***/ "seedrandom":
/*!*****************************!*\
  !*** external "seedrandom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"seedrandom\");\n\n//# sourceURL=webpack://residentServer/external_%22seedrandom%22?");

/***/ })

/******/ });
});