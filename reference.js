'use strict';

let nameObject = {
	first: 'sandra',
	last: 'Jones'
};

console.log(nameObject);

function changeName(obj) {
	obj.first = 'Diana';
	console.log(obj);
}

changeName(nameObject);

console.log(nameObject);


// Invoking a Function an object Method

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName(); 

console.log(myObject);

var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMontlyFee: function(fee){
     this.total = this.total - fee;
     return this.name + ' remaining balance is '+ this.total; 
  }
}
 
 monica.deductMontlyFee();
 console.log(monica);
