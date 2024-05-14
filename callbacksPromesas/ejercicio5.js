function operacionAsincrona(callback) {
    setTimeout(()=>{
        callback('operacion asincrona')
    },8000)
}

operacionAsincrona((mensaje)=>{
    console.log(mensaje);
})