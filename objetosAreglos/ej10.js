const estudiantes = [
  { nombre: "Laura Rodríguez", edad: 22, genero: "Femenino" },
  { nombre: "Sofía Pérez", edad: 25, genero: "Femenino" },
  { nombre: "Diego Gómez", edad: 26, genero: "Masculino" },
  { nombre: "Pedro García", edad: 21, genero: "Masculino" },
  { nombre: "Ana Martínez", edad: 20, genero: "Femenino" },
];

const profesores = [
  { nombre: "María Fernández", edad: 29, genero: "Femenino" },
  { nombre: "Juan González", edad: 23, genero: "Masculino" },
  { nombre: "Luis López", edad: 27, genero: "Masculino" },
  { nombre: "Diego Martínez", edad: 24, genero: "Masculino" },
  { nombre: "Pedro García", edad: 28, genero: "Masculino" },
];

const unirListas=(lista1,lista2)=>{
    return lista1.concat(lista2)
}

console.log(unirListas(estudiantes,profesores));