var expect = require('chai').expect;
var E$ = require('../dist/index');

describe('测试index.js', function() {
  describe('测试庫函数test()', function() {
    it('"abd"是否符合條件', function() {
      expect(E$('abd').then(['a',"b","c"],2).then(["a",2,3,4,5],1).test()).to.be.equal(false);
    });
  });
  describe('测试函数.replace()', function() {
    it('"abd"是否符合條件', function() {
      expect(E$('abd').then(['a',"b","c"],2).then(["a",2,3,4,5],1).replace("1")).to.be.equal('ab1');
    });
});
});
