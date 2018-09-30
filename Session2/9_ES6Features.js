default parameters
function multiply (a, b = 2) {
  return a * b;
}
console.log(multiply(5)); // 10

// // TEMPLATE LITERALS
// console.log(`Dear Mom,
// Hope you are well.
//     Love, your son`);

//Destructuring
// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63,
//         science: 85
//     }
// };

// function displaySummary(student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your Maths score is ' + (student.scores.maths || 0));
//     console.log('Your English score is ' + (student.scores.english || 0));
//     console.log('Your Science score is ' + (student.scores.science || 0));
// }

// displaySummary(student);

// function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
// }
// displaySummary(student);


// const student = {
//     firstname: 'Glad',
//     lastname: 'Chinda',
//     country: 'Nigeria'
// };

// // Object Destructuring
// const { firstname, lastname, country } = student;

// console.log(firstname, lastname, country);


// const person = {
//     name: 'John Doe',
//     country: 'Canada'
// };

// // Assign default value of 25 to years if age key is undefined
// const { name: fullname, country: place, age: years = 25 } = person;

// // Here I am using ES6 template literals
// console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

// const rgb = [255, 200, 0];

// // Array Destructuring
// const [red, green, blue] = rgb;

// console.log(`R: ${red}, G: ${green}, B: ${blue}`); 

// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// // Assign the first and third items to red and yellow
// // Assign the remaining items to otherColors variable using the spread operator(...)
// const [red,, yellow, ...otherColors] = rainbow;

// console.log(otherColors); // ['green', 'blue', 'indigo', 'violet']


// // ES5
// var multiplyES5 = function(x, y) {
//   return x * y;
// };

// // ES6
// const multiplyES6 = (x, y) => { return x * y };

const smartPhones = [
  { name:'iphone', price:649 },
  { name:'Galaxy S6', price:576 },
  { name:'Galaxy Note 5', price:489 }
];
// // ES5
// var prices = smartPhones.map(function(smartPhone) {
//   return smartPhone.price;
// });

// console.log(prices); // [649, 576, 489]
const prices = smartPhones.map(smartPhone => smartPhone.price);
console.log(prices); // [649, 576, 489]
