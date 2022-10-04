const inputEL = document.querySelector('input');


inputEL.addEventListener('blur', onCheckingForValidity);
let atrebuts = Number(inputEL.getAttribute('data-length'));
let lengthInput = inputEL.value.length;

function onCheckingForValidity(event){
    let lengthInput = inputEL.value.length;
    if(atrebuts !== lengthInput){
        inputEL.classList.add('invalid');
        inputEL.classList.remove('valid');
    }else{
        inputEL.classList.remove('invalid');
        inputEL.classList.add('valid');
    }
}