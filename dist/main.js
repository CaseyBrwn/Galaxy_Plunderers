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
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Barriers{\n    constructor(canvas, ctx, ProjectileHandler){\n        this.ProjectileHandler = ProjectileHandler\n        this.canvas = canvas\n        this.ctx = ctx\n        this.barriercount = 3;\n        this.barrierpadding = 120;\n        this.barriersRowCount = 5;\n        this.barriersColumnCount = 30;\n        this.barrierHeight = 2;\n        this.barrierWidth = 2;\n        this.barrierOffSetLeft = 100;\n        this.barrierOffSetTop = 400;\n        this.barriers = [];\n        for (let i = 0; i < this.barriercount; i++) {\n            this.barriers[i] = []\n            for (let j = 0; j < this.barriersColumnCount; j++) {\n                 this.barriers[i][j] = []\n                for (let c = 0; c < this.barriersRowCount; c++) {\n                   this.barriers[i][j][c] = {x: 0, y:0, status: 1}  \n                 } \n             }\n        }\n    }\n\n    collisionDetection() {\n\n        for (let i = 0; i < this.barriercount; i++) {\n            for (let j = 0; j < this.barriersColumnCount; j++) {\n                for (let c = 0; c < this.barriersRowCount; c++) {\n                    let b = this.barriers[i][j][c]\n                  \n                    if (b.status === 1) {\n                      \n                        this.ProjectileHandler.allProjectilesArray.forEach((projectile) => {\n                            let laserX = Math.floor(projectile.startX)\n                            let laserY = projectile.moveY\n                      \n                            if ((laserX === b.x || laserX === b.x +1) && laserY + 8 === (b.y - this.barrierWidth)  && (projectile.status === 1 || projectile.status === 2)) {\n                             \n                                b.status = 0\n                                projectile.status = 0\n                               \n                            }\n                            // }else if (laserX === b.x && laserY === (b.y - this.barrierWidth) && projectile.status ===1){\n                            //     b.status = 0\n                            //     projectile.status = 0\n\n                            // }\n                            // if(oldStatus!== p.status){\n                            //     debugger;\n                            // }\n                        })\n                    }\n                }\n\n            }\n\n        }\n    }\n\n\n\n    draw(){\n        for (let i = 0; i < this.barriercount; i++) {\n            for (let j = 0; j < this.barriersColumnCount; j++) {\n               for (let c = 0; c < this.barriersRowCount; c++) {\n                  if(this.barriers[i][j][c].status === 1){\n                      \n                    let barrierX = ((i* this.barrierpadding) + (j*this.barrierWidth) + this.barrierOffSetLeft)\n                    let barrierY = ((c*this.barrierHeight) + this.barrierOffSetTop)\n                    this.barriers[i][j][c].x = barrierX;\n                    this.barriers[i][j][c].y = barrierY;\n                  \n                    this.ctx.beginPath();\n                    this.ctx.rect(barrierX, barrierY, this.barrierHeight, this.barrierWidth);\n\n                    this.ctx.fillStyle = \"#0095DD\";\n                    this.ctx.fill();\n                    this.ctx.closePath();\n                  }\n                \n               }\n                \n            }\n            \n        }\n        this.collisionDetection()\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Barriers);\n\n//# sourceURL=webpack:///./lib/game/barriers.js?");

/***/ }),

/***/ "./lib/game/counters.js":
/*!******************************!*\
  !*** ./lib/game/counters.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Counters{\n    constructor(canvas, ctx, Spaceship){\n        this.Spaceship = Spaceship;\n        this.canvas = canvas;\n        this.ctx = ctx;\n    }\n\n    draw(){\n        this.ctx.fillStyle = \"rgba(0, 0, 0, 0)\";\n        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);\n        this.ctx.fill();\n        this.ctx.font = \"30px Arial\";\n        this.ctx.fillStyle = \"green\";\n        this.ctx.textAlign = \"top\";\n        this.ctx.fillText(`Lives ${this.Spaceship.status}`, this.canvas.width - 100, 25);\n        this.ctx.fillText(`Score ${this.Spaceship.score}`, 10 , 25);\n        // this.ctx.fillText(`${this.Spaceship.status}`, this.canvas.width - 50,  80);\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counters);\n\n//# sourceURL=webpack:///./lib/game/counters.js?");

/***/ }),

/***/ "./lib/game/game_canvas.js":
/*!*********************************!*\
  !*** ./lib/game/game_canvas.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    RUNNING: 1,\n    MENU: 2,\n    GAMEOVER: 3\n}\n\nclass GameCanvas {\n    constructor(canvas, ctx, ProjectileHandler, Plunderers, Barriers, SpaceShip, startscreen, Starfield, Starfieldpic, SpaceShippic, AlienPic, Counter){\n      \n        \n        this.gameLoop = this.gameLoop.bind(this);\n        this.drawStart = this.drawStart.bind(this);\n        this.drawPause = this.drawPause.bind(this);\n        this.drawGameOver = this.drawGameOver.bind(this);\n        this.gameState = this.gameStart.bind(this);\n        this.Starfieldpic = Starfieldpic;\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.Starfield = Starfield;\n        this.SpaceShippic = SpaceShippic\n        this.restartSpaceship = SpaceShip;\n        this.restartPlunderers = Plunderers;\n        this.restartBarriers = Barriers;\n        this.restartProjectileHandler = ProjectileHandler;\n        this.AlienPic = AlienPic\n        this.Starfield = new Starfield(canvas, ctx, this.Starfieldpic);\n        this.SpaceShip = new SpaceShip(canvas, ctx, this.SpaceShippic)\n        this.ProjectileHandler = new ProjectileHandler(canvas, ctx, this.SpaceShip)\n        this.Plunderers = new Plunderers(canvas, ctx, this.ProjectileHandler, this.SpaceShip, this.AlienPic)\n        this.barriers = new Barriers(canvas, ctx, this.ProjectileHandler)\n        this.Counter = new Counter(canvas, ctx, this.SpaceShip)\n        this.gameState = GAMESTATE.MENU\n        this.startscreen = startscreen;\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n    \n        document.addEventListener(\"keydown\", this.SpaceShip.keyDownHandler, false);\n        document.addEventListener(\"keyup\", this.SpaceShip.keyUpHandler, false);\n        document.addEventListener(\"keydown\", this.ProjectileHandler.keyDownHandler,  false);\n        document.addEventListener(\"keyup\", this.ProjectileHandler.keyUpHandler,  false);\n        document.addEventListener(\"keyup\", this.keyDownHandler, false) \n\n        \n\n\n        // this.draw = this.draw.bind(this);\n    }\n\n    keyDownHandler(e){\n\n        if (e.keyCode === 80) {\n            if(this.gameState !== GAMESTATE.PAUSED){\n                this.drawPause()\n            this.gameState = GAMESTATE.PAUSED\n            }else{\n              \n                this.gameState = GAMESTATE.RUNNING\n                this.gameLoop()\n            }\n        }\n        if (e.keyCode === 13){\n           if (this.gameState !== GAMESTATE.RUNNING){\n           \n               this.gameState = GAMESTATE.RUNNING\n               this.gameLoop()\n           }\n           \n        }\n\n        if (e.keyCode === 82){\n            this.Starfield = new this.Starfield(this.canvas, this.ctx, this.Starfieldpic)\n            this.SpaceShip = new this.restartSpaceship(this.canvas, this.ctx)\n            this.ProjectileHandler = new this.restartProjectileHandler(this.canvas, this.ctx, this.SpaceShip)\n            this.Plunderers = new this.restartPlunderers(this.canvas, this.ctx, this.ProjectileHandler)\n            this.barriers = new this.restartBarriers(this.canvas, this.ctx, this.ProjectileHandler)\n            document.addEventListener(\"keydown\", this.SpaceShip.keyDownHandler, false);\n            document.addEventListener(\"keyup\", this.SpaceShip.keyUpHandler, false);\n            document.addEventListener(\"keydown\", this.ProjectileHandler.keyDownHandler, false);\n            document.addEventListener(\"keyup\", this.ProjectileHandler.keyUpHandler, false);\n            document.addEventListener(\"keyup\", this.keyDownHandler, false) \n        } \n    }\n\n\n\n\n\n   gameLoop(){\n      \n        if(this.SpaceShip.status <= 0){\n            this.gameState = GAMESTATE.GAMEOVER\n            this.drawGameOver()\n        }\n            if(this.gameState === GAMESTATE.PAUSED ||\n                this.gameState === GAMESTATE.MENU ||\n                this.gameState === GAMESTATE.GAMEOVER) {\n                    return\n            }\n\n       requestAnimationFrame(this.gameLoop)\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n        this.Starfield.draw()\n        this.SpaceShip.draw()\n        this.Plunderers.draw()\n        this.barriers.draw()\n        this.Counter.draw()\n        this.ProjectileHandler.allProjectilesArray.forEach((projectile) => {\n            projectile.draw()\n            this.ProjectileHandler.collisiondetection()\n        })\n        this.ProjectileHandler.allProjectilesArray = this.ProjectileHandler.allProjectilesArray.filter(projectile => projectile.status !== 0);\n    }\n\n\n\n    drawPause() {\n        this.ctx.fillStyle = \"rgba(0, 0, 0, 0.5)\";\n        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);\n        this.ctx.fill();\n        this.ctx.font = \"40px Arial\";\n        this.ctx.fillStyle = \"white\";\n        this.ctx.textAlign = \"center\";\n        this.ctx.fillText(\"Paused\", this.canvas.width / 2, this.canvas.height / 2);\n    }\n\n    drawStart() {\n        console.log(this.startscreen)\n    \n        // this.startscreen.onload = () => {\n         \n            this.ctx.drawImage(this.startscreen, 135, -40, this.canvas.width, 500, 0, 0, this.canvas.width, this.canvas.height);\n            this.ctx.font = \"40px Arial\";\n            this.ctx.fillStyle = \"white\";\n            this.ctx.textAlign = \"center\";\n            this.ctx.fillText(\"Press Enter to begin\", this.canvas.width / 2, 200); \n        // }\n    }\n\n    gameStart() {\n        this.drawStart()\n        this.gameLoop()\n    }\n\n\n\n    drawGameOver() {\n        let img = new Image();\n        img.onload = () => {\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n            this.ctx.drawImage(img, 135, -40, this.canvas.width, 500, 0, 0, this.canvas.width, this.canvas.height);\n            this.ctx.font = \"40px Arial\";\n            this.ctx.fillStyle = \"white\";\n            this.ctx.textAlign = \"center\";\n            this.ctx.fillText(\"GAME OVER\", this.canvas.width / 2, 100);\n            this.ctx.fillText(\"Press Enter to Play Again\", this.canvas.width / 2, 200);\n\n        }\n        img.src = 'https://wallup.net/wp-content/uploads/2015/12/257313-digital_art-space-universe-spaceship-rockets-planet-Earth-Futurama-3D-vintage-artwork-satellite-bokeh-futuristic-planet_express-realistic-748x421.jpg';\n    }\n\n}\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCanvas);\n\n//# sourceURL=webpack:///./lib/game/game_canvas.js?");

/***/ }),

/***/ "./lib/game/plunderers.js":
/*!********************************!*\
  !*** ./lib/game/plunderers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile */ \"./lib/game/projectile.js\");\n\n\nclass Plunderers{\n    constructor(canvas, ctx, ProjectileHandler, SpaceShip, AlienPic){\n        this.AlienPic = AlienPic;\n        this.ProjectileHandler = ProjectileHandler;\n        this.SpaceShip = SpaceShip;\n        this.plunderHorizontalChange = .02;\n        this.plunderVerticalChange = 10;\n        this.canvas = canvas;\n        this.firerate = 20;\n        this.ctx = ctx;\n        this.plunderRowCount = 3;\n        this.plunderColumnCount = 8;\n        this.plunderWidth = 20;\n        this.plunderHeight = 20;\n        this.plunderPadding = 20;\n        this.plunderOffsetLeft = 150;\n        this.plunderOffsetTop = 30;\n        this.plunderers = []\n        for (let i = 0; i < this.plunderColumnCount; i++) {\n          this.plunderers[i] = [];\n            for (let j = 0; j < this.plunderRowCount; j++) {\n                this.plunderers[i][j] = {x: 0, y:0, status: 1}\n            } \n        }\n    }\n\n    fireweapon(){\n        \n        if(Math.floor(Math.random() * this.firerate) === 1){\n          \n            let column = Math.floor(Math.random() * this.plunderColumnCount);\n            let row = Math.floor(Math.random() * this.plunderRowCount);\n            let p = this.plunderers[column][row];\n            if(p.status === 1){\n            this.ProjectileHandler.allProjectilesArray.push(new _projectile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, this.ctx, p, \"plunderer\") )\n            }\n        }\n    }\n\n    nextLevelhandler(){\n        if (this.nextLevel === true) {\n            this.plunderers = []\n            for (let i = 0; i < this.plunderColumnCount; i++) {\n                this.plunderers[i] = [];\n                for (let j = 0; j < this.plunderRowCount; j++) {\n                    this.plunderers[i][j] = { x: 0, y: 0, status: 1 }\n                }\n            }\n\n      \n            this.plunderOffsetLeft = 150;\n            this.plunderOffsetTop = 20;\n            this.firerate -= 2;\n            if (this.plunderHorizontalChange < 0){\n             this.plunderHorizontalChange -= .02;\n            }else{\n                this.plunderHorizontalChange += .02;\n            }\n           \n\n\n\n\n        }\n\n    }\n\n    collisionDetection(){\n    \n\n      this.nextLevel = true;\n        for (let i = 0; i < this.plunderColumnCount; i++) {\n           for (let j = 0; j < this.plunderRowCount; j++) {\n               let p = this.plunderers[i][j]\n\n                if (p.status === 1 && p.y - 20 === this.canvas.height){\n                    this.SpaceShip.status = 0;\n                }\n                // if (p.status === 1 &&)\n            \n               if(p.status === 1){\n                   this.nextLevel = false\n                    this.ProjectileHandler.allProjectilesArray.forEach ((projectile) =>{\n                        let laserX = projectile.startX\n                        let laserY = projectile.moveY\n                        if (laserX > p.x && laserX < p.x + this.plunderWidth && laserY === (p.y + this.plunderHeight) && projectile.status === 1){\n                                p.status = 0\n                                projectile.status = 0 \n                                this.SpaceShip.score += 10; \n                                \n                        }\n                        // if(oldStatus!== p.status){\n                        //     debugger;\n                        // }\n                    })\n                }\n                \n           }\n            \n        }\n        \n        if(this.nextLevel === true){\n            this.nextLevelhandler()\n            this.nextLevel = false;\n        }\n        \n    }\n\n    draw (){\n        for (let i = 0; i < this.plunderColumnCount; i++) {\n            for (let j = 0; j < this.plunderRowCount; j++) {\n                // if (this.plunderers[i][j].status === 1){\n                    let plunderX = (i*(this.plunderWidth+this.plunderPadding)) + this.plunderOffsetLeft;\n                    let plunderY = (j * (this.plunderHeight + this.plunderPadding)) + this.plunderOffsetTop;\n                this.plunderers[i][j].x = plunderX;\n                    this.plunderers[i][j].y = plunderY;\n                    // this.ctx.beginPath();\n                    // this.ctx.rect(plunderX, plunderY, this.plunderHeight, this.plunderWidth);\n                if (this.plunderers[i][j].status === 1){\n                    this.ctx.drawImage(this.AlienPic, 0,40, 50, 35, plunderX, plunderY, this.plunderHeight, this.plunderWidth )\n                }else{\n                    this.ctx.beginPath();\n                    this.ctx.rect(plunderX, plunderY, this.plunderHeight, this.plunderWidth);\n                    this.ctx.fillStyle = \"rgba(0, 0, 0, 0)\"\n                    this.ctx.fill();\n                    this.ctx.closePath();\n                }\n                    \n                    // this.ctx.fill();\n                    // this.ctx.closePath();\n                    \n                    if (this.plunderOffsetLeft < 20 || this.plunderOffsetLeft > 160 ){\n                        this.plunderHorizontalChange = -this.plunderHorizontalChange\n                        this.plunderOffsetTop += this.plunderVerticalChange\n                    }\n\n                    this.plunderOffsetLeft -= this.plunderHorizontalChange \n                // \n            }\n            \n        }\n        this.collisionDetection()\n        this.fireweapon()\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plunderers); \n\n//# sourceURL=webpack:///./lib/game/plunderers.js?");

/***/ }),

