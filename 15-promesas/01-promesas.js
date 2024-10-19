let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hola mundo'), 5000);
});

promesa.then(
    valor => console.log(valor),
    e => console.log('error', e)
);