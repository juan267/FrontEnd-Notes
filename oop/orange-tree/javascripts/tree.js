// write your tree code here. use a constructor function!
FRUIT_BEARING_AGE = 4
MAX_AGE = 20

var Tree = function() {
  this.age = 0;
  this.height = 0;
  this.orangeArr = [];
  this.orangeCount = 0
  this.isAlive = true;
}

Tree.prototype = {
  grow: function() {
    this.age += 1;
    this.height += 10;
    this.growFruit()
    this.isAlive = this.alive()
  },
  growFruit: function() {
    if (this.age >= FRUIT_BEARING_AGE) {
      var num_of_oranges = Math.ceil(Math.random() * 10)
      for (var i=0; i<num_of_oranges; i++){
        this.orangeArr.push(new Orange());
      }
    }
  },
  alive: function() {
    if (this.age <= MAX_AGE) {
      return true
    }
    else {
      return false
    }
  },
  dropOrange: function() {
    this.orangeArr.shift
    return this.orangeArr.length
  },
  pickOrange: function() {
    var orange = this.orangeArr.shift
    return orange
  }
}

var Orange = function () {
  this.diameter = Math.ceil(Math.random() * 10);
}
