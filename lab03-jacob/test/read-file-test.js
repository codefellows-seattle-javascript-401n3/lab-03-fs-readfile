const expect = require('chai').expect;
const readFiles = require('../lib/readfile.js');


describe('readFiles', function() {
  it('should read files sequentially', function(done) {
    readFiles('./lib/one.txt', './lib/two.txt', './lib/three.txt', function(data) {
      expect(data).to.deep.equal(['./lib/one.txt', './lib/two.txt', './lib/three.txt']);
      done();
    });
  });
});
