/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout() {
  const about = document.createElement("div");
  about.classList.add("class");

  //ABOUT CONTAINER
  const aboutContainer = document.createElement("div");
  const aboutHeader = document.createElement("h4");
  aboutHeader.textContent = "About";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Founded in 1936 by Salvatore Di Matteo, the pizzeria was then managed by the “scugnizzi pizzaioli” (street urchin pizzaioli kids, usually poor, going to school only when they had to and spending a lot of time hanging out in the narrow streets of Naples) that used to work for him.  Today, it is run by Raffaele Marigliano, who 50 years ago created an amazing pizza con alici e cicinielli (anchovies and newborn very very little fish, not produced anymore). Here you cannot miss the pizza fritta, a deep-fried pizza with ricotta cheese, provola cheese, tomato sauce and sugna (lard). Heaven on earth!";

  aboutContainer.appendChild(aboutHeader);
  aboutContainer.appendChild(aboutText);

  //OPENING HOURS CONTAINER
  const openingHoursContainer = document.createElement("div");
  const openingHoursHeader = document.createElement("h4");
  openingHoursHeader.textContent = "Opening Hours";

  const openingHours = document.createElement("p");
  openingHours.setAttribute("style", "white-space: pre;");
  openingHours.textContent = "Saturday - Thursday\r\n11:00 - 23:00\r\n";
  openingHours.textContent += "Friday\r\n13:00 - 00:00";

  openingHoursContainer.appendChild(openingHoursHeader);
  openingHoursContainer.appendChild(openingHours);

  //CONTACT CONTAINER
  const contactContainer = document.createElement("div");
  const contactHeader = document.createElement("h4");
  contactHeader.textContent = "Contact Us";

  const phone = document.createElement("div");
  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("bi", "bi-telephone-fill");
  const phoneDetails = document.createElement("p");
  phoneDetails.textContent = "+960 9944992";

  phone.appendChild(phoneIcon);
  phone.appendChild(phoneDetails);

  const address = document.createElement("div");
  const addressIcon = document.createElement("i");
  addressIcon.classList.add("bi", "bi-house-door-fill");
  const addressDetails = document.createElement("p");
  addressDetails.textContent = "Via della Croce, 76, Roma, Italy";

  address.appendChild(addressIcon);
  address.appendChild(addressDetails);

  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(phone);
  contactContainer.appendChild(address);

  about.appendChild(aboutContainer);
  about.appendChild(openingHoursContainer);
  about.appendChild(contactContainer);
  return about;
}

function loadAbout() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createAbout());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");


function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const homeContainer = document.createElement("div");

  const slogan = document.createElement("p");
  slogan.textContent = "Quality crust you can trust";

  const orderChoices = document.createElement("p");
  orderChoices.textContent = "Dine In. Takeaway. Delivery.";

  const viewMenuButton = document.createElement("button");
  viewMenuButton.textContent = "View Menu";
  viewMenuButton.onclick = () => (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();

  homeContainer.appendChild(slogan);
  homeContainer.appendChild(orderChoices);
  homeContainer.appendChild(viewMenuButton);

  home.appendChild(homeContainer);

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

  const line = document.createElement("hr");

  const logo = document.createElement("p");
  logo.textContent = "thab's pizzeria";
  logo.classList.add("logo");

  const navButtonContainer = document.createElement("div");
  navButtonContainer.classList.add("nav-links");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("nav-buttons");

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("nav-buttons");

  const aboutButton = document.createElement("button");
  aboutButton.textContent = "About";
  aboutButton.classList.add("nav-buttons");

  navButtonContainer.appendChild(homeButton);
  navButtonContainer.appendChild(menuButton);
  navButtonContainer.appendChild(aboutButton);

  navbar.appendChild(logo);
  navbar.appendChild(navButtonContainer);
  navbar.appendChild(line);

  return navbar;
}

