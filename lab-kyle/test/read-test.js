'use strict';

const assert = require('assert');
const read = require('../lib/read');

describe('a read module', function() {
  describe('reader()', function() {
    it('should produce three results', function(done) {
      read.readThreeFiles('./texts/one.txt', './texts/two.txt', './texts/three.txt', function(res) {
        assert.equal(res.length === 3, true);
        done();
      });
    });
    it('should have three logs in the correct order', function(done) {
      read.readThreeFiles('./texts/one.txt', './texts/two.txt', './texts/three.txt', function(res) {
        assert.equal(res[0], '4675726e69747572');
        assert.equal(res[1], '426c75652063726f');
        assert.equal(res[1], '426c75652063726f');
        done();
      });
    });
  });
});
