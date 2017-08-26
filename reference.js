'use strict';

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