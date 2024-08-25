// function hola(){
//     return "Hola Mundo";
// }

// Arrow function
// const hola = () => {
//     return "Hola mundo";
// }

// Return implicito
// const hola = () => "Hola mundo";
const hola = mensaje => mensaje + " Hola mundo"; // Si hay un solo parametro se pueden eliminar los parentesis en caso de haber mas de uno se debe de colocar el parentesis 
const hola2 = (mensaje) => {
    return mensaje + " Hola mundo"
};


const saludo = hola("Chanchito feliz");

console.log(saludo);

