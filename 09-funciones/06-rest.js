const suma = (a,b, ...rest) => {
    console.log(rest);
}

suma(1,2,3,4,5,6);


const logMsg = (desc, ...msgs) => {
    for(let msg of msgs){
        console.log(desc,msg);
    }
}

// logMsg('Servidor:', 'Error 1', 'Petición aceptada', 'Socket activo');

let mensajes = ['Error 1', 'Petición aceptada', 'Socket activo'];

// Esto funciona con las fat arrow functions y con funciones normales
logMsg('Cliente móvil:', ...mensajes, 'Otro error!');
