//// OOP

function Cat(eyeColor, furColor, breed) {
  this.eyeColor = eyeColor
  this.furColor = furColor
  this.breed = breed
  this.sleep = function() {
    return 'zzzzzzzzzhmm pupu pur pur'
  }
  this.eat = function() {
    return 'yum yum yum'
  }
}

Cat.prototype.eat = function() {
  return 'yum yum yum'
}

var perea = new Cat('cafes', 'negro', 'criollito')













function Animal(name, lastName) {
  this.name = name
  this.lastName = lastName
}

Animal.prototype.hello = function() {
  return 'Soy un animal'
}

Animal.prototype.fullName = function() {
  return this.name + this.lastName
}

function Dog(name) {
  this.name = name
  this.identify = function() {
    return 'soy Constructora' + this.name
  }
}

// Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.identify = function() {
  return 'soy protuptype' + this.name
}

var ozu = new Dog('Ozu') // Instancias
var moshi = new Dog('Moshi')

moshi.bark = function() {
  console.log('Woof woof Hola ' + this.identify())
}

ozu.constructor === Dog
moshi.constructor === ozu.constructor
ozu.__proto__ === Dog.prototype

//
