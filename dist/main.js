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

/***/ "./lib/game/barriers.js":
/*!******************************!*\
  !*** ./lib/game/barriers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Barriers{\n    constructor(canvas, ctx, ProjectileHandler){\n        this.ProjectileHandler = ProjectileHandler\n        this.canvas = canvas\n        this.ctx = ctx\n        this.barriercount = 3;\n        this.barrierpadding = 120;\n        this.barriersRowCount = 5;\n        this.barriersColumnCount = 30;\n        this.barrierHeight = 2;\n        this.barrierWidth = 2;\n        this.barrierOffSetLeft = 100;\n        this.barrierOffSetTop = 400;\n        this.barriers = [];\n        for (let i = 0; i < this.barriercount; i++) {\n            this.barriers[i] = []\n            for (let j = 0; j < this.barriersColumnCount; j++) {\n                 this.barriers[i][j] = []\n                for (let c = 0; c < this.barriersRowCount; c++) {\n                   this.barriers[i][j][c] = {x: 0, y:0, status: 1}  \n                 } \n             }\n        }\n    }\n\n    collisionDetection() {\n\n        for (let i = 0; i < this.barriercount; i++) {\n            for (let j = 0; j < this.barriersColumnCount; j++) {\n                for (let c = 0; c < this.barriersRowCount; c++) {\n                    let b = this.barriers[i][j][c]\n                  \n                    if (b.status === 1) {\n                      \n                        this.ProjectileHandler.allProjectilesArray.forEach((projectile) => {\n                            let laserX = Math.floor(projectile.startX)\n                            let laserY = projectile.moveY\n                      \n                            if ((laserX === b.x || laserX === b.x +1) && laserY === (b.y + this.barrierWidth)  && (projectile.status === 1 || projectile.status === 2)) {\n                             \n                                b.status = 0\n                                projectile.status = 0\n                               \n                            }\n                            // }else if (laserX === b.x && laserY === (b.y - this.barrierWidth) && projectile.status ===1){\n                            //     b.status = 0\n                            //     projectile.status = 0\n\n                            // }\n                            // if(oldStatus!== p.status){\n                            //     debugger;\n                            // }\n                        })\n                    }\n                }\n\n            }\n\n        }\n    }\n\n\n\n    draw(){\n        for (let i = 0; i < this.barriercount; i++) {\n            for (let j = 0; j < this.barriersColumnCount; j++) {\n               for (let c = 0; c < this.barriersRowCount; c++) {\n                  if(this.barriers[i][j][c].status === 1){\n                      \n                    let barrierX = ((i* this.barrierpadding) + (j*this.barrierWidth) + this.barrierOffSetLeft)\n                    let barrierY = ((c*this.barrierHeight) + this.barrierOffSetTop)\n                    this.barriers[i][j][c].x = barrierX;\n                    this.barriers[i][j][c].y = barrierY;\n                  \n                    this.ctx.beginPath();\n                    this.ctx.rect(barrierX, barrierY, this.barrierHeight, this.barrierWidth);\n\n                    this.ctx.fillStyle = \"#0095DD\";\n                    this.ctx.fill();\n                    this.ctx.closePath();\n                  }\n                \n               }\n                \n            }\n            \n        }\n        this.collisionDetection()\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Barriers);\n\n//# sourceURL=webpack:///./lib/game/barriers.js?");

/***/ }),

/***/ "./lib/game/game_canvas.js":
/*!*********************************!*\
  !*** ./lib/game/game_canvas.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship */ \"./lib/game/spaceship.js\");\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectile */ \"./lib/game/projectile.js\");\n/* harmony import */ var _projectileHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectileHandler */ \"./lib/game/projectileHandler.js\");\n/* harmony import */ var _plunderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plunderers */ \"./lib/game/plunderers.js\");\n/* harmony import */ var _barriers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./barriers */ \"./lib/game/barriers.js\");\n\n\n\n\n\n\n\n\nclass GameCanvas {\n    constructor(canvas, ctx){\n       \n        this.SpaceShip = new _spaceship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx)\n        this.ProjectileHandler = new _projectileHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas, ctx, this.SpaceShip)\n        this.Plunderers = new _plunderers__WEBPACK_IMPORTED_MODULE_3__[\"default\"](canvas, ctx, this.ProjectileHandler)\n        this.barriers = new _barriers__WEBPACK_IMPORTED_MODULE_4__[\"default\"](canvas, ctx, this.ProjectileHandler)\n        this.canvas = canvas;\n        this.ctx = ctx ;\n        document.addEventListener(\"keydown\", this.SpaceShip.keyDownHandler, false);\n        document.addEventListener(\"keyup\", this.SpaceShip.keyUpHandler, false);\n        document.addEventListener(\"keydown\", this.ProjectileHandler.keyDownHandler,  false);\n        document.addEventListener(\"keyup\", this.ProjectileHandler.keyUpHandler,  false);\n        this.draw = this.draw.bind(this);\n    }\n\n\n   \n\n    draw(){\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n    this.SpaceShip.draw()\n    this.Plunderers.draw()\n    this.barriers.draw()\n    this.ProjectileHandler.allProjectilesArray.forEach((projectile) => {\n        projectile.draw()\n    })\n   \n\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCanvas);\n\n//# sourceURL=webpack:///./lib/game/game_canvas.js?");

