
 var check = function display(value) {
   var errors = [];


   if (!value)  {
      errors.push('you did not pass any arguments');           
    }
      else if (value)  {
      errors.push('I do not like strings. Try again!');           
   }
    else {
      (value != '0' && parseInt(value)!= 0) 
     console.log('you passed the number', value) ; 
    } 
 
    if (errors.length) {
     console.log(errors.join(" "));
    }
  };

  console.log(check(process.argv[2]));
