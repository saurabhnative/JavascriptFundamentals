// "use strict";
// x = 3.14;  

x = 45;       // This will not cause an error. 
simpleFunction();

function simpleFunction() {
   "use strict";
    var y = 3.14;   // This will cause an error
}
