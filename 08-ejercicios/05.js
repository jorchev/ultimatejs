const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium '},
    { edad: 13, nombre: 'Chanchito', plan: 'free'},
    { edad: 32, nombre: 'Fernanda', plan: 'free'},
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

function obtenerMayor(arr) {

    arr.sort((a,b) => {
        if(a.edad > b.edad) return -1;
        if(a.edad < b.edad) return 1;
        return 0;
    });

    return arr[0];

}

// Solucion Nico
function obtenerMayorFor(arr) {

    let mayor = arr[0];
    for (let usuario of arr){
        if(mayor.edad < usuario.edad) {
            mayor = usuario;
        }
    }

    return mayor;
}

// Tarea Nico
function obtenerMayorReduce(arr) {

    const mayor = arr.reduce((previous, current) => {
        return current.edad > previous.edad ? current : previous;
    });

    return mayor;

}

const mayor = obtenerMayorReduce(usuarios);

console.log(mayor);