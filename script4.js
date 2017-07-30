
 var check = function display(value) {
   var errors = [];
   
   var num = Number.parseInt(value);

   if (!value)  {
      errors.push('you did not pass any arguments');           
    }
    else if (!isNaN(num)) {
     console.log('you passed the number', value) ; 
    } 
   else {
    errors.push('I do not like strings. Try again!');           
  }
    
    if (errors.length) {
     console.log(errors.join(" "));
    }
  };

  console.log(check(process.argv[2]));
