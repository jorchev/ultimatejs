const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium'},
    { edad: 13, nombre: 'Chanchito', plan: 'free'},
    { edad: 32, nombre: 'Fernanda', plan: 'free'},
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
    { edad: 38, nombre: 'Jorge', plan: 'gold'},
];

// Obtener los usuarios pago
// Ordenar de mayor a menor edad
// Devolver el nombre del usuario
// Crear una plantilla HTML
// Imprimirla en consola

/**
 * <ul>
 *  <li>Jorge</li>
 *  <li>Felipe</li>
 *  <li>Nico</li>
 * </ul> 
 */

function listadoUsuariosPremium(arr){

    const plantillaHTML = arr
        .filter(u => u.plan !== 'free')
        .sort((a,b) => {
            if(a.edad > b.edad) return -1;
            if(a.edad < b.edad) return 1;
            return 0;
        })
        .map(u => `<li>${u.nombre}</li>`);
    
    // mi solucion
    // plantillaHTML.unshift('<ul>');
    // plantillaHTML.push('</ul>');

    // return plantillaHTML.join('\n');


    // solucion Nico
    return `
    <ul>
        ${plantillaHTML.join('\n\t\t')}
    </ul>
    `;

}

const listadoHTML = listadoUsuariosPremium(usuarios);
console.log(listadoHTML);