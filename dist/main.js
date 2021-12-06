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
  openingHours.textContent = "Saturday - Thursday\r\n11:00 - 23:00\r\n";
  openingHours.textContent += "Friday\r\n13:00 - 00:00";

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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/pages/menu.js");



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

  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  //BEST SELLER
  const bestSeller = document.createElement("div");

  const bestSellerHeader = document.createElement("h4");
  bestSellerHeader.textContent = "Best Sellers";
  bestSeller.appendChild(bestSellerHeader);

  bestSeller.appendChild(
    createPizza(
      "Neapolitan Pizza",
      "Neapolitan pizza is a type of pizza that originated in Naples, Italy. This style of pizza is prepared with simple and fresh ingredients: a basic dough, raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil.",
      13.99
    )
  );
  bestSeller.appendChild(
    createPizza(
      "Sicilian Style Pizza",
      "Sicilian style is a type of pizza that originated in Palermo, Italy – on the Italian island of Sicily. It is one of the most popular styles of pizza. With Sicilian style pizza, diners enjoy a rectangular pizza with a thick crust.",
      16.99
    )
  );
  bestSeller.appendChild(
    createPizza(
      "Chicago Style Pizza",
      "Chicago-style pizza is a thick pizza baked in a pan and layered with cheese, fillings like meat and vegetables, and sauce–in that order. The crust is usually two to three inches tall and gets slightly fried due to the oil in the pan.",
      19.99
    )
  );

  //CLASSICS
  const classics = document.createElement("div");
  const classicsHeader = document.createElement("h4");
  classicsHeader.textContent = "Classics";
  classics.appendChild(classicsHeader);

  classics.appendChild(
    createPizza(
      "Pepperoni Pizza",
      "Pepperoni Pizza has everything you want—a great crust, gooey cheese, and tons of pepperoni.",
      9.99
    )
  );
  classics.appendChild(
    createPizza(
      "Supreme Pizza",
      "A supreme pizza has pepperoni and sausage, and potentially a few other meat variations",
      11.99
    )
  );
  classics.appendChild(
    createPizza(
      "Quattro Formaggi Pizza",
      "Quattro formaggi is a variety of Italian pizza topped with a combination of four kinds of cheese.",
      11.99
    )
  );
  classics.appendChild(
    createPizza(
      "Hawaiian Pizza",
      "Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple.",
      6.99
    )
  );

  menu.appendChild(bestSeller);
  menu.appendChild(classics);

  return menu;
}

function createPizza(name, description, price) {
  const pizza = document.createElement("div");
  pizza.classList.add("pizza");

  const pizzaName = document.createElement("p");
  pizzaName.classList.add("pizza-name");

  const pizzaDescription = document.createElement("p");
  pizzaDescription.classList.add("pizza-description");

  const pizzaPrice = document.createElement("p");
  pizzaPrice.classList.add("pizza-price");

  pizzaName.textContent = name;
  pizzaDescription.textContent = description;
  pizzaPrice.textContent = "$" + price;

  pizza.appendChild(pizzaName);
  pizza.appendChild(pizzaDescription);
  pizza.appendChild(pizzaPrice);

  return pizza;
}

function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


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
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_initial_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/initial-page */ "./src/pages/initial-page.js");




(0,_pages_initial_page__WEBPACK_IMPORTED_MODULE_2__["default"])();

