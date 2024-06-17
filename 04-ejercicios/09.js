/**
 * Crear algoritmo que devuelva un
 * array de objetos en base a pares
 */
let pairs = [
    [1, {name: "Nicolas"}],
    [2, {name: "Jorge"}],
    [3, {name: "Chanchito"}],
]

function toCollection(arr){
    let collection = [];
    for (element of arr){
        collection.push({id: element[0], name: element[1].name});
    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);