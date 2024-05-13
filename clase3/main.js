
const readline = require("readline");

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//const evaluarNumero=require('./ejercicio1.js');
//const evaluarNumeros=require('./ejercicio2.js');

const preguntarMenu=()=>{
    r2.question(`ingrese actividad a realizar
    1.evaluar su un numero es par
    2.evaluar el mayor de 3 numeros
    3.factorial de un numero
    4.evaluar si un numero es par
    5.combinacion de colores
    6.nombre del mes
    7.tipo de vehiculo
    8. salir del menu
    `,(actividad1)=>{
        let actividad=parseInt(actividad1);
        if (actividad===8) {
            r2.close();
            return;
        }else if (actividad===1) {
            r2.question("ingrese un numero", (numero) => {
                const evaluarNumero=require('./ejercicio1.js');
                evaluarNumero(re2)
              });
                
        }else if (condition===2) {
        }else if (condition===3) {
        }else if (condition===4) {
        }else if (condition===5) {
        }else if (condition===6) {
        }else if (condition===7) {
            
        } 
        /*r1.question(`desea seguir trabajando 
        1.si
        2.no`,seguir=>{
            seguir=parseInt(seguir);
            if (seguir===1) {
                preguntarMenu();
            }else{
                return;
            }
        })*/

    })
}

preguntarMenu();
