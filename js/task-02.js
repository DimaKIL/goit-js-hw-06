const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let arr = [];
const listEL = document.querySelector('#ingredients');
for(const ingredient of ingredients){
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  listEL.appendChild(itemEl);


}
console.log(listEL);