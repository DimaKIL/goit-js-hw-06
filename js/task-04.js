const actionElements = document.querySelectorAll('#counter button');
const spanEL = document.querySelector('span');
let counterValue = 0;
for(let element of actionElements){
    element.addEventListener('click', event => {
        const btnAction = event.target.getAttribute('data-action');
        if(btnAction === 'increment'){
            counterValue++;
            spanEL.textContent = counterValue;
        }else{
            counterValue--;
            spanEL.textContent = counterValue;
        }
    });
}

