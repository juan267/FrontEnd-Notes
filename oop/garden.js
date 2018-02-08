function Flower(name, color){
  this.name = name
  this.color = color
}

Flower.prototype = {
  identify: function() {
    return `I am an ${this.name} and I am ${this.color}.`
  }
}


var garden = {
  location: 'Makawao',
  name: 'Kula Botanical Garden',
  flowers: [],
  plant: function(flowers) {
    this.flowers = flowers
  },
  selectByColor: function(color){
    return this.flowers.filter(function(flower){
      return flower.color === color
    })
  },
  selectByName: function(name){
    return this.flowers.filter(function(flower){
      return flower.name === name
    })
  }
}
