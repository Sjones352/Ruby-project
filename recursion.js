
'use strict';

// recursion is a function that calls itself untill it doesn't

function sum () {
let args = Array.from(arguments);
let first = args[0];
let second = args[1];

  if (args.length === 2) {
    return first + second ;
  }

  // spread out an array with apply method
  return first + sum.apply(null, args.slice(1));
}

let result = sum(1,2,3,4);
console.log(result);