let productoA={
    nombre:'camisa',
    precio:25,
    cantidad:5
}
let productoB={
    nombre:'jeans',
    precio:40,
    cantidad:3
}
let costoTotalProductoA=productoA.precio*productoA.cantidad
let costoTotalProductoB=productoB.precio*productoB.cantidad

console.log(`PRODUCTA COSTO TOTAL PRODUCTO A: ${costoTotalProductoA}`);
console.log(`PRODUCTA COSTO TOTAL PRODCTO B: ${costoTotalProductoB}`);
console.log(`PRODUCTA COSTO TOTAL: ${costoTotalProductoA+costoTotalProductoB}`);