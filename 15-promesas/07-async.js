let promesa1 = param1 => new Promise((res, rej) => {
    // calcular algo...
    const b = 'Hola mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res,rej) => {
    // calculamos algo...
    res(param2 + ', Hola Mundo');
});

let promesa3 = (param1, param2) => new Promise((res,rej) => {
    // calculamos algo...
    res('Chanchito Feliz');
});


// Piramide de la muerte
// Triangulo de la tortura
// Malas practicas 
// Promise.resolve('Primer valor')
// .then(a => {
//     return promesa1(a)
//         .then(b => {
//             return b => promesa2(b)
//                 .then(() => promesa3(a, b))
//         })
// });

async function main() {
    try {
        const a = await Promise.resolve('Primer valor');
        const b = await promesa1(a);
        const _ = await promesa2(b);
        promesa3(a, b);
    } catch (error) {
        console.log({error});
    }
}


main();