/***/ "./lib/game/projectile.js":
/*!********************************!*\
  !*** ./lib/game/projectile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship */ \"./lib/game/spaceship.js\");\n\n\nclass Projectile{\n    constructor(canvas, ctx, SpaceShip, ship){\n        this.SpaceShip = SpaceShip;\n        this.canvas = canvas;\n        \n        if(ship === \"ship\"){\n        \n           this.movement = 2\n            this.startX = SpaceShip.laserX \n            this.moveY = this.canvas.height - (SpaceShip.paddleHeight * 2)\n            this.status = 1;\n            this.canFire = true\n       \n        }else if(ship === \"plunderer\"){\n            this.startX = SpaceShip.x\n            this.moveY = SpaceShip.y + 20\n            this.movement = -2\n            this.status = 2;\n        }\n        \n        this.ctx = ctx;\n        this.laserHeight = 20;\n        this.laserWidth =  2;\n        this.drawLaser = this.drawLaser.bind(this);\n        this.draw = this.draw.bind(this);\n        \n    }\n\n\n\n    drawLaser() {\n\n        this.ctx.beginPath();\n        this.ctx.rect(this.startX, this.moveY, this.laserWidth, this.laserHeight);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    handlecanshoot(){\n        this.canshoot = false\n        setInterval(()=>{\n            this.canshoot = true\n        }, 500) \n    } \n\n\n    draw() {\n       if(this.moveY > -10 && this.moveY < 510 && (this.status === 1 || this.status === 2)){\n        this.drawLaser();\n        this.moveY -= this.movement;\n        this.handlecanshoot()\n     \n       }else{\n           this.status = 0;\n       }\n\n \n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);\n\n//# sourceURL=webpack:///./lib/game/projectile.js?");

