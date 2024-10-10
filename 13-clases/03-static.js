class Restaurants {
    static cantidad = 12;

    constructor(name){
        this.name = name;
    }

    getTimetable() { // obtener horario
        console.log('Horario restaurante');
    }

    static getRestaurant(id){
        return new Restaurants('BBQ');
    }
}

const r = Restaurants.getRestaurant(12);