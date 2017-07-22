"use strict";

let value = process.argv[2];

let errors = [];

if (!value) {
  errors.push("Boolean value missing");
} else if (value != 'true' && value != 'false') {
   errors.push("Boolean value missing");

 }
  else if(value == 'true') ;

 else {
  (value == 'false') 
  console.log('value is', value);

 }
 
 
 if (errors.length) {
   console.log(errors.join(" "));
 }

