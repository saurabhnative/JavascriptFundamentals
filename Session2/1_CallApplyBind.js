/*
*Bind example in javascript
*/
var avengers = {
    firstname: 'Captain',
    lastname: 'Marvel ',
    getAvengerName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var marvel = function() {   
	console.log(this.getAvengerName() + 'is an upcoming marvel movie');
};

// function getNextMovie() {
// 	return marvel.bind(avengers);
// }
var getNextMovie = marvel.bind(avengers); 
// creates new object and binds avengers. 'this' of marvel === avengers now
// console.log(getNextMovie());
getNextMovie(); // 'Captain Marvel is an upcoming marvel movie'

//Call and apply examples
var marvel2 = function(name,surname) {
	// console.log(this.getAvengerName() + 'is an upcoming marvel movie');
	console.log(`${this.getAvengerName()} is an upcoming marvel movie starring ${name} ${surname}`);
}
// marvel2.call(avengers,'Brie','Larson');
 marvel2.apply(avengers,['Brie','Larson'])





