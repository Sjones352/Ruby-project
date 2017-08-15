'use strict';
/*eslint indent: "error"*/

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout); 

rl.question('Enter your first name> ', function(firstName) {

rl.setPrompt(`[${firstName.trim()}] sandrash$ `);

rl.prompt();

rl.on('line', function(answer) {
  if (!answer) {
    console.log('You gave me nothing');
  } else if (!isNaN(Number.parseInt(answer))) {
    console.log('You entered the integer', answer);
  } else if (answer === 'true' || answer === 'false') {
    console.log('You entered the boolean value', answer);
  } else if (answer === 'exit') {
   rl.close();
  }
  rl.prompt();
 });
});

rl.on('close', function () {
	console.log('Goodbye!');
  process.exit(0);
});

