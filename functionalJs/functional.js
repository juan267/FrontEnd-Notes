// Impure function

function foo(x) {
  y = y * x
  z = z * x
}

var y = 2; var z = 10
foo(5)
foo(5)

// Pure Functions

function bar(x,y,z) { // We pass the whole universe
  foo(x)
  return [y,z] // Why inside an array?

  function foo(x) {
    y = y * x // this only modifies the universe that we are in
    z = z * x
  }
}

// Composition

function sum(x,y){
  return x + y
}

function mult(x,y){
  return x * y
}

var z = sum(2,2) // this z is going to be side afected
z = mult(z,4) // we are muting varible z we can avoid this with composition

mult(sum(2,2), 4) // Manual Composition

function multAndSum(x,y,z) {
  return mult(sum(x,y),z)
}


// Clousures

function foo() {
  var count = 0

  return function() {
    return count++ // this functions remmebers the value of count
  }
} // side effect on Count

var x = foo()

x() // 0
x() // 1
x() // 2

function sumX(x) {
  return function(y) {
    return x + y
  }
} // pure function no side effect on x

var add5 = sumX(5)

add5(5) // 10
add5(2) // 12


function favoriteFood(name) {
  var sentence = `${name} favorite food is`

  return function(food) {
    return `${sentence} ${food}`
  }
}

// Recursion

function sumRecur() {
  console.log(arguments)
  var args = [].slice.call(arguments) // javascript hack
  if (args.lenth <= 2) {
    return args[0] + args[1]
  }; // Base case

  return(
    args[0] + sumRecur.apply(null, args.slice(1))
  ) // Recursive call
}

// Arrays Transformations

function myForEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i)
  };
}

function myMap(array, callback) {
  var result = []
  // myForEach(array, function(element, index){
  //   result[index] = callback(element)
  // })
  for (var i = 0; i < array.length; i++){
    result[i] = callback(array[i])
  }
  return result
}

function myFilter(array, callback) {
  var result = []
  for(var i = 0; i < array.length; i++) {
    if (callback(array[i])){ // True if you want to keep it
      result.push(array[i])
    };
  }
  return result
}

function myReduce(array, callback, initial) {
  var total = initial
  for (var i = array.length - 1; i >= 0; i--) {
    var total = callback(total, array[i])
  };
  return total
}

function favoriteFood(name) {
  var sentence = 'La comida favorita de ' + name + '  es'

  return function(food) {

  }
}

var JuanFavorite = favoriteFood('Juan')
var JuanFavorite = favoriteFood('Juan')
var CarolianFavorite = favoriteFood('Carolian')
var DiegoFavorite = favoriteFood('Diego')

JuanFavorite('pizza') // La comida favorita de juan es pizza

JuanFavorite('Hamburguesa') // La comida favorita de juan es Hamburguesa


/// Map

var nums = [1,2,3,4,5]

var twiceNums = nums.map(function(num){
  return num * 2
})

var evens = nums.filter(function(num) {
  return num % 2 === 0
})



var result = 0

for(var i = 0; i<nums.length; i++) {
  result += nums[i]
}



var nums = [1,2,3,4,5]

var sum = nums.reduce(function(accumulator, num){
  return accumulator + num
}, 0)


//Paso 7

var chargeCreditCard = function(num, price){
  console.log(num, price)
};
var processPaymentOnce = once(chargeCreditCard);

processPaymentOnce(123456789012, 200);
// Imprime Success la primera vez que la llamamos
processPaymentOnce(123456789012, 300);
// Arroja o imprime un error dado que es la segunda vez que la invocamos

function once(callback) {
  var counter = 0
  return function(...args) {
    if (counter < 1) {
      callback(...args)
    } else {
      return 'Erroor'
    }
    counter += 1
  }
}





function sayName(name) {
   console.log(name)
}

function higherOrderFunction(callback, name) {
  callback('juan')
}


[1,2,3].forEach(function(elem) {
  console.log(elem)
})

higherOrderFunction(function(name){ console.log(name+'le gusta el cafe')}, 'angie')
higherOrderFunction(sayName, 'juan')





function myMap(array, callback) {
  var result = []
  for (var i = 0; i < array.length; i++) {
     var callbackReturn = callback(array[i])
     result.push(callbackReturn)
  }
  return result
}

function myFilter(array, callback) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    var callbackReturn = callback(array[i])
    if (callbackReturn) {
      result.push(callbackReturn)
    }
  }
  return result
}

myFilter([1,2,3], function(num){
  return num % 2 === 0
})


[1,2,3,4,5].reduce(function(accomulator, num){
  if (num % 2 === 0) {
    accomulator.push(num)
    return accomulator
  } else {
    return accomulator
  }
},[])

[1,2,3,4].reduce(function(accomulator, num){
  num *= 2
  accomulator.push(num)
  return accomulator
}, [])


[1,2,3,4,5,6].map(function(num){
  return num * 2
}).filter(function(num){
  return num % 2 === 0
}).reduce(function(accomulator, num){
  return accomulator + num
}, 0)

function myReduce(array, callback, initial) {
  for (var i = 0; i < array.length; i++) {
    initial = callback(initial, array[i])
  }
  return initial
}


var array = [1,2,3]

