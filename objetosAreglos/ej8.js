const propiedades={
    nombre:'',
    direccion:'',
    telefono:''
}

const objetoDePrueba={
    nombre:'mario',
    direccion:'santa ana',
    telefono:'69963696'
}
const objetoDePruebamalo={
    nombre:'mario',
    direccion:'santa ana',
    genero:'masculino'
}

const verificarPropiedades=(plantilla, objeto)=>{
    const propiedades=Object.keys(plantilla);
    for (let clave of propiedades) {
        if (!objeto[clave]) {
            console.log(`la propiedad ${clave} no existe`);
            return false; 
        }
    }
    return true;
}

console.log(verificarPropiedades(propiedades,objetoDePrueba))
console.log(verificarPropiedades(propiedades,objetoDePruebamalo))


