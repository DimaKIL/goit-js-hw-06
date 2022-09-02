const inputEL = document.querySelector('input');


inputEL.addEventListener('blur', funk);
const atrebuts = inputEL.getAttribute('data-length');
const lengthInput = inputEL.value.length;

function funk(event){
    if(atrebuts !== lengthInput){
        inputEL.classList.add('invalid');

    }else{
        inputEL.classList.add('valid');
    }
}