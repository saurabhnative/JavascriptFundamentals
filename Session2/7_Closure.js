function sayInt() {
  // Local variable that ends up within closure
  var num = 42;
  var say = function() { console.log(num); }
  num++;
  return say;
}
var sayNumber = sayInt();
sayNumber(); // logs 43

// function sayAlice() {
//     var say = function() { console.log(alice); }
//     // Local variable that ends up within closure
//     var alice = 'Hello Alice';
//     return say;
// }
// sayAlice()();// logs "Hello Alice"