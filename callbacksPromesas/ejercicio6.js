function paso1() {
   return new Promise(resolve=>{
    setTimeout(()=>{
        resolve(5);
       console.log('paso1 completado')
    },2000)
   })
}

function paso2(num) {
    return new Promise(resolve=>{
     setTimeout(()=>{
        resolve(num*2)
        console.log('paso2 completado')
     },2000)
    })
 }
 function paso3(num) {
    return new Promise(resolve=>{
     setTimeout(()=>{
        resolve(num+2)
        console.log('paso3 completado')
     },2000)
    })
 }

 paso1().
 then(paso2).
 then(paso3).
 then(resultado=>{
    console.log('resultado es: ',resultado);
 })
