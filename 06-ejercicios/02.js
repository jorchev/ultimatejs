// Factory functions
function createUsuario(name){
    return {
        id: Math.random(),
        name: name // name - se obtiene el mismo resultado
    }
}

let user = createUsuario('Felipe');
let user2 = createUsuario('Chanchito');

console.log(user, user2);