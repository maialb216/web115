"use strict";



function fizzBuzz() {
	const first = document.getElementById('firstName').value;
	const mid = document.getElementById('middleInitial').value;
	const last = document.getElementById('lastName').value;
	const newGreeting = `Welcome to Little Guy Cafe ${first} ${mid} ${last}!`;
	document.getElementById('greeting').innerHTML = newGreeting;
	var userInput = prompt(`How high do you want to count, ${first}?`);
	let outputText = "";
	for (let i = 1; i <= userInput; i++) {
		i % 2 === 0 ? outputText += "Small Cat - the number is even!<br>" : outputText += "Small Cat - the number is odd!<br>";
	}
	document.getElementById('output').innerHTML = outputText;
}