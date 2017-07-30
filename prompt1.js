/*jshint esversion: 6 */ 

var stdin = process.stdin, stdout = process.stdout;

console.log('please enter a value?');

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (data) {

  data = data.toString().trim();
  var result = (data === "true" || data === "false");

    if (!data || data === '') {
     stdout.write(`You didn't enter anything `);
    }
    else if (!isNaN(Number.parseInt(data))){
     stdout.write(`value entered is ${data} `);
    }
    else if (result) {
     stdout.write(`You entered a boolean ${data}`);
    }
    else {
     stdout.write(`You entered  ${data} `);
    }
    process.exit();
});