/***/ }),

/***/ "./lib/game/plunderers.js":
/*!********************************!*\
  !*** ./lib/game/plunderers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile */ \"./lib/game/projectile.js\");\n\n\nclass Plunderers{\n    constructor(canvas, ctx, ProjectileHandler){\n        this.ProjectileHandler = ProjectileHandler;\n      \n        this.plunderHorizontalChange = .1;\n        this.plunderVerticalChange = 10;\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.plunderRowCount = 3;\n        this.plunderColumnCount = 8;\n        this.plunderWidth = 20;\n        this.plunderHeight = 20;\n        this.plunderPadding = 20;\n        this.plunderOffsetLeft = 150;\n        this.plunderOffsetTop = 20;\n        this.plunderers = []\n        for (let i = 0; i < this.plunderColumnCount; i++) {\n          this.plunderers[i] = [];\n            for (let j = 0; j < this.plunderRowCount; j++) {\n                this.plunderers[i][j] = {x: 0, y:0, status: 1}\n            } \n        }\n    }\n\n    fireweapon(){\n        \n        if(Math.floor(Math.random() * 10) === 5){\n          \n            let column = Math.floor(Math.random() * this.plunderColumnCount);\n            let row = Math.floor(Math.random() * this.plunderRowCount);\n            let p = this.plunderers[column][row];\n            if(p.status === 1){\n            this.ProjectileHandler.allProjectilesArray.push(new _projectile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, this.ctx, p, \"plunderer\") )\n            }\n        }\n    }\n\n    collisionDetection(){\n      \n        for (let i = 0; i < this.plunderColumnCount; i++) {\n           for (let j = 0; j < this.plunderRowCount; j++) {\n               let p = this.plunderers[i][j]\n               if(p.status === 1){\n                    this.ProjectileHandler.allProjectilesArray.forEach ((projectile) =>{\n                        let laserX = projectile.startX\n                        let laserY = projectile.moveY\n                        if (laserX > p.x && laserX < p.x + this.plunderWidth && laserY === (p.y + this.plunderHeight) && projectile.status === 1){\n                                p.status = 0\n                                projectile.status = 0   \n                        }\n                        // if(oldStatus!== p.status){\n                        //     debugger;\n                        // }\n                    })\n                }\n                \n           }\n            \n        }\n    }\n\n    draw (){\n        for (let i = 0; i < this.plunderColumnCount; i++) {\n            for (let j = 0; j < this.plunderRowCount; j++) {\n                if(this.plunderers[i][j].status ===  1){\n                    let plunderX = (i*(this.plunderWidth+this.plunderPadding)) + this.plunderOffsetLeft;\n                    let plunderY = (j * (this.plunderHeight + this.plunderPadding)) + this.plunderOffsetTop;\n                this.plunderers[i][j].x = plunderX;\n                    this.plunderers[i][j].y = plunderY;\n                    this.ctx.beginPath();\n                    this.ctx.rect(plunderX, plunderY, this.plunderHeight, this.plunderWidth);\n                    this.ctx.fillStyle = \"#0095DD\";\n                    this.ctx.fill();\n                    this.ctx.closePath();\n                    \n                    if (this.plunderOffsetLeft < 20 || this.plunderOffsetLeft > 160 ){\n                        this.plunderHorizontalChange = -this.plunderHorizontalChange\n                        this.plunderOffsetTop += this.plunderVerticalChange\n                    }\n\n                    this.plunderOffsetLeft -= this.plunderHorizontalChange \n                }\n            }\n            \n        }\n        this.collisionDetection()\n        this.fireweapon()\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plunderers); \n\n//# sourceURL=webpack:///./lib/game/plunderers.js?");

/***/ }),

