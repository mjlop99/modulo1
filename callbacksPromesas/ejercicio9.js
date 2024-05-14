function tarea1() {
    return new Promise(resolve=>{
     setTimeout(()=>{
         resolve('tarea1 completada');
     },2000)
    })
 }
function tarea2() {
    return new Promise(resolve=>{
     setTimeout(()=>{
         resolve('tarea2 completada');
     },2000)
    })
 }
function tarea3() {
    return new Promise(resolve=>{
     setTimeout(()=>{
         resolve('tarea3 completada');
     },2000)
    })
 }

 Promise.all([tarea1(),tarea2(),tarea3()]).then((resultado)=>{
    console.log('tareas completadas');

    resultado.forEach(r=>{console.log(r);})
 }).catch(errror=>{console.log(`error ${error}`);});