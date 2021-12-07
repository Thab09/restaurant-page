import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadPage from "./pages/initial-page";
import loadAbout from "./pages/about";

loadPage();

const navButtons = Array.from(document.getElementsByClassName("nav-buttons"));

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Home":
        loadHome();
        break;
      case "Menu":
        loadMenu();
        break;
      case "About":
        loadAbout();
        break;
      default:
        console.log("switch error");
    }
  });
});
