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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dot.js":
/*!********************!*\
  !*** ./src/dot.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dot =
/*#__PURE__*/
function () {
  function Dot(pos, sentinel) {
    _classCallCheck(this, Dot);

    this.dotWidth = 25;
    this.dotHeight = 25;
    this.speciesList = ['bear', 'frog', 'fox', 'gorilla', 'panda'];
    this.species = sentinel || this.randomSpecies();
    this.pos = pos;
    this.margin = 50;
    this.yStart = 150;
    this.xStart = 80;
    this.x = this.dotWidth + this.margin * this.pos[0] + this.xStart, this.y = this.dotHeight + this.margin * this.pos[1] + this.yStart;
    this.image = '';
    this.color = '';
    this.active = false;
    this.destroy = false;
  }

  _createClass(Dot, [{
    key: "randomSpecies",
    value: function randomSpecies() {
      return this.speciesList[Math.floor(Math.random() * this.speciesList.length)];
    }
  }, {
    key: "activate",
    value: function activate() {
      this.active = true;
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.active = false;
    }
  }, {
    key: "markForRemoval",
    value: function markForRemoval() {
      this.active = false;
      this.destroy = true;
    }
  }, {
    key: "speciesColor",
    value: function speciesColor(species) {
      switch (species) {
        case 'bear':
          return 'rgba(155, 104, 66, 1)';

        case 'frog':
          return 'rgba(142, 203, 30, 1)';

        case 'fox':
          return 'rgba(234, 135, 0, 1)';

        case 'gorilla':
          return 'rgba(59, 69, 77, 1)';

        case 'panda':
          return 'rgba(255, 255, 255, 1)';

        default:
          return '';
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      var img = new Image(25, 25);

      if (this.speciesList.includes(this.species)) {
        img.onload = function () {
          if (_this.active) {
            _this.drawHalo(ctx);
          } else {
            _this.clearHalo(ctx);
          }

          ctx.beginPath();
          ctx.drawImage(img, _this.x, _this.y, _this.dotWidth, _this.dotHeight);
          ctx.closePath();
          ctx.fill();
        };

        img.src = "./assets/".concat(this.species, ".png");
      }

      if (this.species === 'sentinel') {}
    }
  }, {
    key: "drawHalo",
    value: function drawHalo(ctx) {
      this.color = this.speciesColor(this.species);
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x + 12.5, this.y + 12.5, 14, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.8)';
      ctx.arc(this.x + 12.5, this.y + 12.5, 16.5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.7)';
      ctx.arc(this.x + 12.5, this.y + 12.5, 17.75, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.6)';
      ctx.arc(this.x + 12.5, this.y + 12.5, 19, 0, 2 * Math.PI);
      ctx.fill();
    }
  }, {
    key: "clearHalo",
    value: function clearHalo(ctx) {
      ctx.clearRect(this.x - 12.5, this.y - 12.5, 55, 55);
    }
  }]);

  return Dot;
}();

