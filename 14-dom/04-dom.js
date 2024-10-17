let el = document.createElement('p');
el.innerText = "Elemento creado";

document.body.append(el);

el.remove();

document.body.prepend(el);

let div = document.createElement('div');
div.innerText = 'Soy un texto';

el.replaceWith(div);

document.body.replaceChild(el, div);
document.body.removeChild(el);
document.body.appendChild(el);

// document.body.insertBefore(div, el);
document.body.insertAdjacentElement('afterbegin',div);