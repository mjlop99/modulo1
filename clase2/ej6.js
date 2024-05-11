let personas=[
{nombre:'sergio',edad:33,ciudad:'san salvador'},
{nombre:'marta',edad:35,ciudad:'san salvador'},
{nombre:'marlene',edad:50,ciudad:'santa tecla'},
{nombre:'sonia',edad:25,ciudad:'san miguel'},
]

function buscarPorNombre(personas,nombre) {
    return personas.find(persona=>persona.nombre===nombre)
}

let personaBuscada=buscarPorNombre(personas,'sonia');

console.log(personaBuscada);