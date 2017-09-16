'use strict';

var t1 = 5; // defined
var t2 = 10; // undefined
var t3 = process.argv[2];
var num = Number.parseInt(t3);
var t4 = 7;


if (t2 % t1) {
  console.log('Frizz');
} else {
  console.log('Buzz');
}

if (t2 === undefined) {
  console.log('t2 is undefined');
} else {
  console.log('t2 is defined');
}

if (!t3) {
  console.log('t3 is null');
} else if (!isNaN(num)) {
  console.log('t3 is', t3);
}


if (t4 === 7) {
  console.log('This is true', t4);
} else if (t4 == '7') {
  console.log('This is false');
}

 
 var i= 1;

for (var i = 1; i <= 100; i++) {
	console.log( i);
} 
