//open events.html
// console.log(document.getElementsByTagName("div")[0]);
// console.log(window);
// function displayFeed(){
// 	document.getElementById("demo").innerHTML = "<p>sadf</p>";
// }

// document.getElementById("feed").addEventListener("click", function(){ alert("Hello World!"); });


var logElement = document.querySelector('#log');
console.log(logElement);
function log(msg) {
    logElement.innerHTML += ('<p>' + msg + '</p>');
}

function capture(e,i) {
	console.log(e,i);
	// if(i == 0){
		e.preventDefault();
	// }
    // log('capture: ' + this.firstChild.nodeValue);
}

function bubble() {
    log('bubble: ' + this.firstChild.nodeValue);
}

var divs = document.getElementsByTagName('div');
console.log(divs);
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', (e)=>capture(e), true);
    divs[i].addEventListener('click', bubble, false);
}