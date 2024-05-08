const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("ingrese una cadena: ", (cadena) => {
  const palabras = cadena.split(' ');
  const frasecapitalizada=palabras.map(palabra=>
    palabra[0].toUpperCase()+palabra.slice(1)
  ).join('')

  console.log(`la cadena capitalizada es: ${frasecapitalizada}`);
});
