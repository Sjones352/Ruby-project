'use strict';

// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.


let promiseToClean = new Promise(function(resolve,reject) {
 
 let isClean = true;

if(isClean) {
  resolve('clean');
} else {
  reject('dirty');
}

});

// excute promise
promiseToClean.then(function(fromResolve) {
  console.log('the room is' + fromResolve);
}).catch(function(fromReject) {
  console.log('the room is' + fromReject);
})