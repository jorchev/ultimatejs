function suma(a, b) { // <-- Parametros
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); // <-- Argumentos
console.log(resultado);
console.log(typeof suma);