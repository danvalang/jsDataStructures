var expect = require("chai").expect;
var quickSort = require('../src/quickSort');
describe('quicksort', function () {
  before(function() {
    fixture = [4,8,5,2,3,1,6,9,0,15,45,-1,7];
  });
  it('should sort an array', function () {
    expect(quickSort(fixture)).to.be.eql([-1,0,1,2,3,4,5,6,7,8,9,15,45]);
  });
});