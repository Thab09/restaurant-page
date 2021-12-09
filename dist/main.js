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
  about.classList.add("about");

  //ABOUT CONTAINER
  const aboutContainer = document.createElement("div");
  const aboutHeader = document.createElement("h4");
  aboutHeader.textContent = "About";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Founded in 1936 by aRahma binth Ahmed, the pizzeria was then managed by the “scugnizzi pizzaioli” that used to work for him.  Today, it is run by Raffaele Marigliano, who 50 years ago created an amazing pizza con alici e cicinielli. Here you cannot miss the pizza fritta, a deep-fried pizza with ricotta cheese, provola cheese, tomato sauce and sugna (lard). Heaven on earth!";

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
  phone.classList.add("contact-container");
  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("bi", "bi-telephone-fill");
  const phoneDetails = document.createElement("p");
  phoneDetails.textContent = "+960 9944992";

  phone.appendChild(phoneIcon);
  phone.appendChild(phoneDetails);

  const address = document.createElement("div");
  address.classList.add("contact-container");
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
  homeContainer.classList.add("home-container");

  const slogan = document.createElement("p");
  slogan.classList.add("slogan");
  slogan.textContent = "Quality crust you can trust.";

  const orderChoices = document.createElement("p");
  orderChoices.textContent = "dine In. takeaway. delivery.";

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


