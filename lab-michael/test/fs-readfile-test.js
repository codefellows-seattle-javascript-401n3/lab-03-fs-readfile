const readTheFile = require('../lib/fs-readfile.js');
const assert = require('assert');

describe('Readfile Module', function() {
  describe('Testing method #readTheFile()', function() {
    it('will match the first 8 bits', function(done) {
      readTheFile(function(data) {
        assert.equal(data[0], '5a6f6d6269652069');
        assert.equal(data[1], '596f757220626f6e');
        assert.equal(data[2], '486f646f72212048');
        done();
      });
    });
  });
});
