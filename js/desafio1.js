const iva = 1.16

class Perfume {
  constructor(id ="Undefined" , nombre = "Undefined" , marca ="Undefined", precio = 10000, ml= 75) { 
    this.id = id;
    this.nombre = nombre;
    this.marca = marca; 
    this.precio = precio;
    this.ml = ml;
    this.iva = this.precio * iva
  } 
}

const divPerfumes = document.getElementById('perfumes')

const perfume1 = new Perfume(01, "CODE", "GIORGIO ARMANI", 2600, 75)
const perfume2 = new Perfume(02, "ANGEL", "THIERRY MUGLER", 2900, 150)
const perfume3 = new Perfume(03, "L'HOMME", "PACO RABBANE", 3500, 100)
const perfume4 = new Perfume(04, "LOLITA LEMPICKA", "LOLITA LEMPICKA", 1600, 150)
const perfume5 = new Perfume(05, "POLO SPORT", "RALPH LAUREN", 1500, 75)
const perfume6 = new Perfume(06, "ARMANI MANIA", "GIORGIO ARMANI", 6000, 200)
const perfume7 = new Perfume(07, "AQUA DI GIO", "GIRGIO ARMANI", 2200, 75)
const perfume8 = new Perfume(08, "HAPPY", "CLINIQUE", 1549, 100)
const perfume9 = new Perfume(09, "TOY BOY", "MOSCHINO", 3500, 75)

const arrayPerfumes = [perfume1, perfume2, perfume3, perfume4, perfume5, perfume6, perfume7, perfume8, perfume9]

arrayPerfumes.forEach(perfume => {
  divPerfumes.innerHTML += `
  <div class="card perfume" id="perfume${perfume.id}" style="width: 15rem;">
  <div class="card-body">
    <h4 class="nombre">${perfume.nombre}</h4>
    <p class="marca">${perfume.marca}</p>
    <p class="presentacion">${perfume.ml}ml.</p>
    <p class="precio">Precio con IVA: $${parseInt(perfume.iva)}</p>
  </div>
  </div>
  `
})

const input = document.getElementById('busqueda')
const searchButton = document.getElementById('searchButton')

function busqueda(input){
  const resultado = arrayPerfumes.filter(perfume => perfume.nombre.includes(input.toUpperCase()))
  filtro(resultado)
}

function filtro(resultado){
  divPerfumes.innerHTML = " "
  resultado.forEach(perfume =>{
    divPerfumes.innerHTML += `<div class="card perfume" id="perfume${perfume.id}" style="width: 15rem;">
    <div class="card-body">
      <h4 class="nombre">${perfume.nombre}</h4>
      <p class="marca">${perfume.marca}</p>
      <p class="presentacion">${perfume.ml}ml.</p>
      <p class="precio">Precio con IVA: $${parseInt(perfume.iva)}</p>
    </div>
    </div>
    `
  })
}

input.addEventListener('input', (e) => {
  e.preventDefault()
  busqueda(input.value)
  console.log(input.value)
})
