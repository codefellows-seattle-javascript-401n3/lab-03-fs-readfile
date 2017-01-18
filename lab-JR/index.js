let runTheThings = require('./lib/reader');
let logSomething = function(value) {
  console.log(value);
};
//console.log works because as defined in reader.js, the callback is a function that takes a parameter of hexArray and is only called after the function has completed

runTheThings('./data/one.txt', './data/two.txt', './data/three.txt', logSomething);
