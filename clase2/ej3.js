let personas=[
{nombre:'sergio',edad:33,ciudad:'san salvador'},
{nombre:'marta',edad:35,ciudad:'san salvador'},
{nombre:'marlene',edad:50,ciudad:'santa tecla'},
{nombre:'sonia',edad:25,ciudad:'san miguel'},
]

function filtrarPersona(personas,ciudad) {
    return personas.filter(persona=>persona.edad>=30 && persona.ciudad===ciudad)
}

let personasFiltradas=filtrarPersona(personas,'san salvador');

console.log(personasFiltradas);