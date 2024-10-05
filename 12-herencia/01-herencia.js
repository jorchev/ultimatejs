function User() {
    this.name = 'Hola Mundo';
}
function Product() {
    this.name = 'Producto';
}

function Entidad() {}
Entidad.prototype.save = function() {
    console.log('guardando', this.name);
}
Entidad.prototype.validate = function() {
    console.log('validando', this.name);
}

// Formas antiguas de settear prototipos, antes de ES6
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

// Forma actual de settear prototipos con ES6
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
console.log(user);