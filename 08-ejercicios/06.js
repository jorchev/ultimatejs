// tienes que usar reduce
function dividePorTipo(arr){
    let nuevo = arr.reduce((acc, el) => {
        let llave = typeof el;
        
        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        return acc;
    }, {});


    return nuevo;
}

const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
];

let arr = dividePorTipo(miArray);
console.log(arr);