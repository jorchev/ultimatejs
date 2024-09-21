const usuario = {
    nombre: 'Jorge',
    ciudadanias: ['México', 'Estados Unidos', 'España'],
    mostrarCiudadanias() {
        // Una funcion anonima no puede referenciar el contexto del objeto, este referencia a Window
        // this.ciudadanias.forEach(function (ciudadania){
        //     console.log(this.nombre, ciudadania);
        // });

        // Una fat arrow function no tiene contexto asi que this referencia al objeto (ES6)
        this.ciudadanias.forEach((ciudadania) => {
            console.log(this.nombre, ciudadania);
        });
    
    }
}

usuario.mostrarCiudadanias();