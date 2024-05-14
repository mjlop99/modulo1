const evaluar = require("./ejercicio1.js");
const mayorDeTres = require("./ejercicio2.js");
const factorizar = require("./ejercicio3.js");
const evaluarPar = require("./ejercicio4.js");
const combinacionDeColores = require("./ejercicio5.js");
const tipoCategoria = require("./ejercicio7.js");
const evaluacionDeMes = require("./ejercicio6.js");
const readline = require("./readLine.js");

const r1 = readline();

const preguntarMenu = () => {
  r1.question(
    `ingrese actividad a realizar
    1.evaluar su un numero es positivo
    2.evaluar el mayor de 3 numeros
    3.factorial de un numero
    4.evaluar si un numero es par
    5.combinacion de colores
    6.nombre del mes
    7.tipo de vehiculo
    8. salir del menu
    tu opcion: `,
    (actividad) => {
      let opcion = parseInt(actividad);
      if (opcion === 1) {
        r1.question("Ingrese un número: ", (numero) => {
          evaluar(numero);
          seguirTrabajando();
        });
      } else if (opcion === 2) {
        r1.question("ingrese el primer numero: ", (numero1) => {
          r1.question("ingrese el segundo numero: ", (numero2) => {
            r1.question("ingrese el tercer numero: ", (numero3) => {
              mayorDeTres(numero1, numero2, numero3);
              seguirTrabajando();
            });
          });
        });
        seguirTrabajando();
      } else if (opcion === 3) {
        r1.question("ingrese el el numero a factorizar: ", (numero) => {
          factorizar(numero);
          seguirTrabajando();
        });
      } else if (opcion === 4) {
        r1.question("ingrese el numero: ", (numero) => {
          evaluarPar(numero);
          seguirTrabajando();
        });
      } else if (opcion === 5) {
        r1.question("ingrese el primer color: ", (color1) => {
          r1.question("ingrese el segundo color: ", (color2) => {
            combinacionDeColores(color1, color2);
            seguirTrabajando();
          });
        });
      } else if (opcion === 6) {
        r1.question("digite el numero del mes a conocer: ", (numeroMes) => {
          evaluacionDeMes(numeroMes);
          seguirTrabajando();
        });
      } else if (opcion === 7) {
        r1.question("ingrese el vehiculo: ", (categoria) => {
          tipoCategoria(categoria);
          seguirTrabajando();
        });
      } else if (opcion === 8) {
        r1.close();
      }else {
        console.log("Opción no válida. Por favor, ingrese un número válido.");
        seguirTrabajando();
      }
    }
  );
};

const seguirTrabajando = () => {
  r1.question(
    `¿Desea seguir trabajando?
    1. Sí
    2. No
    Tu opción: `,
    (opcion) => {
      if (parseInt(opcion) === 1) {
        preguntarMenu(); // Vuelve a preguntar el menú si el usuario desea seguir trabajando
      } else {
        r1.close(); // Cierra la interfaz readline si el usuario no desea seguir trabajando
      }
    }
  );
};

preguntarMenu();
