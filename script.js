
var value = process.argv[2];

var errors = [];

if (!value) {
  errors.push("Boolean value missing");

} 
  else if (value !== 'true' && value !== 'false') {
   errors.push("Boolean value missing");
 }
   // The empty statement is a semicolon (;) 
   // indicating that no statement will be executed, 
   // even if JavaScript syntax requires one
  else if(value === 'false') ;

  else {
  console.log('value is', value);
 }
 
 // Returns the length of the errors array
 if (errors.length) {
   console.log(errors.join(" "));
 }

