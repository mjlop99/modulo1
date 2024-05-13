
const tipoCategoria=(categoria)=>{
    let tipoVehiculo;
    switch (categoria.toLowerCase()) {
        case 'moto':
            tipoVehiculo='motocicleta'
            break;
        case 'auto':
            tipoVehiculo='automovil'
            break;
        case 'camion':
            tipoVehiculo='super camion'
            break;
        case 'bicicleta':
            tipoVehiculo='super cicleta'
            break;
    
        default:
            tipoVehiculo='no existe esta categoria'
            break;
    }
    console.log(tipoVehiculo);
}



module.exports=tipoCategoria