'use strict';

const assert = require('assert');
const readFileHelp = require('../lib/read-files.js');

describe('read-files.js', function(){
  it('should read 4920616d20646966 492063616e206861 536f6c617220666c', function(done){
    readFileHelp(function(fileArray){
      assert.equal(fileArray.join(), ['4920616d20646966','492063616e206861','536f6c617220666c']);
      done();
    });
  });
});
