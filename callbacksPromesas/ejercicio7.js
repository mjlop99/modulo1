function dividir(a,b,callback) {
    if (b===0) {
        callback('error:el divisor no puede ser cero')
    }else{
        const resultado=a/b;
        callback(null,resultado);
    }
}

dividir(10,0,(error,resultado)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(resultado);
    }
});