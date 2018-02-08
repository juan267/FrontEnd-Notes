function Car(name,color,model) {
  this.name = name
  this.color = color
  this.model = model
}


var elAvisponVerde = new Car('El avispon verde', 'verde', 2016)

var CarFactory = {
  employess: 7,
  cars: [],
  buildCar: function(name, color, model) {
    var newCar = new Car(name, color, model)
    this.cars.push(newCar)
  },
  selectCars: function(color) {
    var selectedCars = []
    for (var i = 0; i < this.cars.length; i++) {
      if (this.cars[i].color === color) {
        selectedCars.push(this.cars[i])
      }
    }
    return selectedCars
  }
}

CarFactory.buildCar('Herby', 'blanco', 1950)
CarFactory.buildCar('Herby', 'verde', 1950)
CarFactory.buildCar('Herby', 'negro', 1950)
CarFactory.buildCar('Herby', 'blanco', 1950)

CarFactory.cars // [{name: 'herby', color: 'blcnco'}]

CarFactory.selectCars('verde') // [],

