'use strict';

const fileRead = require('../lib/fileRead');
const expect = require('chai').expect;

describe('this is my fileRead lib', function () {
  describe('this is my reading function', function () {
    let result = [];
    before(function (done) {
      fileRead.splice(['./one.txt'], function(err, content) {
        if (err) throw err;
        result = content;
        done();
      });
    });
    it('reading function should return correct value from a single file', function () {
      expect(result).to.be.equal('testtest');
    });
  });
});
