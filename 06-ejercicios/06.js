// Crear copias
let obj1 = { id: 1, name: 'Chanchito' }

function crearCopia(obj){
    let objCopia = {};
    for(llave in obj){
        objCopia[llave] = obj[llave];
    }

    return objCopia;
}

let obj2 = crearCopia(obj1);

console.log({ obj1, obj2 })