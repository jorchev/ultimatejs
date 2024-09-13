const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'Premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'Free' },
    { edad: 32, nombre: 'Fernanda', plan: 'Free' },
];

const users = [
    { age: 22, name: 'Michael', membership: 'Premium' },
    { age: 27, name: 'Kevin', membership: 'free' },
    { age: 29, name: 'Happy Pig', membership: 'free' },
];


// Unificar las estructuras de usuarios y user
// Fusionar los arrays
// Ordenar por edad
// Crear plantilla HTML: 
// <li>Nombre: name, Edad: age</li>
// Imprimir en consola

function unificarEstructuras(arr){

    // Mi solución
    let usuarios = [];
    for(let usuario of arr){
        usuarios.push({edad: usuario.age, nombre: usuario.name, plan: usuario.membership});
    }
    // return usuarios;

    // Solucion Nico
    return arr.map(u => ({
        edad: u.age,
        nombre: u.name,
        plan: u.membership
    }));
}

function mostrarUsuarios(usuarios, users){
    const listaCompleta = usuarios.concat(unificarEstructuras(users));
    const listaHTML = listaCompleta
        .sort((a,b) => {
            if(a.edad > b.edad) return -1;
            if(a.edad < b.edad) return 1;
            return 0;
        })
        .map(u => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);
    return `
    <ul>
        ${listaHTML.join('\n\t\t')}
    </ul>
    `;
}


console.log(mostrarUsuarios(usuarios, users));