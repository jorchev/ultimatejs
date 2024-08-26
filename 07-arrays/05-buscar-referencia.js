const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: "Feliz" }
];

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito' });

// const resultado = usuarios.find(function(usuario){
//     return usuario.id === 1;
// });

const resultado = usuarios.find((usuario) => 
    usuario.name === 'Chanchito');

const indice = usuarios.findIndex((usuario) => 
    usuario.name === 'Chanchito');

console.log(resultado);
console.log(indice);