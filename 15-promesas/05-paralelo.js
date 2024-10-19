const p1 = Promise.reject('Falló en conexion al servidor');
const p2 = Promise.resolve(42);
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

// Devuelve las promesas, pero con una falle ejecuta el catch
// Promise.all([p1, p2, p3])
//     .then(valores => console.log('all', valores))
//     .catch(e => console.log('error en all', e));

// Devuelve la primara promesa que se ejecute pero si una falla, ejecuta catch
// Promise.race([p1, p2, p3])
//     .then(valor => console.log('race', valor))
//     .catch(e => console.log('error en race', e));

// Ejecuta las promesas si una falla pasa a la siguiente hasta que una se ejecute, 
// en caso de que todas las promesas fallen ejecuta el catch
// Promise.any([p1, p2, p3])
//     .then(valor => console.log({ valor }))
//     .catch(e => console.log({ e }));

// Ejecuta todas las promesas e indica cual falla y cual se ejecuta, en caso de que
// todas las promesas fallen no ejecuta el catch
Promise.allSettled([p1, p2, p3])
    .then(valores => console.log({ valores }))
    .catch(e => console.log(e));