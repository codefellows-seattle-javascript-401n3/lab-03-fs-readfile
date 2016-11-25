const read = require('../lib/read.js');
const assert = require('assert');

describe('testing module asyncly', function(){
  describe('read()', function(){
    it('should return .txt files in order', function(done){
      read(function(text){
        assert.equal(text[0], '7374756666207374');
        assert.equal(text[1], '6a756e6b206a756e');
        assert.equal(text[2], '626c6168200a');
        done();
      });
    });
  });
});
