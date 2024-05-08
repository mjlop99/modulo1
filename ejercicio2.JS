const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("ingrese la cadena: ", (cadena) => {
  
  console.log(`la cadena tiene ${cadena.length} caracteres`);
});

