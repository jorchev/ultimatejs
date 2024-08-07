const ahora = new Date();
// console.log(ahora);
const fecha = new Date('January 27 1986 19:15 GMT-0700');
console.log(fecha);

const fecha2 = new Date(1986, 0, 27, 19, 15);
const fecha3 = new Date(1986, 0, 27, 19+15, 15);

console.log(fecha3);

console.log('datestring', fecha3.toDateString());
console.log('ISOstring', fecha3.toISOString());
console.log('timestring', fecha3.toTimeString());

fecha3.setFullYear(1978);
console.log(fecha3);