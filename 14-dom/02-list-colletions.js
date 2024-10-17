let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

// let item1 = collection.namedItem('chanchito');
// let item2 = collection.item(3);
// let item3 = collection[3];

// HTMLCollections no tiene formas ni métodos que permitan iterarlo
// collection.forEach(x => console.log(x));

// Iterar elementos
// for (let el of collection){
//     console.log(el);
// }

// Array.from(collection).forEach(x => console.log(x));
// [...collection].forEach(x => console.log(x));


// let item1 = list.item(3);
// let item2 = list[3];

list.forEach(x => console.log(x));

// entries, keys y values.
let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach(x => console.log(x));