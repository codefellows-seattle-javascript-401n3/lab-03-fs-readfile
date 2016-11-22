const assert = require('assert');
const read = require('../lib/read.js');

describe('Read Module', function() {

  describe('#read()',  function() {
    it('files logged in correct order', function(done) {
      var files = ['file 1 5b0a20207b0a2020', 'file 2 6c61622d30332d66', 'file 3 4c6f72656d206970'];
      read(function(results) {

        assert.equal(results[0], files[0]);
        assert.equal(results[1], files[1]);
        assert.equal(results[3], files[3]);

        done();
      });
    });
  });
});
