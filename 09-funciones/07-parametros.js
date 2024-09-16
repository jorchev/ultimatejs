/**
 * {
 * url: ...
 * bucket: amazon s3
 * port: 80
 * }
 */

function configurarAPI(url, bucket = 145, port = 80){
    return `${url}/${bucket}:${port}`;
}


console.log(configurarAPI('https://evo-code.com'));