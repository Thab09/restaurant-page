import loadHome from "./home";
import loadMenu from "./menu.js";

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

  loadHome();
}

export default loadPage;