const navButtons = Array.from(document.getElementsByClassName("nav-buttons"));
console.log(navButtons);

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Home":
        (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        break;
      case "Menu":
        (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        break;
      default:
        console.log("switch error");
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDTTtBQUNHOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxvREFBUTtBQUNWOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkR4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUN4R3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNBO0FBQ1E7O0FBRTVDLCtEQUFROztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFRO0FBQ2hCO0FBQ0E7QUFDQSxRQUFRLHVEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaW5pdGlhbC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9XG4gICAgXCJGb3VuZGVkIGluIDE5MzYgYnkgU2FsdmF0b3JlIERpIE1hdHRlbywgdGhlIHBpenplcmlhIHdhcyB0aGVuIG1hbmFnZWQgYnkgdGhlIOKAnHNjdWduaXp6aSBwaXp6YWlvbGnigJ0gKHN0cmVldCB1cmNoaW4gcGl6emFpb2xpIGtpZHMsIHVzdWFsbHkgcG9vciwgZ29pbmcgdG8gc2Nob29sIG9ubHkgd2hlbiB0aGV5IGhhZCB0byBhbmQgc3BlbmRpbmcgYSBsb3Qgb2YgdGltZSBoYW5naW5nIG91dCBpbiB0aGUgbmFycm93IHN0cmVldHMgb2YgTmFwbGVzKSB0aGF0IHVzZWQgdG8gd29yayBmb3IgaGltLiAgVG9kYXksIGl0IGlzIHJ1biBieSBSYWZmYWVsZSBNYXJpZ2xpYW5vLCB3aG8gNTAgeWVhcnMgYWdvIGNyZWF0ZWQgYW4gYW1hemluZyBwaXp6YSBjb24gYWxpY2kgZSBjaWNpbmllbGxpIChhbmNob3ZpZXMgYW5kIG5ld2Jvcm4gdmVyeSB2ZXJ5IGxpdHRsZSBmaXNoLCBub3QgcHJvZHVjZWQgYW55bW9yZSkuIEhlcmUgeW91IGNhbm5vdCBtaXNzIHRoZSBwaXp6YSBmcml0dGEsIGEgZGVlcC1mcmllZCBwaXp6YSB3aXRoIHJpY290dGEgY2hlZXNlLCBwcm92b2xhIGNoZWVzZSwgdG9tYXRvIHNhdWNlIGFuZCBzdWduYSAobGFyZCkuIEhlYXZlbiBvbiBlYXJ0aCFcIjtcblxuICBjb25zdCBvcGVuaW5nSG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IG9wZW5pbmdIb3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgb3BlbmluZ0hvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJPcGVuaW5nIEhvdXJzXCI7XG5cbiAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG9wZW5pbmdIb3Vycy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xuICBvcGVuaW5nSG91cnMudGV4dENvbnRlbnQgPSBcIlNhdHVyZGF5IC0gVGh1cnNkYXlcXHJcXG4xMTowMCAtIDIzOjAwXFxyXFxuXCI7XG4gIG9wZW5pbmdIb3Vycy50ZXh0Q29udGVudCArPSBcIkZyaWRheVxcclxcbjEzOjAwIC0gMDA6MDBcIjtcblxuICBvcGVuaW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzSGVhZGVyKTtcbiAgb3BlbmluZ0hvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vycyk7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChhYm91dCk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzQ29udGFpbmVyKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwidGhhYidzIHBpenplcmlhXCI7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHJldHVybiBuYXZiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBmb290ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb3Rlck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIxIHRoYWIwOVwiO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTWVzc2FnZSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgbG9hZE1lbnUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAvL0JFU1QgU0VMTEVSXG4gIGNvbnN0IGJlc3RTZWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGJlc3RTZWxsZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGJlc3RTZWxsZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkJlc3QgU2VsbGVyc1wiO1xuICBiZXN0U2VsbGVyLmFwcGVuZENoaWxkKGJlc3RTZWxsZXJIZWFkZXIpO1xuXG4gIGJlc3RTZWxsZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIk5lYXBvbGl0YW4gUGl6emFcIixcbiAgICAgIFwiTmVhcG9saXRhbiBwaXp6YSBpcyBhIHR5cGUgb2YgcGl6emEgdGhhdCBvcmlnaW5hdGVkIGluIE5hcGxlcywgSXRhbHkuIFRoaXMgc3R5bGUgb2YgcGl6emEgaXMgcHJlcGFyZWQgd2l0aCBzaW1wbGUgYW5kIGZyZXNoIGluZ3JlZGllbnRzOiBhIGJhc2ljIGRvdWdoLCByYXcgdG9tYXRvZXMsIGZyZXNoIG1venphcmVsbGEgY2hlZXNlLCBmcmVzaCBiYXNpbCwgYW5kIG9saXZlIG9pbC5cIixcbiAgICAgIDEzLjk5XG4gICAgKVxuICApO1xuICBiZXN0U2VsbGVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphKFxuICAgICAgXCJTaWNpbGlhbiBTdHlsZSBQaXp6YVwiLFxuICAgICAgXCJTaWNpbGlhbiBzdHlsZSBpcyBhIHR5cGUgb2YgcGl6emEgdGhhdCBvcmlnaW5hdGVkIGluIFBhbGVybW8sIEl0YWx5IOKAkyBvbiB0aGUgSXRhbGlhbiBpc2xhbmQgb2YgU2ljaWx5LiBJdCBpcyBvbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBzdHlsZXMgb2YgcGl6emEuIFdpdGggU2ljaWxpYW4gc3R5bGUgcGl6emEsIGRpbmVycyBlbmpveSBhIHJlY3Rhbmd1bGFyIHBpenphIHdpdGggYSB0aGljayBjcnVzdC5cIixcbiAgICAgIDE2Ljk5XG4gICAgKVxuICApO1xuICBiZXN0U2VsbGVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphKFxuICAgICAgXCJDaGljYWdvIFN0eWxlIFBpenphXCIsXG4gICAgICBcIkNoaWNhZ28tc3R5bGUgcGl6emEgaXMgYSB0aGljayBwaXp6YSBiYWtlZCBpbiBhIHBhbiBhbmQgbGF5ZXJlZCB3aXRoIGNoZWVzZSwgZmlsbGluZ3MgbGlrZSBtZWF0IGFuZCB2ZWdldGFibGVzLCBhbmQgc2F1Y2XigJNpbiB0aGF0IG9yZGVyLiBUaGUgY3J1c3QgaXMgdXN1YWxseSB0d28gdG8gdGhyZWUgaW5jaGVzIHRhbGwgYW5kIGdldHMgc2xpZ2h0bHkgZnJpZWQgZHVlIHRvIHRoZSBvaWwgaW4gdGhlIHBhbi5cIixcbiAgICAgIDE5Ljk5XG4gICAgKVxuICApO1xuXG4gIC8vQ0xBU1NJQ1NcbiAgY29uc3QgY2xhc3NpY3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjbGFzc2ljc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY2xhc3NpY3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNsYXNzaWNzXCI7XG4gIGNsYXNzaWNzLmFwcGVuZENoaWxkKGNsYXNzaWNzSGVhZGVyKTtcblxuICBjbGFzc2ljcy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YShcbiAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICBcIlBlcHBlcm9uaSBQaXp6YSBoYXMgZXZlcnl0aGluZyB5b3Ugd2FudOKAlGEgZ3JlYXQgY3J1c3QsIGdvb2V5IGNoZWVzZSwgYW5kIHRvbnMgb2YgcGVwcGVyb25pLlwiLFxuICAgICAgOS45OVxuICAgIClcbiAgKTtcbiAgY2xhc3NpY3MuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIlN1cHJlbWUgUGl6emFcIixcbiAgICAgIFwiQSBzdXByZW1lIHBpenphIGhhcyBwZXBwZXJvbmkgYW5kIHNhdXNhZ2UsIGFuZCBwb3RlbnRpYWxseSBhIGZldyBvdGhlciBtZWF0IHZhcmlhdGlvbnNcIixcbiAgICAgIDExLjk5XG4gICAgKVxuICApO1xuICBjbGFzc2ljcy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YShcbiAgICAgIFwiUXVhdHRybyBGb3JtYWdnaSBQaXp6YVwiLFxuICAgICAgXCJRdWF0dHJvIGZvcm1hZ2dpIGlzIGEgdmFyaWV0eSBvZiBJdGFsaWFuIHBpenphIHRvcHBlZCB3aXRoIGEgY29tYmluYXRpb24gb2YgZm91ciBraW5kcyBvZiBjaGVlc2UuXCIsXG4gICAgICAxMS45OVxuICAgIClcbiAgKTtcbiAgY2xhc3NpY3MuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIkhhd2FpaWFuIFBpenphXCIsXG4gICAgICBcIkNsYXNzaWMgSGF3YWlpYW4gUGl6emEgY29tYmluZXMgcGl6emEgc2F1Y2UsIGNoZWVzZSwgY29va2VkIGhhbSwgYW5kIHBpbmVhcHBsZS5cIixcbiAgICAgIDYuOTlcbiAgICApXG4gICk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChiZXN0U2VsbGVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjbGFzc2ljcyk7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpenphKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBwaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpenphLmNsYXNzTGlzdC5hZGQoXCJwaXp6YVwiKTtcblxuICBjb25zdCBwaXp6YU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGl6emFOYW1lLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1uYW1lXCIpO1xuXG4gIGNvbnN0IHBpenphRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGl6emFEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicGl6emEtZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgcGl6emFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaXp6YVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1wcmljZVwiKTtcblxuICBwaXp6YU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwaXp6YURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIHBpenphUHJpY2UudGV4dENvbnRlbnQgPSBcIiRcIiArIHByaWNlO1xuXG4gIHBpenphLmFwcGVuZENoaWxkKHBpenphTmFtZSk7XG4gIHBpenphLmFwcGVuZENoaWxkKHBpenphRGVzY3JpcHRpb24pO1xuICBwaXp6YS5hcHBlbmRDaGlsZChwaXp6YVByaWNlKTtcblxuICByZXR1cm4gcGl6emE7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcbmltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9wYWdlcy9pbml0aWFsLXBhZ2VcIjtcblxubG9hZFBhZ2UoKTtcblxuY29uc3QgbmF2QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1idXR0b25zXCIpKTtcbmNvbnNvbGUubG9nKG5hdkJ1dHRvbnMpO1xuXG5uYXZCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzd2l0Y2ggKGJ0bi50ZXh0Q29udGVudCkge1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3dpdGNoIGVycm9yXCIpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==