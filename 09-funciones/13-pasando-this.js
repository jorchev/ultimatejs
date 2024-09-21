function saludar(...rest){
    console.log(this, rest);
}

// saludar.call({ propiedad: 'hola mundo'}, 1, 2);

// saludar.apply({ propiedad: 'hola mundo'}, [1 ,4]);

// let nuevoSaludar = saludar.bind({ propiedad: 'hola mundo' });
// nuevoSaludar(1,5);

saludar.bind({ propiedad: 'hola mundo'})(1,6);


// Aplicando códgio legacy que no soporte Fat Arrow Funcions


const usuario = {
    nombre: 'Jorge',
    ciudadanias: ['México', 'Estados Unidos', 'España'],
    mostrarCiudadanias() {

        // Utilizando bind
        // this.ciudadanias.forEach(function (ciudadania){
        //     console.log(this.nombre, ciudadania);
        // }.bind(this));

        // Utilizando una variable
        // let self = this;
        // this.ciudadanias.forEach(function (ciudadania){
        //     console.log(self.nombre, ciudadania);
        // });


        // Pasandole this como segundo parametro a forEach pero no todos los métodos soportan este parametro
        this.ciudadanias.forEach(function (ciudadania){
            console.log(this.nombre, ciudadania);
        }, this);
    }
}

usuario.mostrarCiudadanias();