var a = 5;
console.log(a);

let b = 6;
console.log(b);

const c = 7;
console.log(c);

//Dynamic variables
var alphabet0 = 'A',
    alphabet1 = 'B',
    alphabet2 = 'C';

var no_of_alphabet = 3; 
for ( var i=0; i<no_of_alphabet; i++ ) {
     console.log( eval("alphabet"+i)  );
}

//Data types
var height = 16;                               // Number
var lastName = "Mhatre";                      // String
var x = {firstName:"Saurabh", lastName:"Mhatre"};    // Object


//Dynamic assignment
var x;           // Now x is undefined
x = 19;           // Now x is a Number
x = "Saurabh";

//Escape Characters
var statement = "Today is \"Saturday\"";
console.log(statement);

//Exponent and scientific numbers
var x = 22e5;
var z = 123e-5;
console.log(z);

//Boolean values
var x = 1;
var y = '1';
console.log(x == y)

var x = null;
var w;
console.log(w);

var i = Symbol('debug');
var j = Symbol('debug');
console.log(i == j);