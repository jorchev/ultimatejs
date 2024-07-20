



function crearUsuario(nombre, email) {
    return {
        email,
        nombre,
        activo: true,
        recuperarClave: function (){
            console.log("Recupeando clave...");
        }
    };
}


let user1 = crearUsuario('Jorge','jorge.vega@evo-code.com');
let user2 = crearUsuario('Chanchito','chanchito@evo-code.com');

console.log(user1, user2);