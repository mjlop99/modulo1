const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question('ingrese su nombre: ',(nombre)=>{
r1.question('ingrese su apellido: ',(apellido)=>{
    console.log(`tu nombre es ${nombre} ${apellido}`);
})

})