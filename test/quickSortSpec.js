var expect = require("chai").expect;
var quickSort = require('../src/quickSort');
describe('quicksort', function () {
  before(function() {
    fixture = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
  });
  it('should sort an array', function () {
    expect(quickSort(fixture)).to.be.eql([2,3,5,6,7,9,10,11,12,14]);
  });
});