var BinarySearch = require('../src/binarySearch');
var QuickSort = require('../src/quickSort');
var expect = require('chai').expect;
describe('Binary Search', function() {
  var fixtureInt, fixtureString;
  before(function() {
    fixtureInt = QuickSort([9, 7, 5, 11, 12, 2, 14, 3, 10, 6]);
    fixtureString = QuickSort(['a', 'v', 'q', 'f', 'dan', 'mira', 'soy', 'yo']);
  });
  it('should throw and error when invalid arguments are given', function() {
    expect(BinarySearch).to.throw(Error);
  });
  it('should search for a number', function(done) {
    BinarySearch(fixtureInt, 11, function(result) {
      expect(result).to.be.ok;
      done();
    });
  });
  it('should search over a string', function(done) {
    BinarySearch(fixtureString, 'dan', function(result) {
      expect(result).to.be.ok;
      done();
    });
  });
});