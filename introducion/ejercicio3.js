const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question('ingrese una cadena: ',(cadena)=>{
    console.log(cadena.toUpperCase());
})