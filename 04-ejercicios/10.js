/**
 * Crear array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N
 */

let longitud = 7;

function crearArray(n){
    // Nico realizo una validación del n para comprobar
    // que nofuera negativo ni con valor de 0
    if (n <= 0)
        return [];

    let numbers = [];
    for(let i = 0; i < n; i++){
        numbers[i] = i + 1;
    }

    return numbers;
}

let resultado = crearArray(longitud);
console.log(resultado);