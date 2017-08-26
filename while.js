'use strict';

var i = 0;
var n = 0;
while (i < 5) {
	i++;
	if (i === 3) {
		continue;
	}
	n += i;
}
console.log(n);



var guess = process.argv[2];
console.log('Guess a number btn 1 - 5');

var num1 = '1';
var num2 = '2';
var num3 = '3';
var num4 = '4';
var num5 = '5';

switch (guess) {

	case num1, num2, num3, num4:
		console.log('You did not guess right');
		break;
	case num5:
		console.log('You guessed right');
		break;
	default:
		console.log('You didn not pass anything btn 1 and 5');

}