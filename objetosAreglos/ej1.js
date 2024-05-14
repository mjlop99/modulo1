const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function contarPalabras(array) {
    let contadorPalabras={}
    array.forEach(cadena => {
        let palabras=cadena.split(/\s+/);
        palabras.forEach(palabra=>{
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++;
            }else{
                contadorPalabras[palabra]=1;
            }
        })
    });
    return contadorPalabras;
}

let palabrasArray=['hola buenos dias','Hola feliz noche'];
let resultado=contarPalabras(palabrasArray);

console.log(resultado);