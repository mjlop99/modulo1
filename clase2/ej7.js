let personas=[
    {nombre:'sergio',edad:33,ciudad:'san salvador'},
    {nombre:'marta',edad:35,ciudad:'san salvador'},
    {nombre:'marlene',edad:50,ciudad:'santa tecla'},
    {nombre:'sonia',edad:25,ciudad:'san miguel'},
    ]
    
    function ordenar(personas, propiedad) {
        return personas.sort((a, b) => {
            if (a[propiedad] < b[propiedad]) return -1;
            if (a[propiedad] > b[propiedad]) return 1;
            return 0;
        });
    }
    
    let ordenamiento=ordenar(personas,'edad');
    
    console.log(ordenamiento);