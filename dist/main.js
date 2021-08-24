/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.min.css */ "./src/bootstrap.min.css");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }


 //set a constant for the image path to allow for images to be build

var imagePath = __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$");

var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var arrow = document.getElementsByClassName('ArrowDirection');
var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var container = document.getElementById('container');
window.addEventListener("resize", WindowSize);

function WindowSize() {
  container = (_readOnlyError("container"), window.innerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }

  slidesCount = slides - slidesPerPage;

  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }

  ;
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + '%';

  if (currentPosition > 0) {
    arrow[0].classList.remove('inactive');
  }

  if (currentPosition < slidesCount) {
    arrow[1].classList.remove('inactive');
  }

  if (currentPosition >= slidesCount) {
    arrow[1].classList.add('inactive');
  }
} //run the setParam Function


setParams();

window.onload = function () {
  document.getElementById("rightClick").addEventListener("click", slideRight);
  document.getElementById("LeftClick").addEventListener("click", slideLeft);
};

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + '%';
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }

  ;

  if (currentPosition === 0) {
    arrow[0].classList.add('inactive');
  }

  if (currentPosition < slidesCount) {
    arrow[1].classList.remove('inactive');
  }
}

;

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + '%';
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }

  ;

  if (currentPosition == slidesCount) {
    arrow[1].classList.add('inactive');
  }

  if (currentPosition > 0) {
    arrow[0].classList.remove('inactive');
  }
}

;

/***/ }),

/***/ "./src/assets/images/arrow-left.png":
/*!******************************************!*\
  !*** ./src/assets/images/arrow-left.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/arrow-left.png";

/***/ }),

/***/ "./src/assets/images/arrow-right.png":
/*!*******************************************!*\
  !*** ./src/assets/images/arrow-right.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/arrow-right.png";

/***/ }),

/***/ "./src/assets/images/braden-barwich.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/braden-barwich.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/braden-barwich.jpg";

/***/ }),

/***/ "./src/assets/images/cdc-rRe.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/cdc-rRe.jpg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/cdc-rRe.jpg";

/***/ }),

/***/ "./src/assets/images/frank-mckenna.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/frank-mckenna.jpg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/frank-mckenna.jpg";

/***/ }),

/***/ "./src/assets/images/gabby-orcutt.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/gabby-orcutt.jpg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/gabby-orcutt.jpg";

/***/ }),

/***/ "./src/assets/images/himanshu.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/himanshu.jpg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/himanshu.jpg";

/***/ }),

/***/ "./src/assets/images/humphrey-muleba.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/humphrey-muleba.jpg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/humphrey-muleba.jpg";

/***/ }),

/***/ "./src/assets/images/kindred.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/kindred.jpg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/kindred.jpg";

/***/ }),

/***/ "./src/assets/images/michael.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/michael.jpg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "./assets/images/assets/images/michael.jpg";

/***/ }),

/***/ "./src/bootstrap.min.css":
/*!*******************************!*\
  !*** ./src/bootstrap.min.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow-left.png": "./src/assets/images/arrow-left.png",
	"./arrow-right.png": "./src/assets/images/arrow-right.png",
	"./braden-barwich.jpg": "./src/assets/images/braden-barwich.jpg",
	"./cdc-rRe.jpg": "./src/assets/images/cdc-rRe.jpg",
	"./frank-mckenna.jpg": "./src/assets/images/frank-mckenna.jpg",
	"./gabby-orcutt.jpg": "./src/assets/images/gabby-orcutt.jpg",
	"./himanshu.jpg": "./src/assets/images/himanshu.jpg",
	"./humphrey-muleba.jpg": "./src/assets/images/humphrey-muleba.jpg",
	"./kindred.jpg": "./src/assets/images/kindred.jpg",
	"./michael.jpg": "./src/assets/images/michael.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map