/***/ }),

/***/ "./lib/game/projectileHandler.js":
/*!***************************************!*\
  !*** ./lib/game/projectileHandler.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile */ \"./lib/game/projectile.js\");\n\n\nclass ProjectileHandler {\n    constructor(canvas, ctx, SpaceShip){\n        this.allProjectilesArray = []\n        this.canvas = canvas\n        this.ctx = ctx\n        this.SpaceShip = SpaceShip\n        this.canFire = true;\n        this.spacebarPressed = false\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.canFireHandler = this.canFireHandler.bind(this);\n        this.collisiondetection = this.collisiondetection.bind(this);\n        // this.keyUpHandler = this.keyUpHandler.bind(this);\n        // this.allProjectiles = this.allProjectiles.bind(this);\n\n    \n    }\n    canFireHandler(){\n        this.canFire = false;\n        setTimeout(()=>{\n            this.canFire = true}, 500\n        )\n    }\n\n    collisiondetection(){\n        this.allProjectilesArray.forEach((projectile) => {\n            let laserX = Math.floor(projectile.startX)\n            let laserY = projectile.moveY\n           \n            if (laserX > this.SpaceShip.paddleX && laserX < this.SpaceShip.paddleX + 40  && (laserY + 10)  === this.canvas.height - this.SpaceShip.paddleHeight && projectile.status > 0) {\n                this.SpaceShip.status -= 1\n                projectile.status = 0\n            }\n           \n          \n        })\n\n    }\n\n\n\n\n    keyDownHandler(e) {\n    \n        if (e.keyCode === 32 && this.canFire === true && this.SpaceShip.status > 0) {\n            this.allProjectilesArray.push(new _projectile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, this.ctx, this.SpaceShip, \"ship\"))\n            this.canFireHandler()\n        }\n    }\n\n    \n  \n \n\n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectileHandler);\n\n//# sourceURL=webpack:///./lib/game/projectileHandler.js?");

