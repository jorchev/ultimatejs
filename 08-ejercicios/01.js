// Mi solución
/*
function paraAbsoluto(arr){
    for(let numero of arr){
        if(numero < 0){
            arr[arr.indexOf(numero)] = Math.abs(numero);
        }
    }
    return arr;
}
*/

// Solución Nico
function paraAbsoluto(arr){
    return arr.map( n => Math.abs(n) );
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);
console.log(absolutos);