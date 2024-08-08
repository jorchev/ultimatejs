// Objetos similares
function similares(obj1, obj2){
    // return (JSON.stringify(obj1) === JSON.stringify(obj2));
    let distintos = false;
    for(llave in obj1){
        if(obj1[llave] !== obj2[llave]){
            distintos = true;
        }
    }

    return !distintos;
}

let resultado = similares(
    {id: 1, name: 'Jorge'},
    {id: 1, name: 'Nico'}
);

console.log(resultado);