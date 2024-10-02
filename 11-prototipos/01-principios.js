// Ejemplo de programación estructurada
let nombre = 'Hola';
let apellido = 'Mundo';

function getNombreCompleto(nombre, apellido) {
    return [nombre, apellido].join(' ');
}

let fullname = getNombreCompleto(nombre, apellido);


// Ejemplo de programación orientada a objetos

// Primer principio encapsulación
const user = {
    nombre: 'Hola',
    apellido: 'Mundo',
    getNombreCompleto() {
        return [this.nombre, this.apellido].join(' ');
    }
}

console.log(user.getNombreCompleto());


// Segundo principio Abstracción
const user1 = new User();
user1.password = 'Chanchito feliz';
user1.save();

// Tercer principio Herencia
/**
 * User --> id, name, guardar()
 * Restaurante --> id, name, guardar()
 * Motociclista --> id, name, guardar()
 * En JS para solventar este problemas las propiedades y métodos como 
 * id, name, guardar() se crean en una función constructora y se 
 * transfieren a los objetos User, Restaurante y Motociclista
 */

// Cuarto principio Polimorfismo
function validaEntidad(entidad) {
    // ...

    entidad.save();
}