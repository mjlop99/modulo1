const evaluar = require("./ejercicio1.js");
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
        // Implementa la lógica para esta opción
        seguirTrabajando();
      } else if (opcion === 3) {
        // Implementa la lógica para esta opción
        seguirTrabajando();
      } else if (opcion === 4) {
        r1.close(); // Cierra la interfaz readline y termina el programa
      } else {
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
