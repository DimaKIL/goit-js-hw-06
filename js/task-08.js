const formEL = document.querySelector('form');



formEL.addEventListener('submit', onFillingOutTheForm);



function onFillingOutTheForm(event) {
event.preventDefault();
console.log(event.target.elements.email.value);
if(event.target.elements.email.value === '' || event.target.elements.password.value === '' ){
    alert('Все поля должны быть заполнены!');
}
const emailValue = event.target.elements.email.value;
const passwordValue = event.target.elements.password.value;
const obj = {
    email: emailValue,
    password: passwordValue,
};
console.log(obj);
formEL.reset();
}