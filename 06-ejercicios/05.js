// Propiedad Existente
let objeto = {
    id: 1,
    name: 'Chanchito',
    login: function(){},
    logout: function(){}
}

let propiedad = 'name';

function tieneProp(obj, propiedad){

    // console.log(Object.keys(obj)); // devuelve una array con las propiedades

    for(llave in obj){
        if(llave === propiedad){
            return true
        }
    }

    return false;
}

console.log( tieneProp(objeto, propiedad) );