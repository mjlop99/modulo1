const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const evaluarPar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`el numero ${numero} es par`);
  }
  console.log(`el numero ${numero} es inpar`);
};
r1.question("ingrese el numero: ", (numero) => {
  evaluarPar(numero);
});
module.exports=evaluarPar;
