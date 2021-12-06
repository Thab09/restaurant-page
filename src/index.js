import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadPage from "./pages/initial-page";

loadPage();

const navButtons = Array.from(document.getElementsByClassName("nav-buttons"));
console.log(navButtons);

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Home":
        loadHome();
        break;
      case "Menu":
        loadMenu();
        break;
      default:
        console.log("switch error");
    }
  });
});
