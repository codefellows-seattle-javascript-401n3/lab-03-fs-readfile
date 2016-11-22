'use strict';

const logFile = require('../lib/logfile');
const assert = require('assert');

describe('LogFile', function() {
  describe('#readFiles()', function() {
    it('should read the files without error', function(done) {
      logFile.readFiles(['./test/one.txt', './test/two.txt', './test/three.txt'], function(err) {
        if (err)
          done(err);
        else
          done();
      });
    });
    it('should return an array of the same size of file names given', function(done) {
      logFile.readFiles(['./test/one.txt', './test/two.txt', './test/three.txt'], function(err, data) {
        assert.strictEqual(data.length, 3);
        done();
      });
    });
    it('should return the data in the correct order that the files were given in', function(done) {
      logFile.readFiles(['./test/one.txt', './test/two.txt', './test/three.txt'], function(err, data) {
        assert.equal(data[0].toString('hex').substr(0, 16), '313a2057686f6168');
        assert.equal(data[1].toString('hex').substr(0, 16), '323a2057686f6168');
        assert.equal(data[2].toString('hex').substr(0, 16), '333a2057686f6168');
        done();
      });
    });
  });
});