/***/ }),

/***/ "./lib/game/spaceship.js":
/*!*******************************!*\
  !*** ./lib/game/spaceship.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass SpaceShip {\n    constructor(canvas, ctx, SpaceShippic){\n        this.SpaceShippic = SpaceShippic;\n        this.score = 0;\n        this.shipspeed = 2;\n        this.canvas = canvas\n        this.ctx = ctx\n        this.paddleHeight = 40;\n        this.paddleWidth = 40;\n        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;\n        this.laserX = (this.paddleX + this.paddleWidth/2)\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n        this.drawPaddle = this.drawPaddle.bind(this);\n        this.status = 3;\n        this.previousStatus = 3;\n        \n    }\n\n    keyDownHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = true;\n        }\n    }\n\n    keyUpHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = false;\n        }\n    }\n\n    collisionDetection(){\n\n    }\n\n    drawPaddle() {\n        \n        // this.ctx.beginPath();\n        this.ctx.drawImage(this.SpaceShippic, 25, 1, 23, 23, this.paddleX, this.canvas.height - this.paddleHeight, this.paddleHeight, this.paddleWidth);\n        // this.ctx.fillStyle = \"#0095DD\";\n        // this.ctx.fill();\n        // this.ctx.closePath();\n    }\n\n    draw() {\n\n        if(this.previousStatus != this.status && this.status > 0){\n\n            \n            this.paddleX = (this.canvas.width - this.paddleWidth) / 2;\n            this.laserX = (this.paddleX + this.paddleWidth / 2)\n            this.previousStatus = this.status\n        }else if(this.status > 0){\n            this.drawPaddle();\n            if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {\n                this.paddleX += this.shipspeed;\n                this.laserX += this.shipspeed;\n            }\n            else if (this.leftPressed && this.paddleX > 0) {\n                this.paddleX -= this.shipspeed;\n                this.laserX -= this.shipspeed;\n            }\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceShip);\n\n\n\n//# sourceURL=webpack:///./lib/game/spaceship.js?");

/***/ }),

