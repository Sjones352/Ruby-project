/*jshint esversion: 6 */ 
'use strict';

var spawn = require('child_process');

var stdin = process.stdin, stdout = process.stdout;

stdin.setEncoding('utf8');

function showPrompt(stream) {
  stream.write('sandrash$ ');    
}

showPrompt(stdout);

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
     stdout.write(spawn.execSync(data));
    }
    showPrompt(stdout);
});
