const read = require('../lib/read.js');
const assert = require('assert');

describe('testing module asyncly', function(){
  describe('read()', function(){
    it('should return files in order', function(done){
      read(function(text){
        assert.equal(text[ '73747566662073749999', '6a756e6b206a756e', '626c6168200a' ]);
        done();
      });
    });
  });
});
