const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("ingrese la cadena: ",(cadena)=>{
    const inicio=6;
    const longitud=5;
            console.log(cadena.substring(inicio,inicio+longitud));
})