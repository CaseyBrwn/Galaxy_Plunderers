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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/game/game_canvas.js":
/*!*********************************!*\
  !*** ./lib/game/game_canvas.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship */ \"./lib/game/spaceship.js\");\n\n\n\nclass GameCanvas {\n    constructor(canvas, ctx){\n    this.canvas = canvas;\n    this.ctx = ctx;\n    }\n\n    \n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCanvas);\n\n//# sourceURL=webpack:///./lib/game/game_canvas.js?");

/***/ }),

/***/ "./lib/game/spaceship.js":
/*!*******************************!*\
  !*** ./lib/game/spaceship.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass SpaceShip {\n    constructor(){\n        this.canvas = document.getElementById(\"myCanvas\");\n        this.ctx = canvas.getContext(\"2d\");\n        this.x = canvas.width / 2;\n        this.y = canvas.height - 30;\n        this.dx = 2;\n        this.dy = -2;\n        this.paddleHeight = 10;\n        this.paddleWidth = 75;\n        this.paddleX = (canvas.width - paddleWidth) / 2;\n        this.rightPressed = false;\n        this.leftPressed = false;\n        document.addEventListener(\"keydown\", keyDownHandler, false);\n        document.addEventListener(\"keyup\", keyUpHandler, false);\n        this.keyDownHandler = this.keyDownHandler.bind(this)\n        this.keyUpHandler = this.keyUpHandler.bind(this)\n    }\n\n    keyDownHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            leftPressed = true;\n        }\n    }\n\n    keyUpHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            leftPressed = false;\n        }\n    }\n\n    drawPaddle() {\n        ctx.beginPath();\n        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);\n        ctx.fillStyle = \"#0095DD\";\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        drawPaddle();\n        if (rightPressed && paddleX < canvas.width - paddleWidth) {\n            paddleX += 7;\n        }\n        else if (leftPressed && paddleX > 0) {\n            paddleX -= 7;\n        }\n    }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceShip);\n\n\n\n//# sourceURL=webpack:///./lib/game/spaceship.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game_canvas */ \"./lib/game/game_canvas.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.querySelector('canvas');\n    const ctx = canvas.getContext('2d');\n   \n    const game = new _game_game_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx)\n\n    game.draw(10)\n    \n\n})\n\n\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ })

/******/ });