//Callback
// global variabl
// var allUserData = [];

// // generic logStuff function that prints to console
// function logStuff (userData) {
//     if ( typeof userData === "string")
//     {
//         console.log(userData);
//     }
//     else if ( typeof userData === "object")
//     {
//         for (var item in userData) {
//             console.log(item + ": " + userData[item]);
//         }

//     }

// }

// // A function that takes two parameters, the last one a callback function
// function getInput (options, callback) {
//     allUserData.push (options);
//     callback (options);
// }

// // When we call the getInput function, we pass logStuff as a parameter.
// // So logStuff will be the function that will called back (or executed) inside the getInput function
// getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript


//Explain timingEvents first
// let promise = new Promise(function(resolve, reject) {
//   // the function is executed automatically when the promise is constructed
//   var obj ={ "data": "Sanjay"}
//   // after 1 second signal that the job is done with the result "done!"
//   setTimeout(() => resolve(obj), 1000);
// });

// promise.then(
// 	function(param) {
//     console.log(param);
// 	},
// 	function(error) {
//     console.log(error);
// })

// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log('Hello!')); // 'Hello!'

async function f() {
  // try{
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("done!"), 1000)
  	});

  let result = await promise; // wait till the promise resolves (*)

  console.log(result); // "done!"    
  // }  catch(e) {
  //   console.log(e);
  // }
  
}

f();



