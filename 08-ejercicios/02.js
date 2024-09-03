const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
];

// numeros, strings, objetos
// Mi solucion
/*
function dividePorTipo(arr){
    let tipos = {
        numeros: [],
        strings: [],
        objects: [],
    };

    arr.map( (e) => {
        if(typeof e === 'string')
            tipos.strings.push(e);
        else if(typeof e === 'number')
            tipos.numeros.push(e);
        else if(typeof e === 'object')
            tipos.objects.push(e);
    });

    return tipos;
}
*/

// Solucion Nico
function dividePorTipo(arr){
    return {
        numeros: arr.filter( n => typeof n === 'number'),
        strings: arr.filter( n => typeof n === 'string'),
        objetos: arr.filter( n => typeof n === 'object'),
    }
}



const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);