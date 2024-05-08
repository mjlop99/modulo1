const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("ingrese una palabra: ", (palabra) => {
  const vocales = palabra.match(/[aeiou]/gi);
  const numeroVocales=vocales?vocales.length:0;
  console.log(`la ${palabra} tiene ${numeroVocales} vocales`);
});
