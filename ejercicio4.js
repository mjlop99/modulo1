const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("ingrese la cadena: ",(cadena)=>{
    r1.question('ingrese la palabra que sera cambiada:',(cambio)=>{
        r1.question('ingrese la nueva palabra: ',(nueva)=>{
            console.log(cadena.replace(new RegExp(cambio,'gi'),nueva));
        })
    })
})