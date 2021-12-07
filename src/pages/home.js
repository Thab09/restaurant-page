import loadMenu from "./menu";

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
  viewMenuButton.onclick = () => loadMenu();

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

export default loadHome;
