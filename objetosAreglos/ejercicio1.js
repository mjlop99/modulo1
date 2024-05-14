/* MUESTRE EN UNA TERMINAL LOS COMPORTAMIENTOS DE UN BEBE COMO
• LLORAR
• DORMIR
• COMER
LOS COMPORTAMIENTOS DEBEN DE INCLUIR SOLO UN MENSAJE CON LOS
ATRIBUTOS CORRESPONDIENTES PARA EL BEBE (ANTONIO, DE 3 MESES,
SONIA DE 5 MESES Y JAVIER DE 8 MESES). */

class bebe{
constructor(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}
    llorar() {
        return `${this.nombre} de ${this.edad} meses esta llorando ¡uaaah!`;
    }
    comer() {
        return `${this.nombre} de ${this.edad} meses esta comiendo`;
    }
    dormir() {
        return `${this.nombre} de ${this.edad} meses esta dormiendo`;
    }
}


const bebe1=new bebe('ANTONIO',3);
const bebe2=new bebe('SONIA',5);
const bebe3=new bebe('JAVIER',8);


let bebes=[bebe1,bebe2,bebe3];

bebes.forEach(bebe=>{
    console.log(bebe.llorar());
    console.log(bebe.comer());
    console.log(bebe.dormir()+'\n');
})