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

export default loadAbout;
