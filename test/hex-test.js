'use strict';

let assert = require('assert');
let fs = require('fs');

describe('should be a fs method that prints string', function() {
  it('if no error, it should stdout string from one.txt', function() {
    assert.equal(fs.readFile('./lib/one.txt', function(err, data) {
      if(err) {
        process.stdout.write(err);
        return;
      }
      process.stdout.write(data.toString());
    }));
  });
});
