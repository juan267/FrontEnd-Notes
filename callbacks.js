// Callbacks?

// Que es un callback: Un callback es la funcion que se le pasa como argumento a otra funcion (High Order Function).

// Permiten escribir codigo Asyncrono
// Permiter reutilizar codigo


function isMammal(callback, animals) {
  var mammals = []
  for (var i = 0; i < animals.length; i++) {
    if (true) {
      mammals.push(animals[i])
    } // true o false
  }
  return mammals
}


var animals = [
  {name: 'loro', milk: false},
  {name: 'cocodrilo', milk: false},
  {name: 'vacas', milk: true}
]

const result = isMammal(function(animal) {
  return animal.milk
}, animals)


function myMap(callback, array) {
  var finalArray = []
  for (var i = 0; i < array.length; i++) {
    finalArray.push(callback(array[i]))
  }
  return finalArray
}

myMap(function(num) {
  return num + 1
},[1,2,3,4,5])



animals.map(function(animal))

console.log(result)





