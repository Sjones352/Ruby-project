'use strict';

let y = 5;

function multiply(x) {
	x = x * 10;
	console.log(x);
}

multiply(y);

console.log(y);

// Passing by Reference

let nameObject = {
	first: 'sandra',
	last: 'Jones'
};

console.log(nameObject);

function changeName(obj) {
	obj.first = 'Diana';
	console.log(obj);
}

changeName(nameObject);

console.log(nameObject);
