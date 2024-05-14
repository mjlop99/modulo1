
const factorizar=(numero)=>{
  numero = parseInt(numero);
  let total=1;
  for (let i = 1; i <= numero; i++) {
    total *= i;
  }
  console.log("el resultado es " + total);
}
//   r1=crearInterfaz();
// r1.question("ingrese el el numero a factorizar: ", (numero) => {
//   factorizar(numero);
// });
module.exports=factorizar;