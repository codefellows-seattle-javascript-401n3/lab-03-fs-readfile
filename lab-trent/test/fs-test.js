'use strict';

const logFile = require('../lib/logfile');
const assert = require('assert');

describe('LogFile', function() {
  describe('#readFiles()', function() {
    it('should read the files without error', function(done) {
      logFile.readFiles(['one.txt', 'two.txt', 'three.txt'], function(err, data) {
        if (err)
          done(err);
        else
          done();
      });
    });
    it('should return an array of the same size of file names given', function(done) {
      logFile.readFiles(['one.txt', 'two.txt', 'three.txt'], function(err, data) {
        if (data.length == 3)
          done();
        else
          done(new Error('Wrong number of files read.'));
      });
    });
  });
});
