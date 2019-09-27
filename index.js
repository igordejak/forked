import data from './mock/data';
const any_string = Math.random();

//1
document.body.innerHTML += `<p> ${any_string} </p>`;

//2
let random = document.createTextNode(any_string);
let paragraph = document.createElement("p");
paragraph.appendChild(random);
document.body.appendChild(paragraph);

//3
document.body.insertAdjacentHTML( 'beforeend', `<p> ${any_string} </p>` );