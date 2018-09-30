/*
+	Addition	x = y + 2       	y = 5	x = 7	
-	Subtraction	x = y - 2	      y = 5	x = 3	
*	Multiplication	x = y * 2	  y = 5	x = 10	
/	Division	x = y / 2	        y = 5	x = 2.5	
%	Modulus 	x = y % 2	        y = 5	x = 1	
++	Increment	x = ++y	        y = 6	x = 6	
              x = y++	        y = 6	x = 5	
--	Decrement	x = --y	        y = 4	x = 4	
              x = y--	        y = 4	x = 5
*/
//Ternary
var age = 4; 
var voteable = (age < 18) ? "Too young":"Old enough";
/*
Operator	Example	Same As	Result in x	Try it
=	        x = y	  x = y	    x = 5	
+=	      x += y	x = x + y	x = 15	
-=	      x -= y	x = x - y	x = 5	
*=	      x *= y	x = x * y	x = 50	
/=	      x /= y	x = x / y	x = 2	
%=	      x %= y	x = x % y	x = 0
*/
/** Logical
&&	and	(x < 10 && y > 1) is true	
||	or	(x === 5 || y === 5) is false	
!	  not	!(x === y) is true
 */
let x = 6;
console.log(typeof(x));
