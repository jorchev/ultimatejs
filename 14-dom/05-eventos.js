let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = e => {
    console.log('Entra el mouse', e);
}

form.onmouseleave = e => {
    console.log('Sale el mouse');
}

input.onfocus = e => {
    console.log('Input con focus');
}

input.onblur = e => {
    console.log('Input perdió el focus');
}

input.onchange = e => {
    console.log('valor cambia', e.target.value);
}

// btn.onclick = e => {
//     e.preventDefault();
//     console.log('botón clickeado');
// }

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('botón clickeado');
});