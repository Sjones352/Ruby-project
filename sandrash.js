'use strict';

const readline = require('readline');

//instance of readline
const rl = readline.createInterface(process.stdin, process.stdout); 

// object are also values. The values are written as name value pairs separated by a :
var person = {
	firstname: '',
    lastname: '' };

// Set the First name. question method asks user to enter first name
rl.question('Enter your first name >', function(names) {
 
person.names = names.trim();

rl.setPrompt(`[${person.names}] sandrash$ `);

 // Readies realine for input from user, putting current setPrompt options to new line
rl.prompt(); 

// This is an event. Listening for new line. Usually recieved when user hits enter.
rl.on('line', function(answer) {
   
  answer = answer.toString().trim();
  var result = (answer === 'true' || answer === 'false');
 
  if (!answer || answer === '') {
     console.log(`You gave me nothing `);
   } else if (!isNaN(Number.parseInt(answer))) {
     console.log(`you entered the integer is ${answer} `);
   } else if (result) {
     console.log(`You entered the boolean ${answer} `);
   }else if (answer === 'exit') {
   // closes instance, relinguishing control on the input and output	
   rl.close(); 
  } 
  rl.prompt();
  });
});
// Listening for close
rl.on('close', function () {
	console.log('Goodbye!');
    process.exit(0);
});

