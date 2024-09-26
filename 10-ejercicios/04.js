function suma(fn, ...rest) {
    fn(rest.reduce((acc,el) => acc + el));
}

suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4, 5);