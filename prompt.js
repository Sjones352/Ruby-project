
var t1 = 'myVar';               // defined
var t2;                          // undefined
var t3 = process.argv[2];
var num = Number.parseInt(t3);
var t4 = 7;
                        

if (t1 === undefined) {
    console.log('t1 is undefined');
} else {
    console.log('t1 is defined') ;
}

if (t2 === undefined) {
    console.log('t2 is undefined');
} else {
   console.log('t2 is defined') ;
}

// in JavaScript null is "nothing". It is supposed to be something that doesn't exist.

// in Unfortunately, in JavaScript, the data type of null is an object.

if (!t3) {
    console.log('t3 is null');
} else if (!isNaN(num)) {
    console.log('t3 is', t3);
}

// Comparisons 

// This is true because they are of the same type
if (t4 === 7) {   
   console.log ('This is true' , t4);
} // returns false because they are not of the same type.
else if (t4 === '7') {
	console.log ('This is false' );
}
