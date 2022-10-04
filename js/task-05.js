const inputEL = document.querySelector('input');
const spanEL = document.querySelector('span');
inputEL.addEventListener('input', onOutputTextChange);


function onOutputTextChange(event){
const string = event.target.value;
if(string !== ''){
    spanEL.textContent =  string;
}else{
    spanEL.textContent = 'Anonymous';
}
}