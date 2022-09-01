const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEL = document.querySelector('.gallery');
for(const element of images){
listEL.insertAdjacentHTML('afterbegin', '<li><img></li>');
const imgEL = document.querySelector('img');
const itemEL = document.querySelector('li');
imgEL.src = element.url;
imgEL.alt = element.alt;
itemEL.appendChild(imgEL);
listEL.appendChild(itemEL);
}
console.log(listEL);