

const evaluar = (numero,r1) => {
  if (numero >= 1) {
     console.log("el numero es positivo "+ numero);
  } else if (numero <= -1) {
     console.log("el numero es negativo "+ numero);
  } else {
     console.log("numero es 0");
  }
};

//   r1=crearInterfaz();
//   r1.question("ingrese un numero", (numero) => {
//   evaluar(numero);
// });

// r1.close()
module.exports = evaluar;