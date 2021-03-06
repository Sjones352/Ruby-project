'use strict';

var Animal = function() {
  this.stepsWalked = 0;
  this.walk = function(steps) {
    this.stepsWalked += steps;
    console.log('i am walking');
  };
  return this;
};

function Dog() {
  Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.wagTail = function() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function timer() {
      console.log('waggle');
    }, 500);
  }
};

function Cat() {
  Animal.call(this);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.reactToPetting = function() {
  var catMood = Math.floor((Math.random() * 10) + 1);
  console.log('random number is', catMood);
  if (catMood < 5) {
    console.log('Mrow');
  } else if (catMood === 5) {
    console.log('prrrrrrrrrrr');
  } else if (catMood > 5) {
    console.log('Meh. I am ignoring you and walking away');
  }
};

var animal = new Animal();
animal.walk(100);
console.log(animal.stepsWalked);
animal.walk(20);
console.log(animal.stepsWalked);
animal.walk(20);
console.log(animal.stepsWalked);

var dog = new Dog();
dog.wagTail();

var cat = new Cat();
cat.reactToPetting();