'use strict';

const fileRead = require('../lib/fileRead');
const expect = require('chai').expect;

describe('this is my fileRead lib', function () {
  describe('this is my splice function', function () {
    let result = [];
    before(function (done) {
      fileRead.splice(['./one.txt', './two.txt', './three.txt'], function(err, content) {
        if (err) throw err;
        result.push(content);
        if (result.length === 3) {
          // really hacky way to get done to wait for 3 passes
          done();
        }
      }, fileRead.splice);
    });
    it('splice function should return correct 8 bytes of hex values from 3 files', function () {
      expect(result.join()).to.be.equal('5a6f6d6269652069,596f757220626f6e,486f646f72212048');
    });
  });
});
