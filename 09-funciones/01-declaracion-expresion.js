console.log(resta); // hoisting -> levantar o izar

// Declaración de funciones: Function Declaration

// Función nombrada -> Named function
function suma(){
    console.log('sumando...');
}

// Función anónima -> Anonymous function
// function () {
//     console.log('función anónima');
// }

// Expresión de funciones -> function expression
// Expresión de función anónima
const resta = function () { // Anonymous function expression
    console.log('restando');
}

const multiplica = function multi () { // named function expression
    console.log('restando');
}

const divide = () => { // anónima
    console.log('dividiendo');
}