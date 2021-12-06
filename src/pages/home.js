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

export default loadHome;
