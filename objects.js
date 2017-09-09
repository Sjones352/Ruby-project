'use strict';

// Base object Animal
// method walk with parameters numSteps
function Animal() {
}

Animal.prototype.walk = function(numSteps) {
  console.log('I am walking', numSteps);
 };

var stepsWalked = new Animal();

console.log(stepsWalked.walk(3));