/* harmony default export */ __webpack_exports__["default"] = (Dot);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game(board, ctx) {
    _classCallCheck(this, Game);

    this.board = board;
    this.ctx = ctx;
    this.handleMouseMove = false;
    this.bgMusic = "";
    this.soundMuted = true;
    this.soundButtonX = 425;
    this.soundButtonY = 590;
    this.gameOver = false;
    this.gameOngoing = false;
    this.loadBackgroundMusic();
    this.musicListener();
  }

  _createClass(Game, [{
    key: "loadBackgroundMusic",
    value: function loadBackgroundMusic() {
      this.bgMusic = new Audio('./assets/sound/zoo_tycoon_theme.mp3');
      this.bgMusic.loop = true;
    }
  }, {
    key: "start",
    value: function start() {
      this.gameOver = false;
      this.draw();
      this.loadBackgroundMusic();
    }
  }, {
    key: "musicListener",
    value: function musicListener() {
      var _this = this;

      document.addEventListener("click", function (e) {
        if (_this.muteClicked(e)) {
          if (!_this.soundMuted) {
            _this.toggleSound();

            _this.bgMusic.pause();
          } else if (_this.soundMuted) {
            _this.toggleSound();

            _this.bgMusic.play();
          }
        }
      });
    }
  }, {
    key: "toggleSound",
    value: function toggleSound() {
      this.soundMuted = !this.soundMuted;
      var imageSource;

      if (this.soundMuted == true) {
        imageSource = './assets/speaker-high-volume.png';
      } else {
        imageSource = './assets/muted-speaker.png';
      }

      this.drawSoundButton(this.ctx, imageSource);
    }
  }, {
    key: "muteClicked",
    value: function muteClicked(e) {
      return Boolean(e.offsetX - this.soundButtonX <= 25 && e.offsetX - this.soundButtonX >= 0 && e.offsetY - this.soundButtonY >= 0 && e.offsetY - this.soundButtonY <= 25);
    }
  }, {
    key: "drawSoundButton",
    value: function drawSoundButton(ctx, imageSource) {
      var _this2 = this;

      var img = new Image(25, 25);

      img.onload = function () {
        ctx.clearRect(_this2.soundButtonX, _this2.soundButtonY, 25, 25);
        ctx.beginPath();
        ctx.drawImage(img, _this2.soundButtonX, _this2.soundButtonY, 25, 25);
        ctx.closePath();
        ctx.fill();
      };

      img.src = imageSource;
    } //figure out game end logic x.x
    // endGame(){
    //   this.gameOver = true;
    //   clearInterval(this.interval);
    //   this.drawGameOver();
    //   console.log("game over for you")
    //   console.log(this.gameOver)
    // }

  }, {
    key: "gameOverListener",
    value: function gameOverListener() {
      if (this.board.timer.time == 0) this.endGame();
    }
  }, {
    key: "drawGameOver",
    value: function drawGameOver() {
      this.ctx.clearRect(0, 0, 480, 640);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.drawSoundButton(this.ctx, './assets/speaker-high-volume.png');
      this.intro_outro.draw();

      if (this.gameOngoing == true) {
        this.board.draw();
      }

      this.gameOverListener(this);
    } // mouseDownHandler(e) {
    //   this.grid.handleMouseDown(e);
    //   this.grid.toggleLineDrawing('on');
    //   this.handleMouseMove = true;
    // }
    // mouseUpHandler(e) {
    //   this.grid.handleMouseUp(e);
    //   this.grid.toggleLineDrawing('off');
    //   this.handleMouseMove = false;
    // }
    // mouseMoveHandler(e) {
    //   if (this.handleMouseMove) {
    //     this.grid.connectDots(e);
    //   }
    // }

  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_board.js":
/*!***************************!*\
  !*** ./src/game_board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ "./src/score.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GameBoard =
/*#__PURE__*/
function () {
  function GameBoard(ctx, ctx2) {
    _classCallCheck(this, GameBoard);

    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.score = new _score__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, ctx2, this.score);
    this.ctx = ctx;
    this.handleMouseMove = false;
  }

  _createClass(GameBoard, [{
    key: "draw",
    value: function draw() {
      var int1 = setInterval(this.grid.draw.bind(this.grid, this.ctx), 50);
      var int2 = setInterval(this.timer.draw.bind(this.timer, this.ctx), 1000);
      var int3 = setInterval(this.score.draw.bind(this.score, this.ctx), 750); // if (this.timer.time <= 0) clearInterval(int1, int2, int3);
    }
  }, {
    key: "validRange",
    value: function validRange(e) {
      return Boolean(e.offsetX >= 100 && e.offsetX <= 385 && e.offsetY >= 170 && e.offsetY <= 455);
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler(e) {
      this.grid.handleMouseDown(e);
      this.grid.toggleLineDrawing('on');
      if (this.validRange(e)) this.handleMouseMove = true;
    }
  }, {
    key: "mouseUpHandler",
    value: function mouseUpHandler(e) {
      this.grid.handleMouseUp(e);
      this.grid.toggleLineDrawing('off');
      this.handleMouseMove = false;
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(e) {
      if (this.handleMouseMove) {
        this.grid.connectDots(e);
      }
    }
  }]);

  return GameBoard;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameBoard);

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dot */ "./src/dot.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Grid =
/*#__PURE__*/
function () {
  function Grid(ctx, ctx2, score) {
    _classCallCheck(this, Grid);

    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.rows = 6;
    this.cols = 6;
    this.dots = [];
    this.addDots();
    this.chainedDots = [];
    this.score = score;
    this.line = false;
    this.lineStartX = '';
    this.lineStartY = '';
    this.startDot = '';
  }

  _createClass(Grid, [{
    key: "addDots",
    value: function addDots() {
      for (var x = 0; x < this.cols; x++) {
        var newRow = [];

        for (var y = 0; y < this.rows; y++) {
          newRow.push(new _dot__WEBPACK_IMPORTED_MODULE_0__["default"]([x, y]));
        }

        this.dots.push(newRow);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      console.log(this.chainedDots);

      if (this.chainedDots.length == 1) {
        var soloDot = this.chainedDots.pop();
        soloDot.deactivate();
      }

      var flattened = this.dots.flat();
      var finishDot = flattened.find(function (dot) {
        return e.offsetX - dot.x <= 28 && e.offsetY - dot.y <= 28;
      });
      this.handleClear(finishDot);
    }
  }, {
    key: "handleClear",
    value: function handleClear(finishDot) {
      if (this.chainedDots.length > 1) {
        this.clearDotsFromBoard(finishDot);
        this.dropDownRemainingDots();
        this.fillGapsWithNewDots();
        console.log(this.startDot);
      }

      this.clearLine();
    } //a.k.a. bubble sort

  }, {
    key: "dropDownRemainingDots",
    value: function dropDownRemainingDots() {
      var sortable = true;

      while (sortable) {
        sortable = false;
        this.dots.forEach(function (row) {
          row.forEach(function (dot, idx) {
            if (idx < row.length - 1) {
              var upperDot = dot;
              var lowerDot = row[idx + 1];

              if (lowerDot.species === 'sentinel' && upperDot.species !== 'sentinel') {
                lowerDot.species = upperDot.species;
                upperDot.species = 'sentinel';
                sortable = true;
              }
            }
          });
        });
      }
    }
  }, {
    key: "removeAllDotsOfSpecies",
    value: function removeAllDotsOfSpecies(species) {
      var _this = this;

      this.dots.forEach(function (row) {
        row.forEach(function (dot) {
          if (dot.species === species) {
            dot.markForRemoval();
            _this.score.score += 1;
          }
        });
      });
    }
  }, {
    key: "clearDotsFromBoard",
    value: function clearDotsFromBoard(finishDot) {
      var _this2 = this;

      if (this.startDot === finishDot && this.chainedDots.length >= 4 && this.validMove(finishDot)) {
        this.removeAllDotsOfSpecies(finishDot.species);
      } else {
        this.chainedDots.forEach(function (dot) {
          dot.markForRemoval();
          _this2.score.score += 1;
        });
      }

      this.dots.forEach(function (row) {
        row.forEach(function (dot) {
          if (dot.destroy) {
            var _dot$pos = _slicedToArray(dot.pos, 2),
                x = _dot$pos[0],
                y = _dot$pos[1];

            _this2.dots[x][y] = new _dot__WEBPACK_IMPORTED_MODULE_0__["default"](dot.pos, "sentinel");
          }
        });
      });
    }
  }, {
    key: "fillGapsWithNewDots",
    value: function fillGapsWithNewDots() {
      var _this3 = this;

      this.dots.forEach(function (row, idx1) {
        row.forEach(function (dot, idx2) {
          if (dot.species === 'sentinel') {
            _this3.dots[idx1][idx2] = new _dot__WEBPACK_IMPORTED_MODULE_0__["default"]([idx1, idx2]);
          }
        });
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var flattened = this.dots.flat();
      var startDot = flattened.find(function (dot) {
        return e.offsetX - dot.x <= 28 && e.offsetY - dot.y <= 28;
      });

      if (startDot) {
        this.startDot = startDot;
        startDot.activate();
        this.chainedDots.push(startDot);
        this.draw(this.ctx);
      }

      ;
    }
  }, {
    key: "toggleLineDrawing",
    value: function toggleLineDrawing(onOrOff) {
      if (onOrOff === 'on') {
        this.line = true;
      } else {
        this.line = false;
        this.lineStartX = '';
        this.lineStartY = '';
        this.startDot = '';
        this.ctx2.strokeStyle = "";
        this.chainedDots = [];
      }
    }
  }, {
    key: "drawLine",
    value: function drawLine(e) {
      if (this.line) {
        this.clearLine();
        this.ctx2.lineWidth = 3;
        var lastEl = this.chainedDots[this.chainedDots.length - 1] || this.startDot;
        this.lineStartX = lastEl.x + 12.5;
        this.lineStartY = lastEl.y + 12.5;
        this.ctx2.beginPath();
        this.ctx2.moveTo(this.lineStartX, this.lineStartY);
        this.ctx2.lineTo(e.offsetX, e.offsetY);
        this.ctx2.stroke();
        this.ctx2.strokeStyle = lastEl.color;
      }
    }
  }, {
    key: "clearLine",
    value: function clearLine() {
      this.ctx2.clearRect(0, 0, 480, 640);
    }
  }, {
    key: "drawConnection",
    value: function drawConnection() {
      var prevEl = this.chainedDots[this.chainedDots.length - 2] || this.startDot;
      var lineStartX = prevEl.x + 12.5;
      var lineStartY = prevEl.y + 12.5;
      var lastEl = this.chainedDots[this.chainedDots.length - 1];
      var lineEndX = lastEl.x + 12.5;
      var lineEndY = lastEl.y + 12.5;
      this.ctx.strokeStyle = prevEl.color;
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.moveTo(lineStartX, lineStartY);
      this.ctx.lineTo(lineEndX, lineEndY);
      this.ctx.stroke();
    }
  }, {
    key: "connectDots",
    value: function connectDots(e) {
      this.drawLine(e);
      var flattened = this.dots.flat();
      var neighborDot = flattened.find(function (dot) {
        return e.offsetX - dot.x <= 25 && e.offsetY - dot.y <= 25;
      });

      if (neighborDot.species === this.startDot.species && !this.chainedDots.includes(neighborDot) && this.validMove(neighborDot)) {
        neighborDot.activate();
        this.chainedDots.push(neighborDot);
        this.drawConnection();
      }

      if (neighborDot === this.chainedDots[this.chainedDots.length - 2]) {
        this.deselectDot(this.chainedDots[this.chainedDots.length - 1]);
        this.deselectDot(neighborDot);

        if (this.chainedDots.length === 1) {
          this.deselectDot(this.chainedDots[0]);
        }
      }
    }
  }, {
    key: "deselectDot",
    value: function deselectDot(neighbor) {
      if (this.chainedDots.length > 1) {
        neighbor.deactivate();
        this.chainedDots.pop();
      }
    }
  }, {
    key: "validMove",
    value: function validMove(neighbor) {
      var lastSelected = this.chainedDots[this.chainedDots.length - 1];

      var _lastSelected$pos = _slicedToArray(lastSelected.pos, 2),
          row = _lastSelected$pos[0],
          col = _lastSelected$pos[1];

      var validMoves = [[row, col - 1].join(','), [row, col + 1].join(','), [row + 1, col].join(','), [row - 1, col].join(',')]; // array checking in JS is tricky, so convert to string

      if (validMoves.includes(neighbor.pos.join(','))) {
        return true;
      }

      return false;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.dots.forEach(function (row) {
        row.forEach(function (dot) {
          dot.draw(ctx);
        });
      });
    }
  }]);

  return Grid;
}();

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_board */ "./src/game_board.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("zoo-canvas");
  canvas.width = 480;
  canvas.height = 640;
  var canvas2 = document.getElementById("zoo-canvas2");
  canvas2.width = 480;
  canvas2.height = 640;
  var ctx = canvas.getContext('2d');
  var ctx2 = canvas2.getContext('2d');
  var board = new _game_board__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, ctx2);
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](board, ctx);

  function draw(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    game.start();
  }

  canvas.addEventListener("mousedown", board.mouseDownHandler.bind(board), false);
  canvas.addEventListener("mouseup", board.mouseUpHandler.bind(board), false);
  canvas.addEventListener("mousemove", board.mouseMoveHandler.bind(board), false);
  draw(ctx);
}); // Workflow: define dimensions and properties of a thing
// Use canvas to draw the thing
// Add event listeners for user input
// pressed buttons or clicked items can be initialized with booleans
// Write fn for how to handle user input
// 
// KeyUp and KeyDown are listening for key press and key release (not whether someone is pressing up and down)
// call draw() fn at bottom of class
// within draw() definition, call requestAnimationFrame(draw);
//TODO
// fix countdown timer

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Score =
/*#__PURE__*/
function () {
  function Score() {
    _classCallCheck(this, Score);

    this.score = 0;
  }

  _createClass(Score, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(295, 5, 150, 60);
      ctx.font = "30px Open Sans";
      ctx.fillStyle = 'black';
      ctx.fillText("Score " + this.score, 300, 50);
    }
  }]);

  return Score;
}();

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.start = Date.now();
    this.time = 60;
  }

  _createClass(Timer, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(5, 5, 200, 50);
      ctx.font = "30px Open Sans";
      ctx.fillStyle = 'black';
      ctx.fillText("Time " + this.time, 75, 50);
      this.countDown();
    }
  }, {
    key: "countDown",
    value: function countDown() {
      if (this.time > 0) {
        this.time = 60 - Math.floor((Date.now() - this.start) / 1000);
      }
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map