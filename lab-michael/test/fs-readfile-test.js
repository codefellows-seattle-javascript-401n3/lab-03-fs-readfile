'use strict';

const readTheFile = require('../lib/fs-readfile.js');
const assert = require('assert');

describe('Readfile Module', function() {
  describe('Testing method #readTheFile()', function() {
    it('Will return a list of files', function(done) {
      readTheFile(function(data) {
        assert.equal(data[0], '3561366636643632');
        assert.equal(data[1], '3539366637353732');
        assert.equal(data[2], '3438366636343666');
        done();
        console.log(data);
      });
    });
  });
});
