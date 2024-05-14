function retrasarPromesa(ms,) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`la promesa se ha resulto en ${ms} milisegundo`)
        },ms)
    })

}

retrasarPromesa(2000).
then(resolve=>{
console.log(resolve);
})

