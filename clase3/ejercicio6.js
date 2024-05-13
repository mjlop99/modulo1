const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const mes=()=>{
    let nombreMes='';
    switch(parseInt(numeroMes)){
        case 1:
            nombreMes='enero';
            break;
        case 2:
            nombreMes='febrero';
            break;
        case 3:
            nombreMes='marzo';
            break;
        case 4:
            nombreMes='abril';
            break;
        case 5:
            nombreMes='mayo';
            break;
        case 6:
            nombreMes='junio';
            break;
        case 7:
            nombreMes='julio';
            break;
        case 8:
            nombreMes='agosto';
            break;
        case 9:
            nombreMes='septiembre';
            break;
        case 10:
            nombreMes='octubre';
            break;
        case 11:
            nombreMes='noviembre';
            break;
        case 12:
            nombreMes='diciembre';
            break;
        default:
            nombreMes='no existe'
    }
    console.log(nombreMes)
}
r1.question('digite el numero del mes a conocer: ',numeroMes=>{
    mes(numeroMes);
});
module.exports=mes;