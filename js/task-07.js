const inputEL = document.querySelector('input');
const spanEL = document.querySelector('span');



inputEL.addEventListener('input', funk);



function funk(event) {
    console.log(event.target.value)
    spanEL.setAttribute(`style`, `font-size: ${event.target.value}px`);
}