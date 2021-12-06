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

export default loadMenu;