function createHeader() {
  const navbar = document.createElement("nav");

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

  const line = document.createElement("hr");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsd0RBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaW5pdGlhbC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG5cbiAgLy9BQk9VVCBDT05UQUlORVJcbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhYm91dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgYWJvdXRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG5cbiAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFib3V0VGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJGb3VuZGVkIGluIDE5MzYgYnkgYVJhaG1hIGJpbnRoIEFobWVkLCB0aGUgcGl6emVyaWEgd2FzIHRoZW4gbWFuYWdlZCBieSB0aGUg4oCcc2N1Z25penppIHBpenphaW9saeKAnSB0aGF0IHVzZWQgdG8gd29yayBmb3IgaGltLiAgVG9kYXksIGl0IGlzIHJ1biBieSBSYWZmYWVsZSBNYXJpZ2xpYW5vLCB3aG8gNTAgeWVhcnMgYWdvIGNyZWF0ZWQgYW4gYW1hemluZyBwaXp6YSBjb24gYWxpY2kgZSBjaWNpbmllbGxpLiBIZXJlIHlvdSBjYW5ub3QgbWlzcyB0aGUgcGl6emEgZnJpdHRhLCBhIGRlZXAtZnJpZWQgcGl6emEgd2l0aCByaWNvdHRhIGNoZWVzZSwgcHJvdm9sYSBjaGVlc2UsIHRvbWF0byBzYXVjZSBhbmQgc3VnbmEgKGxhcmQpLiBIZWF2ZW4gb24gZWFydGghXCI7XG5cbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuXG4gIC8vT1BFTklORyBIT1VSUyBDT05UQUlORVJcbiAgY29uc3Qgb3BlbmluZ0hvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3BlbmluZ0hvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBvcGVuaW5nSG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIk9wZW5pbmcgSG91cnNcIjtcblxuICBjb25zdCBvcGVuaW5nSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb3BlbmluZ0hvdXJzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2hpdGUtc3BhY2U6IHByZTtcIik7XG4gIG9wZW5pbmdIb3Vycy50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXkgLSBUaHVyc2RheVxcclxcbjExOjAwIC0gMjM6MDBcXHJcXG5cIjtcbiAgb3BlbmluZ0hvdXJzLnRleHRDb250ZW50ICs9IFwiRnJpZGF5XFxyXFxuMTM6MDAgLSAwMDowMFwiO1xuXG4gIG9wZW5pbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNIZWFkZXIpO1xuICBvcGVuaW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzKTtcblxuICAvL0NPTlRBQ1QgQ09OVEFJTkVSXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG4gIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBwaG9uZUljb24uY2xhc3NMaXN0LmFkZChcImJpXCIsIFwiYmktdGVsZXBob25lLWZpbGxcIik7XG4gIGNvbnN0IHBob25lRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaG9uZURldGFpbHMudGV4dENvbnRlbnQgPSBcIis5NjAgOTk0NDk5MlwiO1xuXG4gIHBob25lLmFwcGVuZENoaWxkKHBob25lSWNvbik7XG4gIHBob25lLmFwcGVuZENoaWxkKHBob25lRGV0YWlscyk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBhZGRyZXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmlcIiwgXCJiaS1ob3VzZS1kb29yLWZpbGxcIik7XG4gIGNvbnN0IGFkZHJlc3NEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3NEZXRhaWxzLnRleHRDb250ZW50ID0gXCJWaWEgZGVsbGEgQ3JvY2UsIDc2LCBSb21hLCBJdGFseVwiO1xuXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0ljb24pO1xuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NEZXRhaWxzKTtcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gIGFib3V0LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0NvbnRhaW5lcik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICByZXR1cm4gYWJvdXQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0O1xuIiwiaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzbG9nYW4uY2xhc3NMaXN0LmFkZChcInNsb2dhblwiKTtcbiAgc2xvZ2FuLnRleHRDb250ZW50ID0gXCJRdWFsaXR5IGNydXN0IHlvdSBjYW4gdHJ1c3QuXCI7XG5cbiAgY29uc3Qgb3JkZXJDaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG9yZGVyQ2hvaWNlcy50ZXh0Q29udGVudCA9IFwiZGluZSBJbi4gdGFrZWF3YXkuIGRlbGl2ZXJ5LlwiO1xuXG4gIGNvbnN0IHZpZXdNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdmlld01lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIlZpZXcgTWVudVwiO1xuICB2aWV3TWVudUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gbG9hZE1lbnUoKTtcblxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsb2dhbik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQob3JkZXJDaG9pY2VzKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3TWVudUJ1dHRvbik7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJ0aGFiJ3MgcGl6emVyaWFcIjtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuICBjb25zdCBuYXZCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG5cbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICBuYXZCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZCdXR0b25Db250YWluZXIpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobGluZSk7XG5cbiAgcmV0dXJuIG5hdmJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgY29uc3QgZm9vdGVyU29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlclNvY2lhbHMuY2xhc3NMaXN0LmFkZChcInNvY2lhbHNcIik7XG5cbiAgY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGluc3RhZ3JhbS5jbGFzc0xpc3QuYWRkKFwiYmlcIiwgXCJiaS1pbnN0YWdyYW1cIik7XG4gIGNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgdHdpdHRlci5jbGFzc0xpc3QuYWRkKFwiYmlcIiwgXCJiaS10d2l0dGVyXCIpO1xuICBjb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBmYWNlYm9vay5jbGFzc0xpc3QuYWRkKFwiYmlcIiwgXCJiaS1mYWNlYm9va1wiKTtcblxuICBmb290ZXJTb2NpYWxzLmFwcGVuZENoaWxkKGluc3RhZ3JhbSk7XG4gIGZvb3RlclNvY2lhbHMuYXBwZW5kQ2hpbGQodHdpdHRlcik7XG4gIGZvb3RlclNvY2lhbHMuYXBwZW5kQ2hpbGQoZmFjZWJvb2spO1xuXG4gIGNvbnN0IGZvb3RlckNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb290ZXJDb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIxIHRoYWIwOVwiO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5lKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclNvY2lhbHMpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29weXJpZ2h0KTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICBsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIC8vQkVTVCBTRUxMRVJcbiAgY29uc3QgYmVzdFNlbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgYmVzdFNlbGxlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgYmVzdFNlbGxlckhlYWRlci50ZXh0Q29udGVudCA9IFwiQmVzdCBTZWxsZXJzXCI7XG4gIGJlc3RTZWxsZXIuYXBwZW5kQ2hpbGQoYmVzdFNlbGxlckhlYWRlcik7XG5cbiAgYmVzdFNlbGxlci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YShcbiAgICAgIFwiTmVhcG9saXRhbiBQaXp6YVwiLFxuICAgICAgXCJOZWFwb2xpdGFuIHBpenphIGlzIGEgdHlwZSBvZiBwaXp6YSB0aGF0IG9yaWdpbmF0ZWQgaW4gTmFwbGVzLCBJdGFseS4gVGhpcyBzdHlsZSBvZiBwaXp6YSBpcyBwcmVwYXJlZCB3aXRoIHNpbXBsZSBhbmQgZnJlc2ggaW5ncmVkaWVudHM6IGEgYmFzaWMgZG91Z2gsIHJhdyB0b21hdG9lcywgZnJlc2ggbW96emFyZWxsYSBjaGVlc2UsIGZyZXNoIGJhc2lsLCBhbmQgb2xpdmUgb2lsLlwiLFxuICAgICAgMTMuOTlcbiAgICApXG4gICk7XG4gIGJlc3RTZWxsZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIlNpY2lsaWFuIFN0eWxlIFBpenphXCIsXG4gICAgICBcIlNpY2lsaWFuIHN0eWxlIGlzIGEgdHlwZSBvZiBwaXp6YSB0aGF0IG9yaWdpbmF0ZWQgaW4gUGFsZXJtbywgSXRhbHkg4oCTIG9uIHRoZSBJdGFsaWFuIGlzbGFuZCBvZiBTaWNpbHkuIEl0IGlzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIHN0eWxlcyBvZiBwaXp6YS4gV2l0aCBTaWNpbGlhbiBzdHlsZSBwaXp6YSwgZGluZXJzIGVuam95IGEgcmVjdGFuZ3VsYXIgcGl6emEgd2l0aCBhIHRoaWNrIGNydXN0LlwiLFxuICAgICAgMTYuOTlcbiAgICApXG4gICk7XG4gIGJlc3RTZWxsZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emEoXG4gICAgICBcIkNoaWNhZ28gU3R5bGUgUGl6emFcIixcbiAgICAgIFwiQ2hpY2Fnby1zdHlsZSBwaXp6YSBpcyBhIHRoaWNrIHBpenphIGJha2VkIGluIGEgcGFuIGFuZCBsYXllcmVkIHdpdGggY2hlZXNlLCBmaWxsaW5ncyBsaWtlIG1lYXQgYW5kIHZlZ2V0YWJsZXMsIGFuZCBzYXVjZeKAk2luIHRoYXQgb3JkZXIuIFRoZSBjcnVzdCBpcyB1c3VhbGx5IHR3byB0byB0aHJlZSBpbmNoZXMgdGFsbCBhbmQgZ2V0cyBzbGlnaHRseSBmcmllZCBkdWUgdG8gdGhlIG9pbCBpbiB0aGUgcGFuLlwiLFxuICAgICAgMTkuOTlcbiAgICApXG4gICk7XG5cbiAgLy9DTEFTU0lDU1xuICBjb25zdCBjbGFzc2ljcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNsYXNzaWNzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjbGFzc2ljc0hlYWRlci50ZXh0Q29udGVudCA9IFwiQ2xhc3NpY3NcIjtcbiAgY2xhc3NpY3MuYXBwZW5kQ2hpbGQoY2xhc3NpY3NIZWFkZXIpO1xuXG4gIGNsYXNzaWNzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphKFxuICAgICAgXCJQZXBwZXJvbmkgUGl6emFcIixcbiAgICAgIFwiUGVwcGVyb25pIFBpenphIGhhcyBldmVyeXRoaW5nIHlvdSB3YW504oCUYSBncmVhdCBjcnVzdCwgZ29vZXkgY2hlZXNlLCBhbmQgdG9ucyBvZiBwZXBwZXJvbmkuXCIsXG4gICAgICA5Ljk5XG4gICAgKVxuICApO1xuICBjbGFzc2ljcy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YShcbiAgICAgIFwiU3VwcmVtZSBQaXp6YVwiLFxuICAgICAgXCJBIHN1cHJlbWUgcGl6emEgaGFzIHBlcHBlcm9uaSBhbmQgc2F1c2FnZSwgYW5kIHBvdGVudGlhbGx5IGEgZmV3IG90aGVyIG1lYXQgdmFyaWF0aW9uc1wiLFxuICAgICAgMTEuOTlcbiAgICApXG4gICk7XG4gIGNsYXNzaWNzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphKFxuICAgICAgXCJRdWF0dHJvIEZvcm1hZ2dpIFBpenphXCIsXG4gICAgICBcIlF1YXR0cm8gZm9ybWFnZ2kgaXMgYSB2YXJpZXR5IG9mIEl0YWxpYW4gcGl6emEgdG9wcGVkIHdpdGggYSBjb21iaW5hdGlvbiBvZiBmb3VyIGtpbmRzIG9mIGNoZWVzZS5cIixcbiAgICAgIDExLjk5XG4gICAgKVxuICApO1xuICBjbGFzc2ljcy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YShcbiAgICAgIFwiSGF3YWlpYW4gUGl6emFcIixcbiAgICAgIFwiQ2xhc3NpYyBIYXdhaWlhbiBQaXp6YSBjb21iaW5lcyBwaXp6YSBzYXVjZSwgY2hlZXNlLCBjb29rZWQgaGFtLCBhbmQgcGluZWFwcGxlLlwiLFxuICAgICAgNi45OVxuICAgIClcbiAgKTtcblxuICBtZW51LmFwcGVuZENoaWxkKGJlc3RTZWxsZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKGNsYXNzaWNzKTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGl6emEobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gIGNvbnN0IHBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGl6emEuY2xhc3NMaXN0LmFkZChcInBpenphXCIpO1xuXG4gIGNvbnN0IHBpenphTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaXp6YU5hbWUuY2xhc3NMaXN0LmFkZChcInBpenphLW5hbWVcIik7XG5cbiAgY29uc3QgcGl6emFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaXp6YURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1kZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBwaXp6YVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBpenphUHJpY2UuY2xhc3NMaXN0LmFkZChcInBpenphLXByaWNlXCIpO1xuXG4gIHBpenphTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHBpenphRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgcGl6emFQcmljZS50ZXh0Q29udGVudCA9IFwiJFwiICsgcHJpY2U7XG5cbiAgcGl6emEuYXBwZW5kQ2hpbGQocGl6emFOYW1lKTtcbiAgcGl6emEuYXBwZW5kQ2hpbGQocGl6emFEZXNjcmlwdGlvbik7XG4gIHBpenphLmFwcGVuZENoaWxkKHBpenphUHJpY2UpO1xuXG4gIHJldHVybiBwaXp6YTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL3BhZ2VzL2luaXRpYWwtcGFnZVwiO1xuaW1wb3J0IGxvYWRBYm91dCBmcm9tIFwiLi9wYWdlcy9hYm91dFwiO1xuXG5sb2FkUGFnZSgpO1xuXG5jb25zdCBuYXZCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2LWJ1dHRvbnNcIikpO1xuXG5uYXZCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzd2l0Y2ggKGJ0bi50ZXh0Q29udGVudCkge1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBYm91dFwiOlxuICAgICAgICBsb2FkQWJvdXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZyhcInN3aXRjaCBlcnJvclwiKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=