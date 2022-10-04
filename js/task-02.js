const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEL = ingredients.map((name) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = name;
  ingredientEl.classList.add("item");

  return ingredientEl;
});

const newEL = document.querySelector("#ingredients");
newEL.append(...listEL);