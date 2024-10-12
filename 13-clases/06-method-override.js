class Entidad {
    constructor(id){
        this.id = id;
        this.created_at = new Date();
    }

    save() {
        console.log('Save en Entidad');
    }
}

class User extends Entidad{
    constructor(name) {
        super(1);
        this.name = name;
    }

    save() {
        super.save();
        console.log('Save en usuario');
    }
}


const u = new User('Chanchito Feliz');