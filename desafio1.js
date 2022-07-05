
alert("Bienvenid@ a Mi_Perfumería")

const precioIVA = (precio, iva) => precio * iva
const iva = 1.16

let recotizar, nombre, marca  

do {

  do {
    nombre = prompt("Ingrese su nombre y apellido:").toUpperCase()
  }while(!isNaN(nombre) || nombre.length <0)
 
  do {
  email = prompt("Ingresar email:").toUpperCase()
  }while(!isNaN(email) || email.length <0)
  
  alert("Las marcas de perfumes disponibles son las siguientes: ARMANI, GUCCI, FENDI, ABERCROMBIE y HUGO BOSS.")
  
  do {
  marca = prompt("Ingrese la marca de su elección:").toUpperCase()
  }while(!isNaN(marca) || marca.length <0)

  switch(marca) {

      case "ARMANI": 
        precio = 3000 
        alert(`Señor@ ${nombre} el precio por el perfume ${marca} es de $${precioIVA(precio, iva)} con IVA incluido y el presupuesto le será enviado al email: ${email}`) 
        break
       
      case "GUCCI": 
        precio = 2500 
        alert(`Señor@ ${nombre} el precio por el perfume ${marca} es de $${precioIVA(precio, iva)} con IVA incluido y el presupuesto le será enviado al email: ${email}`)  
        break
     
      case "FENDI": 
        precio = 2759 
        alert(`Señor@ ${nombre} el precio por el perfume ${marca} es de $${precioIVA(precio, iva)} con IVA incluido y el presupuesto le será enviado al email: ${email}`)  
        break 
     
      case "ABERCROMBIE":
        precio = 3675 
        alert(`Señor@ ${nombre} el precio por el perfume ${marca} es de $${precioIVA(precio, iva)} con IVA incluido y el presupuesto le será enviado al email: ${email}`)  
        break 

      case "HUGO BOSS": 
        precio = 3268 
        alert(`Señor@ ${nombre} el precio por el perfume ${marca} es de $${precioIVA(precio, iva)} con IVA incluido y el presupuesto le será enviado al email: ${email}`) 
        break 
        
      default:
        alert("La marca ingresada no está disponible")
        break 

  }
    recotizar = prompt("¿Desea obtener un nuevo presupuesto?  Ingrese Si o No").toLowerCase() 

  }while(recotizar!="no")
  




