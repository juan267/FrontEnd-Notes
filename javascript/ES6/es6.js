/// Superset 6 de Ecmascript


1. Arrow Functions
2. Destructuring
3. let-const
4. Object literals
5. Spread - rest
6. Template string



// Arrow functions

function hola(name) {
  return name
}

var hola = function(name, age) {

}


var hola  = (name, age) => {
  return 'hola'
}

var hola = name =>


var tree = {
  plantListener: () => {
    $('#hola').on('click', (event) => {
      tree.grow()
    })
  }
  grow: function() {
    // fjakdhsjlfhjkasd
  }
}

hola()

// functional scope
//block scope
function hola () {
  a


  let a ='hola'
}
// Block scope
var NAME = 'juasf'
const name = 'juan'
const names = ['juan', 'diego', 'maria', 'angie', 'german']
names.push('fjaklsdk')







(function() {

}())


let y const



/// Object literals

const age = 8

var tree = {
  age: age,
  grow: function() {
    //fasdfasdfasf
  },
  name: 'Totumo',
  variety: 'Cabezon',
}

tree[tree.name + tree.variety] = 'faksdjhfl'
tree.TotumoCabezon
let tree = {
  age,
  grow () {

  },
  name: 'Totumo',
  variety: 'Cabezon',
  [1 + 1]: 'fajsdklf'
}


// template String
// Interpolation
var nombre = 'juan'
var apellido = 'gomez'

var sayHifullName = "Hola" + nombre +"tu apellido es " + apellido + "."

var sayHifullName = `Hola ${nombre} tu apellido es ${apellido}.`











