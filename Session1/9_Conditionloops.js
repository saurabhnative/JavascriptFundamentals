//Switch case
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day);

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

const arr = ['cat', 'dog', 'fish'];
arr.forEach(element => {
  console.log(element);
});
// cat
// dog
// fish

const obj = {  
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

for (let elem in obj) {  
  console.log( obj[elem] )
}
// 1
// 2
// 3
// 4

const arr = ['cat', 'dog', 'fish'];
for (let i in arr) {  
  console.log(arr[i])
}
// cat
// dog
// fish