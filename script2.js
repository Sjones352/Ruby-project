
var value = process.argv[2];

var errors = [];

if (!value) {
  errors.push('Boolean value missing');
} else if (value !== 'true' && value !== 'false') {
   errors.push('Boolean value missing');

 }
  else if(value === 'true') ;

 else {
  console.log('value is', value);

 }
 
 
 if (errors.length) {
   console.log(errors.join(''));
 }

