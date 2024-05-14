
const evaluarPar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`el numero ${numero} es par`);
  }
  console.log(`el numero ${numero} es inpar`);
};
//   r1=crearInterfaz();
// r1.question("ingrese el numero: ", (numero) => {
//   evaluarPar(numero);
// });
module.exports=evaluarPar;
