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
    // let path1 = '../data/one.txt';
    // let path2 = '../data/two.txt';
    // let path3 = '../data/three.txt';
    //these threw errors because of where mocha lives/where i was calling from since mocha was installed at the root ({__dirname}), and was being called...OR an absolute path is necessary

    let path1 = `${__dirname}/../data/one.txt`;
    let path2 = `${__dirname}/../data/two.txt`;
    let path3 = `${__dirname}/../data/three.txt`;

    readAll(path1, path2, path3, cb);
    function cb(valueHexArray) {
      assert.equal(valueHexArray.length, 3);
      assert.equal(Array.isArray(valueHexArray), true);
      assert.deepEqual(valueHexArray, [ '4c6f72656d206970', '53434f5454545454', '736f6d6520626967' ]);
      done();
    }
  });
});
