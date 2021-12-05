import loadHome from "./home";

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

  loadHome();
}

export default loadPage;
