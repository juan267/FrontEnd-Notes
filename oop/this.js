////////// This

1. Fue la funcion llamada con new
2  Fue la funcion llamada con call o apply
3. Fue la funcion llamada con un objeto como contexto
4. objeto global, Comportamiento Default



// Constructores

function House (address, floors, color) {
  this.address = address
  this.floors = floors
  this.color = color
}

var miCasa = new House('cedritos', 1, 'blanca')


var house = {
  color: 'blanca',
  area: 30,
  growArea: function(size) {

    this.area = this.area + 30
  }
}

var apartment = {
  area: 50,
}


house.growArea.call(apartment)


function Dog(name, age, color) {
  this.name = name
  this.age = age
  this.color = color
  this.grow = function(amount) {
    this.age = this.age + amount
  }
}

// Usando New

var ozu = new Dog('ozu', 5, 'negro')

// Default
/// No use New mal mal mal
var ozu = Dog('ozu', 5, 'negro')

/// Invocando la funcion sobre un objeto

ozu.grow() // This toma el valor de `ozu`


/// Usando call y apply
var ozu = new Dog('ozu', 5, 'negro')
var moshi = {
  age: 4
}

ozu.grow.call(moshi, 5)
ozu.grow.aplly(moshi, [])




