const listaDeCompras = {
    procesador: 5,
    sdd: 3,
    monitor: 2,
    mouse: 1,
    teclado: 12
};

const mostrarLista=(objeto)=>{
    let total='';
    let lista=Object.keys(objeto)
    lista.forEach(element => {
        total+=`se ha comprado ${objeto[element]} ${element}, \n`
    });
    return total;
};
console.log(mostrarLista(listaDeCompras));