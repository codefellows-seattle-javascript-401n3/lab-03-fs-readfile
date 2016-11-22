let hex = require('../lib/readHex.js');
let assert = require('assert');


describe('pulling first hex values from files', function(){
  describe('readHex', function(){
    it('should verify that the contents of allData are equal to what is expected', function(done){
      hex.read(function(allData) {
        assert.equal(hex.data[0], '5a6f6');
        assert.equal(hex.data[1], '596f7');
        assert.equal(hex.data[2], '486f6');
        done();
      });
    });
  });
});
