// Cuales son métodos
let objeto = {
    id: 1,
    name: 'Chanchito',
    login: function(){},
    logout: function(){}
}

function cualesMetodos(obj){
    for(llave in obj){
        if(typeof obj[llave] === 'function'){
            console.log(llave);
        }
    }
}

cualesMetodos(objeto);