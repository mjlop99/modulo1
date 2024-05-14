class Animal {
    constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    }
    sonido() {
    console.log('Haciendo sonidos...');
    }
   }
   const perro = new Animal('Odi', 'Perro');
   perro.sexo='macho'
   console.log(perro.nombre);
   console.log(perro.sexo   );
   perro.sonido();