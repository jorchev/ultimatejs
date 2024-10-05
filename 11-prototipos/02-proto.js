function User() {
    this.name = 'hola mundo';
    // método de instancia
    this.logger = function() {
        console.log('loggeando...');
    }
}

// método de prototipo
User.prototype.login = function () {
    console.log('iniciando sesion', this.name);
    this.logger();
}

User.prototype.toString = function () {
    console.log('Usuario:', this.name);
}

const user1 = new User();
const user2 = new User();

console.log(user1);
user1.login();