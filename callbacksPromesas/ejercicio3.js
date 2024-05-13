function multiplicar(a,b,callback) {
    const resultado=a*b;
    callback(resultado)
}

multiplicar(3,5,(resultado)=>{
    console.log(`eñ resultado es ${resultado}`);
})
