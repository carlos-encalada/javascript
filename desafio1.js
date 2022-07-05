
/* Bienvenida al Programa*/
alert("Bienvenid@ a Mi_Perfumería")

/*Se declara una función flecha y una variable constante de iva*/
const precioIVA = (precio, iva) => precio * iva
const iva = 1.16

/*Se definen variables sin asignar*/
let recotizar, nombre, marca  

/*Se define un bucle do/while principal que va a correr en tanto la persona usuaria no quiera realizar más cotizaciones*/
do {

  /* Se utilizan bucles do/while anidados para que la persona usuaria tenga que ingresar: nombre, apellido, email y marca. Se hace una comprobación para que no pueda ingresar números.*/
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

/*Se utiliza switch para la comprobación de casos dependiendo de la marca ingresada por la persona usuaria que arroja un mensaje con nombre y apellido de la persona y marca y precio con iva del perfume seleccionado*/

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
  /*Se declara la variable recotizar para que la persona usuaria ingrese si quiere continuar con un nuevo presupuesto*/
    recotizar = prompt("¿Desea obtener un nuevo presupuesto?  Ingrese Si o No").toLowerCase()

    /*Se declara la condición para que el bucle continúe*/
  }while(recotizar!="no")
  




