const formEL = document.querySelector('form');



formEL.addEventListener('submit', funk);



function funk(event) {
event.preventDefault();
console.log('працює');
console.log(event.target.elements.email.value);
if(event.target.elements.email.value === '' || event.target.elements.password.value === '' ){
    alert('Все поля должны быть заполнены!');
}
const emailValue = event.target.elements.email.value;
const passwordValue = event.target.elements.password.value;
const obj = {
};
obj.email = emailValue;
obj.password = passwordValue;
console.log(obj);
document.getElementById().reset();


// резет і як записати в обєєкт назву свойства змінною
}