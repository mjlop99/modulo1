let numeros=[1,2,3,4,5,6,7,8,9,10];
let pares=numeros.filter(numero=>numero%2===0).reduce((total,numero)=>total+numero);
console.log(pares);