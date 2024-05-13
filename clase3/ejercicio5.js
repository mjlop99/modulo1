const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const colores=(color1,color2)=>{
  color1=color1.toLowerCase();
  color2=color2.toLowerCase();
  
  if (color1==='azul' && color2==='amarillo') {
    console.log('verde');
  }else if (color1==='azul' && color2==='morado') {
    console.log('verde');
  } else if (color1==='rojo' && color2==='amarillo'){
    console.log('verde');
  } else{
    console.log('la combinacion no se encuenta disponible');
  }
}
r1.question("ingrese el primer color: ",(color1)=>{
  r1.question("ingrese el segundo color: ",(color2)=>{
   colores(color1,color2);
  })
  
})

module.exports=colores;