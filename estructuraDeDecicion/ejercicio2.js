
const evaluar = (numero1, numero2, numero3) => {
    // Convertimos los strings a enteros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = parseInt(numero3);

    if (numero1 > numero2 && numero1 > numero3) {
        console.log(`numero ${numero1} es el mayor de los 3`);
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log(`numero ${numero2} es el mayor de los 3`);
    } else if (numero3 > numero1 && numero3 > numero2) {
        console.log(`numero ${numero3} es el mayor de los 3`);
    } else if (numero1 === numero2 && numero1 === numero3) {
        console.log(`todos los numeros son iguales`);
    } else if (numero1 === numero2 && numero1 > numero3) {
        console.log(`numero ${numero1} es el mayor de los 3`);
    } else if (numero1 === numero3 && numero1 > numero2) {
        console.log(`numero ${numero1} es el mayor de los 3`);
    } else if (numero2 === numero3 && numero2 > numero1) {
        console.log(`numero ${numero2} es el mayor de los 3`);
    } else {
        console.log(`numeros iguales`);
    }
}
/*  r1=crearInterfaz();
    r1.question("ingrese el primer numero: ", (numero1) => {
  r1.question("ingrese el segundo numero: ", (numero2) => {
    r1.question("ingrese el tercer numero: ", (numero3) => {
        // evaluar(numero1,numero2,numero3);
    });
  });
});
¨*/
module.exports=evaluar;
