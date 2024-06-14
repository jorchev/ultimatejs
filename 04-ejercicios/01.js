function cualEsMayor(a, b){
    // Mi solución
    if(a > b)
        return a;
    else if (a < b)
        return b;

    // Solución Nicolas
    // return a > b ? a : b;
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);