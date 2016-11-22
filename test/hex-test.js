'use strict';

let assert = require('assert');
let fs = require('fs');
let readAll = require('../lib/reader');

//don't test other libraries
// describe('should be a fs method that prints string', function() {
//   it('if no error, it should stdout string from one.txt', function() {
//     assert.equal(fs.readFile('./lib/one.txt', function(err, data) {
//       if(err) {
//         process.stdout.write(err);
//         return;
//       }
//       process.stdout.write(data.toString());
//     }));
//   });
// });

describe('should return an array', function() {
  it('should push one item into an array', function(done) {
    readAll(cb);
    function cb(valueHexArray) {
      assert.equal(valueHexArray, true);
      done();
    }
  });
});
