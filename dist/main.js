/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const about = document.createElement("p");
  about.textContent =
    "Founded in 1936 by Salvatore Di Matteo, the pizzeria was then managed by the “scugnizzi pizzaioli” (street urchin pizzaioli kids, usually poor, going to school only when they had to and spending a lot of time hanging out in the narrow streets of Naples) that used to work for him.  Today, it is run by Raffaele Marigliano, who 50 years ago created an amazing pizza con alici e cicinielli (anchovies and newborn very very little fish, not produced anymore). Here you cannot miss the pizza fritta, a deep-fried pizza with ricotta cheese, provola cheese, tomato sauce and sugna (lard). Heaven on earth!";

  const openingHoursContainer = document.createElement("div");

  const openingHoursHeader = document.createElement("h4");
  openingHoursHeader.textContent = "Opening Hours";

  const openingHours = document.createElement("p");
  openingHours.setAttribute("style", "white-space: pre;");
  openingHours.textContent = "Saturday - Thursday\r\n 11:00 - 23:00\r\n";
  openingHours.textContent += "Friday\r\n 13:00 - 00:00";

  openingHoursContainer.appendChild(openingHoursHeader);
  openingHoursContainer.appendChild(openingHours);

  home.appendChild(about);
  home.appendChild(openingHoursContainer);

  return home;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/pages/initial-page.js":
/*!***********************************!*\
  !*** ./src/pages/initial-page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");


function createHeader() {
  const navbar = document.createElement("nav");

  const logo = document.createElement("p");
  logo.textContent = "thab's pizzeria";
  logo.classList.add("logo");
  navbar.appendChild(logo);

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("nav-buttons");

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("nav-buttons");

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.classList.add("nav-buttons");

  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);

  return navbar;
}

function createMain() {
  const main = document.createElement("main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const footerMessage = document.createElement("p");
  footerMessage.textContent = "Copyright © 2021 thab09";
  footer.appendChild(footerMessage);

  return footer;
}

function loadPage() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/initial-page */ "./src/pages/initial-page.js");


(0,_pages_initial_page__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNNOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpREFBUTtBQUNWOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ3REeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUMsK0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaW5pdGlhbC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9XG4gICAgXCJGb3VuZGVkIGluIDE5MzYgYnkgU2FsdmF0b3JlIERpIE1hdHRlbywgdGhlIHBpenplcmlhIHdhcyB0aGVuIG1hbmFnZWQgYnkgdGhlIOKAnHNjdWduaXp6aSBwaXp6YWlvbGnigJ0gKHN0cmVldCB1cmNoaW4gcGl6emFpb2xpIGtpZHMsIHVzdWFsbHkgcG9vciwgZ29pbmcgdG8gc2Nob29sIG9ubHkgd2hlbiB0aGV5IGhhZCB0byBhbmQgc3BlbmRpbmcgYSBsb3Qgb2YgdGltZSBoYW5naW5nIG91dCBpbiB0aGUgbmFycm93IHN0cmVldHMgb2YgTmFwbGVzKSB0aGF0IHVzZWQgdG8gd29yayBmb3IgaGltLiAgVG9kYXksIGl0IGlzIHJ1biBieSBSYWZmYWVsZSBNYXJpZ2xpYW5vLCB3aG8gNTAgeWVhcnMgYWdvIGNyZWF0ZWQgYW4gYW1hemluZyBwaXp6YSBjb24gYWxpY2kgZSBjaWNpbmllbGxpIChhbmNob3ZpZXMgYW5kIG5ld2Jvcm4gdmVyeSB2ZXJ5IGxpdHRsZSBmaXNoLCBub3QgcHJvZHVjZWQgYW55bW9yZSkuIEhlcmUgeW91IGNhbm5vdCBtaXNzIHRoZSBwaXp6YSBmcml0dGEsIGEgZGVlcC1mcmllZCBwaXp6YSB3aXRoIHJpY290dGEgY2hlZXNlLCBwcm92b2xhIGNoZWVzZSwgdG9tYXRvIHNhdWNlIGFuZCBzdWduYSAobGFyZCkuIEhlYXZlbiBvbiBlYXJ0aCFcIjtcblxuICBjb25zdCBvcGVuaW5nSG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IG9wZW5pbmdIb3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgb3BlbmluZ0hvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJPcGVuaW5nIEhvdXJzXCI7XG5cbiAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG9wZW5pbmdIb3Vycy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xuICBvcGVuaW5nSG91cnMudGV4dENvbnRlbnQgPSBcIlNhdHVyZGF5IC0gVGh1cnNkYXlcXHJcXG4gMTE6MDAgLSAyMzowMFxcclxcblwiO1xuICBvcGVuaW5nSG91cnMudGV4dENvbnRlbnQgKz0gXCJGcmlkYXlcXHJcXG4gMTM6MDAgLSAwMDowMFwiO1xuXG4gIG9wZW5pbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNIZWFkZXIpO1xuICBvcGVuaW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzKTtcblxuICBob21lLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgaG9tZS5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNDb250YWluZXIpO1xuXG4gIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcInRoYWIncyBwaXp6ZXJpYVwiO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG5cbiAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICByZXR1cm4gbmF2YmFyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgZm9vdGVyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb290ZXJNZXNzYWdlLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMSB0aGFiMDlcIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck1lc3NhZ2UpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIGxvYWRIb21lKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vcGFnZXMvaW5pdGlhbC1wYWdlXCI7XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=