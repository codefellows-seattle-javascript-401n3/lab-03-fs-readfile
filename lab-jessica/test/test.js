const assert = require('assert');
const read = require('../lib/read.js');

describe('Read Module', function() {
  describe('#read()',  function() {
    it('files logged in correct order', function(done) {
      const files = ['file 1 5b0a20207b0a2020', 'file 2 6c61622d30332d66', 'file 3 4c6f72656d206970'];
      read(function(results) {
        assert.deepEqual(results, files);
        done();
      });
    });
  });
});
