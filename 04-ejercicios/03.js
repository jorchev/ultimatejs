/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

function getByIdx(arr, idx){

    if(idx < 0 || arr[idx] === undefined)
        return 'indice invalido';

    return arr[idx];

}

let resultado = getByIdx([1,2,25,30], 2);
console.log(resultado);