/***/ "./lib/game/projectile.js":
/*!********************************!*\
  !*** ./lib/game/projectile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship */ \"./lib/game/spaceship.js\");\n\n\nclass Projectile{\n    constructor(canvas, ctx, SpaceShip, ship){\n        this.SpaceShip = SpaceShip;\n        this.canvas = canvas;\n        \n        if(ship === \"ship\"){\n           this.movement = 2\n            this.startX = SpaceShip.laserX \n            this.moveY = this.canvas.height + SpaceShip.paddleHeight\n            this.status = 1;\n        }else if(ship === \"plunderer\"){\n            this.startX = SpaceShip.x\n            this.moveY = SpaceShip.y + 20\n            this.movement = -2\n            this.status = 2;\n        }\n        \n        this.ctx = ctx;\n        this.spacebarPressed = false;\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n        \n           \n        this.laserHeight = 20;\n        this.laserWidth =  2;\n        this.drawLaser = this.drawLaser.bind(this);\n        this.draw = this.draw.bind(this);\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n        this.canshoot = true;\n    }\n\n    keyDownHandler(e) {\n        if (e.key === 32) {\n            this.spacebarPressed = true;\n        }\n    }\n \n    keyUpHandler(e) {\n        if (e.key === 32) {\n            this.spacebarPressed = false;\n        }\n    }\n\n\n    drawLaser() {\n\n        this.ctx.beginPath();\n        this.ctx.rect(this.startX, this.moveY, this.laserWidth, this.laserHeight);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    handlecanshoot(){\n        this.canshoot = false\n        setInterval(()=>{\n            this.canshoot = true\n        }, 500) \n    } \n\n\n    draw() {\n       if(this.moveY > -10 && this.moveY < 500 && (this.status === 1 || this.status === 2)){\n        this.drawLaser();\n        this.moveY -= this.movement;\n        this.handlecanshoot()\n       }else{\n           this.status = 0;\n       }\n\n \n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);\n\n//# sourceURL=webpack:///./lib/game/projectile.js?");

/***/ }),

/***/ "./lib/game/projectileHandler.js":
/*!***************************************!*\
  !*** ./lib/game/projectileHandler.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile */ \"./lib/game/projectile.js\");\n\n\nclass ProjectileHandler {\n    constructor(canvas, ctx, SpaceShip){\n        this.allProjectilesArray = []\n        this.canvas = canvas\n        this.ctx = ctx\n        this.SpaceShip = SpaceShip\n        this.spacebarPressed = false\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        // this.keyUpHandler = this.keyUpHandler.bind(this);\n        // this.allProjectiles = this.allProjectiles.bind(this);\n    \n    }\n\n\n    keyDownHandler(e) {\n    \n        if (e.keyCode === 32) {\n      \n            this.allProjectilesArray.push(new _projectile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, this.ctx, this.SpaceShip, \"ship\"))\n            this.allProjectilesArray = this.allProjectilesArray.filter(projectile =>  projectile.status === 1);\n          \n        }\n    }\n\n    \n  \n \n\n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectileHandler);\n\n//# sourceURL=webpack:///./lib/game/projectileHandler.js?");

/***/ }),

/***/ "./lib/game/spaceship.js":
/*!*******************************!*\
  !*** ./lib/game/spaceship.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass SpaceShip {\n    constructor(canvas, ctx){\n        this.shipspeed = 2;\n        this.canvas = canvas\n        this.ctx = ctx\n        this.paddleHeight = 20;\n        this.paddleWidth = 20;\n        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;\n        this.laserX = (this.paddleX + this.paddleWidth/2)\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n        this.drawPaddle = this.drawPaddle.bind(this);\n        \n    }\n\n    keyDownHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = true;\n        }\n    }\n\n    keyUpHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = false;\n        }\n    }\n\n    drawPaddle() {\n        this.ctx.beginPath();\n        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    draw() {\n     \n        this.drawPaddle();\n        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {\n            this.paddleX += this.shipspeed;\n            this.laserX += this.shipspeed;\n        }\n        else if (this.leftPressed && this.paddleX > 0) {\n            this.paddleX -= this.shipspeed;\n            this.laserX -= this.shipspeed;\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceShip);\n\n\n\n//# sourceURL=webpack:///./lib/game/spaceship.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game_canvas */ \"./lib/game/game_canvas.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.querySelector('canvas');\n    const ctx = canvas.getContext('2d');\n    const game = new _game_game_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx)\n\n\n    const animation = () =>{\n    game.draw(10)\n    window.requestAnimationFrame(animation)\n    }\n    animation()\n\n})\n\n\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ })

/******/ });