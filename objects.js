'use strict';

// Base object Animal
// method walk with parameters numSteps
var Animal = function () {

    this.stepsWalked = 0;
    this.name = "some animal"
    this.walk = function (steps) {
      this.stepsWalked += steps;
      console.warn(this.name, " walked ", steps);
    }

    return this;
};

function Donkey(name) {
  this.name = "Donkey called " + name;
  return this;
}
Donkey.prototype = Object.create(new Animal())

var donkey = new Donkey("bob");
var snake = new Animal();

console.warn(donkey.walk(100));
console.warn(donkey.stepsWalked);
console.warn(donkey.walk(20));
console.warn(donkey.stepsWalked);
console.warn(donkey.walk(20));
console.warn(donkey.stepsWalked);

snake.prototype = new Donkey("woa");

console.warn(snake.prototype.walk(30));
console.warn(snake.stepsWalked);

snake.prototype = new Donkey("woa");

console.warn(snake.prototype.walk(30));
console.warn(snake.stepsWalked);