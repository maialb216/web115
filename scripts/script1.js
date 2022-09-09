"use strict";

// chapter 1 + 2 + 4 ( alert + string variables + legal variable names )
var business = "cat cafe";
alert("Our business is a " + business);

// chapter 3 + 5 + 7 + 8 ( numeric variables + familiar operators + + eliminating ambiguity + concatenating text strings )
var originalCats = (3 * 4) - 6;
var adoptedCats = 2;
var newCats = originalCats + adoptedCats;
alert("Our cafe originally had " + originalCats + " cats, but we recently adopted " + adoptedCats + " cats, so we now have " + newCats + " cats waiting to meet visitors!");

// chapter 9 + 10 ( prompts + if statements )
var adopt = prompt("Are you considering adopting a cat?", "yes/no");
if (adopt === "yes") {
	alert("Excellent! You will find some at our cafe.");
}

// chapter 6 ( unfamiliar operators )
var laterCats = --newCats;
alert("If you connect with a cat, you may be able to adopt one! If you adopt a cat, we will then have " + laterCats + " cats in the cafe!");