function createMain() {
  const main = document.createElement("main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const line = document.createElement("hr");

  const footerSocials = document.createElement("div");
  footerSocials.classList.add("socials");

  const instagram = document.createElement("i");
  instagram.classList.add("bi", "bi-instagram");
  const twitter = document.createElement("i");
  twitter.classList.add("bi", "bi-twitter");
  const facebook = document.createElement("i");
  facebook.classList.add("bi", "bi-facebook");

  footerSocials.appendChild(instagram);
  footerSocials.appendChild(twitter);
  footerSocials.appendChild(facebook);

  const footerCopyright = document.createElement("p");
  footerCopyright.textContent = "Copyright © 2021 thab09";

  footer.appendChild(line);
  footer.appendChild(footerSocials);
  footer.appendChild(footerCopyright);

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
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");





(0,_pages_initial_page__WEBPACK_IMPORTED_MODULE_2__["default"])();

const navButtons = Array.from(document.getElementsByClassName("nav-buttons"));

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Home":
        (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        break;
      case "Menu":
        (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        break;
      case "About":
        (0,_pages_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
        break;
      default:
        console.log("switch error");
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2luaXRpYWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImNsYXNzXCIpO1xuXG4gIC8vQUJPVVQgQ09OVEFJTkVSXG4gIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGFib3V0SGVhZGVyLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXG4gIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiRm91bmRlZCBpbiAxOTM2IGJ5IFNhbHZhdG9yZSBEaSBNYXR0ZW8sIHRoZSBwaXp6ZXJpYSB3YXMgdGhlbiBtYW5hZ2VkIGJ5IHRoZSDigJxzY3Vnbml6emkgcGl6emFpb2xp4oCdIChzdHJlZXQgdXJjaGluIHBpenphaW9saSBraWRzLCB1c3VhbGx5IHBvb3IsIGdvaW5nIHRvIHNjaG9vbCBvbmx5IHdoZW4gdGhleSBoYWQgdG8gYW5kIHNwZW5kaW5nIGEgbG90IG9mIHRpbWUgaGFuZ2luZyBvdXQgaW4gdGhlIG5hcnJvdyBzdHJlZXRzIG9mIE5hcGxlcykgdGhhdCB1c2VkIHRvIHdvcmsgZm9yIGhpbS4gIFRvZGF5LCBpdCBpcyBydW4gYnkgUmFmZmFlbGUgTWFyaWdsaWFubywgd2hvIDUwIHllYXJzIGFnbyBjcmVhdGVkIGFuIGFtYXppbmcgcGl6emEgY29uIGFsaWNpIGUgY2ljaW5pZWxsaSAoYW5jaG92aWVzIGFuZCBuZXdib3JuIHZlcnkgdmVyeSBsaXR0bGUgZmlzaCwgbm90IHByb2R1Y2VkIGFueW1vcmUpLiBIZXJlIHlvdSBjYW5ub3QgbWlzcyB0aGUgcGl6emEgZnJpdHRhLCBhIGRlZXAtZnJpZWQgcGl6emEgd2l0aCByaWNvdHRhIGNoZWVzZSwgcHJvdm9sYSBjaGVlc2UsIHRvbWF0byBzYXVjZSBhbmQgc3VnbmEgKGxhcmQpLiBIZWF2ZW4gb24gZWFydGghXCI7XG5cbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuXG4gIC8vT1BFTklORyBIT1VSUyBDT05UQUlORVJcbiAgY29uc3Qgb3BlbmluZ0hvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3BlbmluZ0hvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBvcGVuaW5nSG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIk9wZW5pbmcgSG91cnNcIjtcblxuICBjb25zdCBvcGVuaW5nSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb3BlbmluZ0hvdXJzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2hpdGUtc3BhY2U6IHByZTtcIik7XG4gIG9wZW5pbmdIb3Vycy50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXkgLSBUaHVyc2RheVxcclxcbjExOjAwIC0gMjM6MDBcXHJcXG5cIjtcbiAgb3BlbmluZ0hvdXJzLnRleHRDb250ZW50ICs9IFwiRnJpZGF5XFxyXFxuMTM6MDAgLSAwMDowMFwiO1xuXG4gIG9wZW5pbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNIZWFkZXIpO1xuICBvcGVuaW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzKTtcblxuICAvL0NPTlRBQ1QgQ09OVEFJTkVSXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoXCJiaVwiLCBcImJpLXRlbGVwaG9uZS1maWxsXCIpO1xuICBjb25zdCBwaG9uZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGhvbmVEZXRhaWxzLnRleHRDb250ZW50ID0gXCIrOTYwIDk5NDQ5OTJcIjtcblxuICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZUljb24pO1xuICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZURldGFpbHMpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRyZXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmlcIiwgXCJiaS1ob3VzZS1kb29yLWZpbGxcIik7XG4gIGNvbnN0IGFkZHJlc3NEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3NEZXRhaWxzLnRleHRDb250ZW50ID0gXCJWaWEgZGVsbGEgQ3JvY2UsIDc2LCBSb21hLCBJdGFseVwiO1xuXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0ljb24pO1xuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NEZXRhaWxzKTtcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gIGFib3V0LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0NvbnRhaW5lcik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICByZXR1cm4gYWJvdXQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0O1xuIiwiaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNsb2dhbi50ZXh0Q29udGVudCA9IFwiUXVhbGl0eSBjcnVzdCB5b3UgY2FuIHRydXN0XCI7XG5cbiAgY29uc3Qgb3JkZXJDaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG9yZGVyQ2hvaWNlcy50ZXh0Q29udGVudCA9IFwiRGluZSBJbi4gVGFrZWF3YXkuIERlbGl2ZXJ5LlwiO1xuXG4gIGNvbnN0IHZpZXdNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdmlld01lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIlZpZXcgTWVudVwiO1xuICB2aWV3TWVudUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gbG9hZE1lbnUoKTtcblxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsb2dhbik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQob3JkZXJDaG9pY2VzKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3TWVudUJ1dHRvbik7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJ0aGFiJ3MgcGl6emVyaWFcIjtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuICBjb25zdCBuYXZCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG5cbiAgbmF2QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXZCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG5cbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uQ29udGFpbmVyKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxpbmUpO1xuXG4gIHJldHVybiBuYXZiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXG4gIGNvbnN0IGZvb3RlclNvY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJTb2NpYWxzLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxzXCIpO1xuXG4gIGNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpbnN0YWdyYW0uY2xhc3NMaXN0LmFkZChcImJpXCIsIFwiYmktaW5zdGFncmFtXCIpO1xuICBjb25zdCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHR3aXR0ZXIuY2xhc3NMaXN0LmFkZChcImJpXCIsIFwiYmktdHdpdHRlclwiKTtcbiAgY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZmFjZWJvb2suY2xhc3NMaXN0LmFkZChcImJpXCIsIFwiYmktZmFjZWJvb2tcIik7XG5cbiAgZm9vdGVyU29jaWFscy5hcHBlbmRDaGlsZChpbnN0YWdyYW0pO1xuICBmb290ZXJTb2NpYWxzLmFwcGVuZENoaWxkKHR3aXR0ZXIpO1xuICBmb290ZXJTb2NpYWxzLmFwcGVuZENoaWxkKGZhY2Vib29rKTtcblxuICBjb25zdCBmb290ZXJDb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyQ29weXJpZ2h0LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMSB0aGFiMDlcIjtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQobGluZSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJTb2NpYWxzKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvcHlyaWdodCk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgbG9hZEhvbWUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAvL0JFU1QgU0VMTEVSXG4gIGNvbnN0IGJlc3RTZWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGJlc3RTZWxsZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGJlc3RTZWxsZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkJlc3QgU2VsbGVyc1wiO1xuICBiZXN0U2VsbGVyLmFwcGVuZENoaWxkKGJlc3RTZWxsZXJIZWFkZXIpO1xuXG4gIGJlc3RTZWxsZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIk5lYXBvbGl0YW4gUGl6emFcIixcbiAgICAgIFwiTmVhcG9saXRhbiBwaXp6YSBpcyBhIHR5cGUgb2YgcGl6emEgdGhhdCBvcmlnaW5hdGVkIGluIE5hcGxlcywgSXRhbHkuIFRoaXMgc3R5bGUgb2YgcGl6emEgaXMgcHJlcGFyZWQgd2l0aCBzaW1wbGUgYW5kIGZyZXNoIGluZ3JlZGllbnRzOiBhIGJhc2ljIGRvdWdoLCByYXcgdG9tYXRvZXMsIGZyZXNoIG1venphcmVsbGEgY2hlZXNlLCBmcmVzaCBiYXNpbCwgYW5kIG9saXZlIG9pbC5cIixcbiAgICAgIDEzLjk5XG4gICAgKVxuICApO1xuICBiZXN0U2VsbGVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphKFxuICAgICAgXCJTaWNpbGlhbiBTdHlsZSBQaXp6YVwiLFxuICAgICAgXCJTaWNpbGlhbiBzdHlsZSBpcyBhIHR5cGUgb2YgcGl6emEgdGhhdCBvcmlnaW5hdGVkIGluIFBhbGVybW8sIEl0YWx5IOKAkyBvbiB0aGUgSXRhbGlhbiBpc2xhbmQgb2YgU2ljaWx5LiBJdCBpcyBvbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBzdHlsZXMgb2YgcGl6emEuIFdpdGggU2ljaWxpYW4gc3R5bGUgcGl6emEsIGRpbmVycyBlbmpveSBhIHJlY3Rhbmd1bGFyIHBpenphIHdpdGggYSB0aGljayBjcnVzdC5cIixcbiAgICAgIDE2Ljk5XG4gICAgKVxuICApO1xuICBiZXN0U2VsbGVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphKFxuICAgICAgXCJDaGljYWdvIFN0eWxlIFBpenphXCIsXG4gICAgICBcIkNoaWNhZ28tc3R5bGUgcGl6emEgaXMgYSB0aGljayBwaXp6YSBiYWtlZCBpbiBhIHBhbiBhbmQgbGF5ZXJlZCB3aXRoIGNoZWVzZSwgZmlsbGluZ3MgbGlrZSBtZWF0IGFuZCB2ZWdldGFibGVzLCBhbmQgc2F1Y2XigJNpbiB0aGF0IG9yZGVyLiBUaGUgY3J1c3QgaXMgdXN1YWxseSB0d28gdG8gdGhyZWUgaW5jaGVzIHRhbGwgYW5kIGdldHMgc2xpZ2h0bHkgZnJpZWQgZHVlIHRvIHRoZSBvaWwgaW4gdGhlIHBhbi5cIixcbiAgICAgIDE5Ljk5XG4gICAgKVxuICApO1xuXG4gIC8vQ0xBU1NJQ1NcbiAgY29uc3QgY2xhc3NpY3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjbGFzc2ljc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY2xhc3NpY3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNsYXNzaWNzXCI7XG4gIGNsYXNzaWNzLmFwcGVuZENoaWxkKGNsYXNzaWNzSGVhZGVyKTtcblxuICBjbGFzc2ljcy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YShcbiAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICBcIlBlcHBlcm9uaSBQaXp6YSBoYXMgZXZlcnl0aGluZyB5b3Ugd2FudOKAlGEgZ3JlYXQgY3J1c3QsIGdvb2V5IGNoZWVzZSwgYW5kIHRvbnMgb2YgcGVwcGVyb25pLlwiLFxuICAgICAgOS45OVxuICAgIClcbiAgKTtcbiAgY2xhc3NpY3MuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIlN1cHJlbWUgUGl6emFcIixcbiAgICAgIFwiQSBzdXByZW1lIHBpenphIGhhcyBwZXBwZXJvbmkgYW5kIHNhdXNhZ2UsIGFuZCBwb3RlbnRpYWxseSBhIGZldyBvdGhlciBtZWF0IHZhcmlhdGlvbnNcIixcbiAgICAgIDExLjk5XG4gICAgKVxuICApO1xuICBjbGFzc2ljcy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YShcbiAgICAgIFwiUXVhdHRybyBGb3JtYWdnaSBQaXp6YVwiLFxuICAgICAgXCJRdWF0dHJvIGZvcm1hZ2dpIGlzIGEgdmFyaWV0eSBvZiBJdGFsaWFuIHBpenphIHRvcHBlZCB3aXRoIGEgY29tYmluYXRpb24gb2YgZm91ciBraW5kcyBvZiBjaGVlc2UuXCIsXG4gICAgICAxMS45OVxuICAgIClcbiAgKTtcbiAgY2xhc3NpY3MuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIkhhd2FpaWFuIFBpenphXCIsXG4gICAgICBcIkNsYXNzaWMgSGF3YWlpYW4gUGl6emEgY29tYmluZXMgcGl6emEgc2F1Y2UsIGNoZWVzZSwgY29va2VkIGhhbSwgYW5kIHBpbmVhcHBsZS5cIixcbiAgICAgIDYuOTlcbiAgICApXG4gICk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChiZXN0U2VsbGVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjbGFzc2ljcyk7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpenphKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBwaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpenphLmNsYXNzTGlzdC5hZGQoXCJwaXp6YVwiKTtcblxuICBjb25zdCBwaXp6YU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGl6emFOYW1lLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1uYW1lXCIpO1xuXG4gIGNvbnN0IHBpenphRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGl6emFEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicGl6emEtZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgcGl6emFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaXp6YVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1wcmljZVwiKTtcblxuICBwaXp6YU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwaXp6YURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIHBpenphUHJpY2UudGV4dENvbnRlbnQgPSBcIiRcIiArIHByaWNlO1xuXG4gIHBpenphLmFwcGVuZENoaWxkKHBpenphTmFtZSk7XG4gIHBpenphLmFwcGVuZENoaWxkKHBpenphRGVzY3JpcHRpb24pO1xuICBwaXp6YS5hcHBlbmRDaGlsZChwaXp6YVByaWNlKTtcblxuICByZXR1cm4gcGl6emE7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcbmltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9wYWdlcy9pbml0aWFsLXBhZ2VcIjtcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vcGFnZXMvYWJvdXRcIjtcblxubG9hZFBhZ2UoKTtcblxuY29uc3QgbmF2QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1idXR0b25zXCIpKTtcblxubmF2QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3dpdGNoIChidG4udGV4dENvbnRlbnQpIHtcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQWJvdXRcIjpcbiAgICAgICAgbG9hZEFib3V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coXCJzd2l0Y2ggZXJyb3JcIik7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9