// Son mas rapidos (preferentemente usar estos)
// HTMLElement
let htmlElement = document.getElementById('cuerpo');

// HTMLCollection -> Se parece a un array pero no lo es
let elementosRed = document.getElementsByClassName('red');

// NodeList
let elementosChanchito = document.getElementsByName('chanchito');

// HTMLCollection
let parrafos = document.getElementsByTagName('p');


// Son lentos
// HTMLElement -> solo un elemento
let el = document.querySelector('#cuerpo');

// NodeList
let els = document.querySelectorAll('p');


let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);
console.log(plive, pstatic);