const obj = {
    nombre: 'Jorge',
}

function extender(usuario){
    // Mi solución
    // usuario.login = () => console.log('logeando usuario', usuario.nombre);
    // usuario.logout = () => console.log('cerrando sesión', usuario.nombre);
    // return usuario;

    // Solución Nico
    const metodos = {
        login() {
            console.log('logeando usuario', this.nombre);
        },
        logout() {
            console.log('cerrando sesión', this.nombre);
        }
    };

    return Object.assign(usuario, metodos);

}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
usuario.logout();