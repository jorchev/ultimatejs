// let arr =  [1,2];
// arr = [];
// console.log(arr);


// let arr = [1,2];
// let arr2 = arr;
// arr = [];
// console.log(arr2,arr);


// let arr = [1,2];
// arr.length = 0;
// console.log(arr);


// let arr = [1,2];
// arr.splice(0, arr.length);
// console.log(arr);


// Forma menos recomendable (menos eficiente)
let arr = [1,2];
while(arr.length > 0){
    arr.pop();
}
console.log(arr);