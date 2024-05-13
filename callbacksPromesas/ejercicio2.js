const { error } = require("console");

function multiplicarPromise(a,b) {
    return new Promise((resolve,reject)=>{
        const resultado=a*b;

        if (isNaN(resultado)) {
            reject('ERROR ARGUMENTOS NO VALIDOS');
        }else{
            resolve(resultado);
        }
    })
}

multiplicarPromise(2,'f').
    then((resultado)=>{
        console.log(resultado);
    }).
    catch((error)=>{
        console.log(error);
    })
