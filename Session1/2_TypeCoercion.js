var x = String(123);
x = String(-12.3)                 // '-12.3'
x = String(null)                  // 'null'
x = String(undefined)             // 'undefined'
x = String(true)                  // 'true'
x = String(false)                 // 'false'
x = String(123)                   // explicit
x = 123 + ''                      // implicit
Boolean(2)          // explicit
if (2) {console.log("x")}      // implicit due to logical context
x = !!2                 // implicit due to logical operator
x = 2 || 'hello'        // implicit due to logical operator
let x = 'hello' && 2;

x = Number('123')   // explicit
x = +'123'          // implicit
x = 123 != '456'    // implicit
x = 4 > '5'         // implicit
x = 5/null          
//https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839
x = true / 0          
console.log(null == 0)               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true

true + false             // 1
12 / "6"                 
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false
false == 'false'         // false
null == ''               // false
!!"false" == !!"true"    // true
['x'] == 'x'             // true 
console.log([] + null + 1)            // 'null1'
console.log([1,2,3] == [1,2,3])       // false
{}+[]+{}+[1]             // '0[object Object]1'
!+[]+[]+![]              // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'

/*Falsy values list in javascript
false
0 (zero)
‘’ or “” (empty string)
null
undefined
NaN (Not a Number)
*/

0 || "0" && {}  
  // (0 || "0") && {}
 //(false || true) && true  // internally
  //"0" && {}
 //true && true             // internally
 //{}
console.log(x);