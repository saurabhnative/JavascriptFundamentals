// var a = 123;
// var b = "123";
// if(a !== b){
//     console.log("yes");
// } else {
//     console.log("false");
// }
//Switch case
// var day = new Date();
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }

// console.log(day);
// var avengers = ["IronMann","Dr.Strange"];
// var heroes = avengers.map( (superhero) => {
//     rerurn `${superhero} killed by thanos`
// });
// console.log(heroes);
var person = {fname:"Doctor", lname:"Strange", age:25}; 
// var text = "";
// var x;
// for (x in person) {
//     console.log(x, person[x]);
// }

// console.log(text);

// let arr = [1,2,3,4];
// let plus5 = person.map((val, i) => {
//     console.log(i);
//   // return val + 5;
// });
// console.log(plus5);
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// console.log(words);
// Array.prototype.captilize = function() {
//     // body...
//     // console.log(this);
//     let array = [];
//     for(i in this){
//         if(typeof(this[i]) == "string"){
//              array.push(this[i].toUpperCase())
//         }
       
//     }
//     return array;  
// };
// console.log(words.captilize());
// const longWords = words.filter((word) => {
//     return word.length > 6
// });

// console.log(longWords);
// longWords is ["exuberant", "destruction", "present"]


const euros = [10,20,30];
const sum = euros.reduce((total, amount) => {
    return total + amount
}); 
console.log(sum); // 118.11

// const average = euros.reduce((total, amount, index, array) => {
//   total += amount
//   return total/array.length
// }, 0);
// console.log(average);

//Equality operators
// var x = 123;
// var y = "123";
// console.log(x==y);
// console.log(x===y);