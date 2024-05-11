const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("ingrese la cadena: ",(cadena)=>{
    const palabras=cadena.split(' ');
            console.log(`cadena tiene un total de ${palabras.length} palabras`);
})