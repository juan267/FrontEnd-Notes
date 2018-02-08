function compose(cb1, cb2) {
   var cb1Result = cb1()
   return cb2(cb1Result)
}


var generate = function() { return 2;
};

var square = function(x) {
  return x * x;
}


compose(generate, square)



function counter() {
  var count = 0
  return function(){
    return count = count + 1
  }
}


var result = counter()

result()
