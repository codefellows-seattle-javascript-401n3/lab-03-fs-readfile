'use strict';
let assert = require('assert');
let fileReader = require('../lib/fileReader.js');

describe('fileReader.js', function() {
  describe('fileReader()', function() {
    it('logs 3 files in order', function(done) {
      fileReader(function(data) {
        assert.deepEqual(data, [ '274c6f72656d2069', '6c3b6b6b6c6c6b6c', '4c6f72656d206964']);
        done();
      });
    });
  });
});
