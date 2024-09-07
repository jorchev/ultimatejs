const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium'},
    { edad: 13, nombre: 'Chanchito', plan: 'premium'},
    { edad: 32, nombre: 'Fernanda', plan: 'free'},
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
    { edad: 38, nombre: 'Jorge', plan: 'gold'},
];

// esta función existe en Object.groupBy
function groupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        let llave = el[prop];
        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        return acc;
    }, {});
}

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });