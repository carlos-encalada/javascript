alert("Bienvenid@ a Mi_Perfumería")


class Perfume {
  constructor(id ="Undefined" , nombre = "Undefined" , marca ="Undefined", precio = 10000, ml= 75) { 
    this.id = id;
    this.nombre = nombre;
    this.marca = marca; 
    this.precio = precio;
    this.ml = ml;
  }
}

function precioIVA(arrayPerfumes){
  let nombrePerfumes = prompt("Ingrese el nombre del perfume").toUpperCase()
  let perfumeEncontrado = arrayPerfumes.find(perfume => perfume.nombre  === nombrePerfumes)
  let precioConIVA = parseFloat(perfumeEncontrado.precio * 1.16)
  
    if(perfumeEncontrado == undefined) {
      alert("Perfume no encontrado, no se puede mostrar el precio final.")
    }

    else {
      alert(`El precio con IVA es de: $ ${precioConIVA}`)
      }
}

function buscarPerfume(arrayPerfumes) {
  let nombrePerfumes = prompt("Ingrese el nombre de un perfume").toUpperCase()

  let perfumeEncontrado = arrayPerfumes.find(perfume => perfume.nombre == nombrePerfumes)

    if(perfumeEncontrado == undefined) {
      alert("Perfume no encontrado")
    }
    else {
    console.log(perfumeEncontrado)
    }
}

function buscarMarca(arrayPerfumes) {
  let marcaPerfumes = prompt("Ingrese la marca de un perfume").toUpperCase()

  let marcaEncontrada = arrayPerfumes.find(perfume => perfume.marca == marcaPerfumes)

  if(marcaEncontrada == undefined) {
    alert("Perfume no encontrado")
  }
  else {
  console.log(marcaEncontrada)
  }
}

function mostrarArray(arrayPerfumes) {
 
  arrayPerfumes.forEach((perfume) => {
  console.log(perfume)
})
}


const arrayPerfumes = []
let id, nombre, marca, precio, ml, ingresarPerfume, respuesta, peticion

do{
  alert("Ingrese los datos que se piden a continuación:")
    
    do{
      id = prompt("Ingrese el ID del perfume:").toUpperCase()
    }while(id.length <= 0)
   
    do{
      nombre = prompt("Ingrese el modelo del perfume:").toUpperCase()
      marca = prompt("Ingrese la marca del perfume:").toUpperCase()
    }while(nombre.length <= 0 || marca.length <= 0)
   
    do{  
      precio = parseFloat(prompt("Ingrese el precio del perfume:"))
      ml = parseInt(prompt("Ingrese la presentación en ml del perfume:"))
    }while(isNaN(precio) || isNaN(ml) || (precio <= 0 || ml <= 0 ))
  
  const perfume = new Perfume(id, nombre, marca, precio, ml)
    arrayPerfumes.push(perfume)

  ingresarPerfume = prompt("¿Desea ingresar un nuevo producto?").toLowerCase()

  console.log(perfume)

}while(ingresarPerfume != "no")

  do{
    respuesta = parseInt(prompt(`Ingrese 1 para: 
    1- Buscar un perfume.
    2- Buscar por marca.
    3- Buscar precio final.
    4- Mostrar lista de perfumes por nombre.
    `))
  
  }while(respuesta < 1 || respuesta  > 4)

  switch(respuesta){
    case 1: 
      buscarPerfume(arrayPerfumes)
      break
    case 2: 
      buscarMarca(arrayPerfumes)
      break
    case 3: 
      precioIVA(arrayPerfumes)
      break
    case 4:
      mostrarArray(arrayPerfumes)
      break
    default:
      alert(`Opción no válida`)
      break1
  }


