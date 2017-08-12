/*jshint esversion: 6 */ 

'use strict';
var stdin = process.stdin, stdout = process.stdout;

console.log('please enter a value?');

stdin.setEncoding('utf8');

stdin.on('data', function (data) {

  data = data.toString().trim();
  var result = (data === 'true' || data === 'false');

    if (!data || data === '') {
     stdout.write(`You gave me nothing `);
    } else if (!isNaN(Number.parseInt(data))){
     stdout.write(`you entered the integer is ${data} `);
    } else if (result) {
     stdout.write(`You entered the boolean ${data} `);
    } else {
     stdout.write(`You passed me a string ${data} `);
    }
    process.exit();
});


