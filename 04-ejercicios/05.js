/**
 * Crea un algoritmo que devuelva el número
 * menor y mayor de un array
 */

let array = [2,5,7,300,450,-150,15,-175,-5,-100,55];

function getMenorMayor(arr){

    // let numeros = [];

    // let aux = array[0];
    // for(let numero of array){
    //     if(numero < aux){
    //         aux = numero;
    //     }
    // }
    // numeros.push(aux);

    // aux = array[0];
    // for(let numero of array){
    //     if(numero > aux){
    //         aux = numero;
    //     }
        
    // }
    // numeros.push(aux);

    // return numeros;


    // Nicolas utilizo operadores terniarios con dos variables una para menor y otra para mayor
    let menor = arr[0];
    let mayor = arr[0];

    for(let numero of arr){
        menor = numero < menor ? numero : menor;
        mayor = numero > mayor ? numero : mayor;
    }

    return [menor, mayor];

}

let numeros = getMenorMayor(array);
console.log(numeros);

