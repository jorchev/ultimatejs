function ordenar(texto, fn){
    let resultado = texto.toLowerCase()
        .replace(' ','')
        .split('')
        .sort()
        .join('')

    fn(resultado);
}

ordenar('Hola Mundo', console.log);