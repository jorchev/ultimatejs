let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25
};

for (let prop in user){
    console.log(prop, user[prop]);
}


// Para recorrer arrays es mejor utilizar for of
let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales){
    console.log(indice, animales[indice]);
}