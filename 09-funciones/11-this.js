// objeto - this hace referencia a un objeto
// funcion - this hace referencia al objeto window, global
// new - this hace referencia al objeto que será creado

console.log('Objeto')
const user = {
    name: 'Jorge',
    login() {
        console.log(this);
    }
};


user.logout = function logout(){
    console.log(this);
}

user.logout();


console.log('Funcion');
function log() {
    console.log(this);
}

log();

console.log('Funcion constructora');
function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

/**
 * Se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retrona nada, entonces retorna this
 */

const l = new Log('Hola mundo');