const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("ingrese una palabra: ", (palabra) => {
  const palabraInvertida = palabra.split("").reverse().join("");
  if (palabraInvertida===palabra) {
    console.log(`${palabra} es un palindromo`);
  }else{
    console.log(`${palabra} no es un palindromo`);
  }
});
