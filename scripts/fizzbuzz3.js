"use strict";



function fizzBuzz() {
	const first = document.getElementById('firstName').value;
	const mid = document.getElementById('middleInitial').value;
	const last = document.getElementById('lastName').value;
	const newGreeting = `Welcome to Little Guy Cafe ${first} ${mid} ${last}!`;
	document.getElementById('greeting').innerHTML = newGreeting;
	let outputText = "";
	const numOne = 10;
	const numTwo = 2;
	const numThree = 7;
	for (var i = 1; i <= 140; i++) {
        if (!fizzBuzzDivide(i,numOne) && !fizzBuzzDivide(i,numTwo) && !fizzBuzzDivide(i,numThree)) {
            outputText += i + " small<br>";
        }
        else {
            outputText += i.toString();
            if (fizzBuzzDivide(i,numOne)) {
                outputText += " cat";
            }
            if (fizzBuzzDivide(i,numTwo)) {
                outputText += " kitten";
            }
			if (fizzBuzzDivide(i,numThree)) {
				outputText += " bingus"
			}
            outputText += "<br>";
        }
    } 
	document.getElementById('output').innerHTML = outputText;
}

function fizzBuzzDivide(varOne,varTwo) {
	return (varOne % varTwo == 0 ? true : false);
}