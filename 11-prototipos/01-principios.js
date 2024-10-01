// Ejemplo de programación estructurada
let nombre = 'Hola';
let apellido = 'Mundo';

function getNombreCompleto(nombre, apellido) {
    return [nombre, apellido].join(' ');
}

let fullname = getNombreCompleto(nombre, apellido);


// Ejemplo de programación orientada a objetos
const user = {
    nombre: 'Hola',
    apellido: 'Mundo',
    getNombreCompleto() {
        return [this.nombre, this.apellido].join(' ');
    }
}

console.log(user.getNombreCompleto());