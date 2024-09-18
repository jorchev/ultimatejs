const config = {
    url: 'https://holamundo.io',
    direccion: {
        calle: '16 avenida 14',
        numero: 1600
    }
}

function webserver({ url, direccion: { calle } }) {
    // const {url} = config;
    console.log( calle );
    return url;
}

const configArr = [
    'https://evo-code.com',
    145,
    80
]

function webserver2([url, ...rest]){ // ...rest Tambien aplica a los objetos
    console.log(rest);
    return url;
}

console.log(webserver(config));
console.log(webserver2(configArr));