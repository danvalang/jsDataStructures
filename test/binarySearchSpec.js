var BinarySearch = require('../src/binarySearch');
var expect = require('chai').expect;
describe('Binary Search', function() {
  var fixtureInt, fixtureString;
  before(function() {
    fixtureInt = [ 2, 3, 5, 6, 7, 9, 10, 11, 12, 14 ];
    fixtureString = [ 'a', 'dan', 'f', 'mira', 'q', 'soy', 'v', 'yo' ];
  });
  it('should throw and error when invalid arguments are given', function() {
    expect(BinarySearch).to.throw(Error);
  });
  it('should search for a number', function(done) {
    BinarySearch(fixtureInt, 11, function(result) {
      expect(result).to.be.equal(7);
      done();
    });
  });
  it('should search over a string', function(done) {
    BinarySearch(fixtureString, 'dan', function(result) {
      expect(result).to.be.equal(1);
      done();
    });
  });
});