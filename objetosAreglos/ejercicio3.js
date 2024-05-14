/* DESARROLLAR UN LOGARITOMO QUE PERMITA MOSTRAR EL IMC DE UNA
PERSONA, UTILIZANDO UN METODO MOSTRAR LA RESPUESTA SEGÚN LOS
DATOS QUE SOLICITA LA FORMULA.
 */

class IMC{
    constructor(peso,altura){
        this.peso=peso;
        this.altura=altura;
    }

    imcPersona(){
        return this.peso/this.altura**2;
    }
}

const persona1=new IMC(65,160);

let personas=[persona1]

personas.forEach(persona=>{
    console.log(persona.imcPersona());
})