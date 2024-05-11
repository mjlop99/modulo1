/*DESAROLLE UN ALGORITMO QUE LE PERMITA MOSTRAR LA HORA ACTUAL EN
UN MENSAJE, PARA ESTE EJERCICIO DEBERA DE DECLARAR LA INSTANCIA
FECHA PARA UNA NEW DATE() Y LAS VARIABLES RECEPTORAS DE LA HORA
(HORA, MINUTOS Y SEGUNDOS) SOLICITARLO LOS DATOS CON .GETHOURS(),
.GETMINUTES Y .GETSECONDS. */

class tiempo{
constructor(){
    this.fecha=new Date();
}
    hora() {
        return `${this.fecha.getHours()}`;
    }
    minutos() {
        return `${this.fecha.getMinutes()}`;
    }
    dia() {
        return `${this.fecha.getDate()}`;
    }
    segundos(){
        return `${this.fecha.getSeconds()}`;
    }
}

const hoy=new tiempo();

console.log(`La hora de hoy ${hoy.hora()} horas con ${hoy.minutos()} minutos y ${hoy.segundos()} segundos`);
console.log(hoy.dia());


