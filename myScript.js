var value = process.argv[2];

var errors = [];

if (!value) {
  errors.push('Boolean value missing');
  console.log(errors);

} else if (value !== 'true' && value !== 'false') {
   errors.push('Boolean value missing');
   console.log(errors);
 } else if(value === 'false') {
}else {
  // (value == 'true') 
  console.log('value is', value);
  process.exit(1);

 }
 
 
 if (!errors.length) {
 	 console.log(errors.join(''));
 }

