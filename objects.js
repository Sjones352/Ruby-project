'use strict';

function Animal() {
	this.stepsWalked = 0;
}

Animal.prototype.walk = function(steps) {
	this.stepsWalked += steps;
	console.log('I am walking', steps);
	return this;
}

var move = new Animal();
move.walk(3);

function Dog() {
	Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.wagTail = function() {
  for (var i= 1; i <= 5; i++) {
	 console.log('silly');
  }

}

var shit = new Dog('waggle');
		shit.wagTail();
