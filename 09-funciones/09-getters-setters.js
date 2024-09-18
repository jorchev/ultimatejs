const usuario = {
    nombre: 'Chanchito',
    apellido: 'Feliz',
    get nombreCompleto () {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto (valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};


console.log(usuario.nombreCompleto);
usuario.nombreCompleto = 'Hola Mundo';
console.log(usuario.nombreCompleto);
console.log(usuario);