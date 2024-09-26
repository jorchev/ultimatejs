const obj = {
    nombre: 'Jorge',
};

function Extender() {
    this.login = function (){
        console.log('logeando usuario', this.nombre);
    };
    this.logout = function (){
        console.log('cerrando sesión', this.nombre);
    }
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();