const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

// Promise.all([p1, p2, p3])
//     .then(valores => console.log('all', valores))
//     .catch(e => console.log('error en all', e));


Promise.race([p1, p2, p3])
    .then(valor => console.log('race', valor))
    .catch(e => console.log('error en race', e));