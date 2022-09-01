const listEL = document.querySelector('#categories');
const itemEelements = listEL.querySelectorAll('.item');
const titalEl = listEL.querySelectorAll('h2');
console.log(`Number of categories: ${itemEelements.length}`);
const gg = Array.from(itemEelements,  x => x.querySelectorAll('ul > li').length);
for(let i = 0; i < 3; i++){
    console.log(`Category: ${titalEl[i].textContent}`);
    console.log(`Elements: ${gg[i]}`)
}
