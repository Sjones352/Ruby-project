// This means that you must declare strict mode by writing "use strict" 
// at the beginning of the file or the function to use block-scope declarations.

"use strict";

let value = process.argv[2];

let errors = [];

if (!value) {
  errors.push("Boolean value missing")

} 
  else if (value != 'true' && value != 'false') {
   errors.push("Boolean value missing");
 }
   // The empty statement is a semicolon (;) 
   // indicating that no statement will be executed, 
   // even if JavaScript syntax requires one
  else if(value == 'false') ;

  else {
  (value == 'true') 
  console.log('value is', value);
 }
 
 // Returns the length of the errors array
 if (errors.length) {
   console.log(errors.join(" "));
 }

