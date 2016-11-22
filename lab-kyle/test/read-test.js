'use strict';

const assert = require('assert');
const read = require('../lib/read');

describe('a read module', function() {
  describe('reader()', function() {
    it('should produce results', function() {
      read.reader('../texts/one.txt', '../texts/two.txt', '../texts/three.txt', read.returnShit, function(done) {
        assert.equal(false, true);
        done();
      });
    });
  });
});
