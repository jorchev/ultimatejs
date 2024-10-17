let el = document.createElement('p');

el.innerText = "Elemento creado";
// el.innerText = "<ul><li>Hola Mundo</li></ul>";
// el.innerHTML = "<ul><li>Hola Mundo</li></ul>";

document.body.append(el);


el.style = "background-color: red; font-weight: bold;";
el.className = 'parrafo';
el.id = 'mi-parrafo';
// lo siguiente no srive
// el.mipropiedad = "Mi propiedad";

el.setAttribute('mipropiedad','Mi Propiedad');
let valor = el.getAttribute('mipropiedad');
let existe = el.hasAttribute('mipropiedad');