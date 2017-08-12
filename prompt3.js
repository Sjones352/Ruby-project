'use strict';

var spawn = require('child_process');

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function showPrompt(stream) {
  stream.write('sandrash$ ');    
}


rl.question('Enter your first name ', (answer) => {
  // Log the answer in a database
  showPrompt(rl);
  answer = answer.toString().trim();
  var result = (answer === 'true' || answer === 'false');

  if (!answer || answer === '') {
     showPrompt(rl);
     rl.write(`You gave me nothing `);
  } else if (!isNaN(Number.parseInt(answer))){
     rl.write(`you entered the integer is ${answer} `);
  } else if (result) {
     rl.write(`You entered the boolean ${answer} `);
  } else {
     rl.write(spawn.execSync(answer));
    }
    showPrompt(rl);
});


