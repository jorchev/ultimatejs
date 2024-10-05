Object.prototype.isEqual = function (obj) { 
    // ...
}


// No tratar de extender prototipos de funciones constructoras que ya tiene JavaScript
// como son Object, Array, Number, Boolean, String, etc
let x = {};
x.isEqual({a: 1});