/***/ "./lib/game/starfield.js":
/*!*******************************!*\
  !*** ./lib/game/starfield.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass StarField{\n    constructor(canvas, ctx, StarFieldpic){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.y = 0;\n        this.StarFieldpic = StarFieldpic\n      \n        this.draw = this.draw.bind(this);\n    }\n\n\n\n    \n    draw() {\n\n            this.ctx.drawImage(this.StarFieldpic, 0, this.y, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height);\n            \n     \n    \n        \n        if(this.y === 1600){\n            this.y = 0;\n        }else{\n            this.y += .1;\n        }\n\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarField);\n\n//# sourceURL=webpack:///./lib/game/starfield.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game_canvas */ \"./lib/game/game_canvas.js\");\n/* harmony import */ var _game_projectileHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/projectileHandler */ \"./lib/game/projectileHandler.js\");\n/* harmony import */ var _game_plunderers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/plunderers */ \"./lib/game/plunderers.js\");\n/* harmony import */ var _game_barriers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/barriers */ \"./lib/game/barriers.js\");\n/* harmony import */ var _game_spaceship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/spaceship */ \"./lib/game/spaceship.js\");\n/* harmony import */ var _game_starfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/starfield */ \"./lib/game/starfield.js\");\n/* harmony import */ var _game_counters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/counters */ \"./lib/game/counters.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.querySelector('canvas');\n    const ctx = canvas.getContext('2d');\n    const startscreen = new Image();\n    startscreen.src = './assets/images/planetexpress.jpg'\n    const Starfieldpic = new Image();\n    Starfieldpic.src = './assets/images/starfield2.jpg'\n    const SpaceShippic = new Image ();\n    SpaceShippic.src = './assets/images/Hunter1.png'\n    const alienspic = new Image();\n    alienspic.src = './assets/images/alien.png'\n    const game = new _game_game_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, _game_projectileHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _game_plunderers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _game_barriers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _game_spaceship__WEBPACK_IMPORTED_MODULE_4__[\"default\"], startscreen, _game_starfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Starfieldpic, SpaceShippic, alienspic, _game_counters__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n    document.addEventListener(\"keydown\", startscreen.addEventListener(\"load\", () => { Starfieldpic.addEventListener(\"load\", () => { SpaceShippic.addEventListener(\"load\", () => { alienspic.addEventListener(\"load\", game.gameStart(), false) }, false) }, false) }, false), false);\n\n\n\n\n\n    // const animation = () => {\n    //     game.draw(10)\n    //     window.requestAnimationFrame(animation)\n    // }\n\n\n    startscreen.addEventListener(\"load\", ()=> {Starfieldpic.addEventListener(\"load\", () => {SpaceShippic.addEventListener(\"load\", ()=> {alienspic.addEventListener(\"load\", game.gameStart(), false)}, false)} ,false)}, false)\n    \n\n\n\n\n    // animation()\n\n      \n})\n\n\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ })

/******/ });