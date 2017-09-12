'use strict';

var Animal = function() {
  this.stepsWalked = 0;
  this.walk = function(steps) {
    this.stepsWalked += steps;
    console.log("I am walking ", steps);
  }
  return this;
};

function Dog() {
  Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.wagTail = function() {
  for (var i = 1; i <= 10; i++) {
    setTimeout(function timer() {
      console.log('waggle');
    }, i * 3000);
  }
}

function Cat() {
  Animal.call(this);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.reactToPetting = function() {
  var x = 10;
  var rand = Math.floor((Math.random() * x) + 1);
  console.log('randon number is', rand);
  if (rand < 5) {
    console.log('Mrow');
  } else if (rand === 5) {
    console.log('prrrrrrrrrrr');
  } else if (rand > 5) {
    console.log('Meh. I am ignoring you and walking away');
  }
}

var walked = new Dog();
walked.walk(100);
console.log(walked.stepsWalked);
walked.walk(20);
console.log(walked.stepsWalked);
walked.walk(20);
console.log(walked.stepsWalked);

var dog = new Dog();
dog.wagTail();

var cat = new Cat();
cat.reactToPetting();