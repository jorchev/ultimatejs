/**
 * Crea un algoritmo que devuelva el número
 * menor y mayor de un array
 */

let array = [2,5,7,300,-150,15,-5,-100,55];

function getMenorMayor(arr){

    let numeros = [];

    let aux = array[0];
    for(let numero of array){
        if(numero < aux){
            aux = numero;
        }
    }
    numeros.push(aux);

    aux = array[0];
    for(let numero of array){
        if(numero > aux){
            aux = numero;
        }
        
    }
    numeros.push(aux);

    return numeros;

}

let numeros = getMenorMayor(array);
console.log(numeros);

// Nicolas utilizo operadores terniarios con dos variables una para menor y otra para mayor