function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonEL = document.querySelector('.change-color');
const bodyEL = document.querySelector('body');
const spanEL = document.querySelector('span');

buttonEL.addEventListener('click', funk);



console.log(randColor);
function funk(event){
  const randColor = getRandomHexColor();
  bodyEL.setAttribute(`style`, `background-color: ${randColor}`);
  spanEL.textContent = `${randColor}`;
}
