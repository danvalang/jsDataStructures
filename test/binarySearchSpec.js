var BinarySearch = require('../src/binarySearch');
var expect = require('chai').expect;
var should = require('chai').should();
describe('Binary Search', function() {
	var fixtureInt, fixtureString;
	before(function() {
		fixtureInt = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
		fixtureString = ['a', 'dan', 'f', 'mira', 'q', 'soy', 'v', 'yo'];
	});
	it('should throw and error when invalid arguments are given', function() {
		var actual = function() {
			BinarySearch(1, 2, 3);
		};
		expect(actual).to.throw(Error);
	});
	it('should search for a number', function(done) {
		BinarySearch(fixtureInt, 3, function(result) {
			expect(result).to.be.equal(1);
		});
		BinarySearch(fixtureInt, 2, function(result) {
			expect(result).to.be.equal(0);
			done();
		});
	});
	it('should search over a string', function(done) {
		BinarySearch(fixtureString, 'dan', function(result) {
			expect(result).to.be.equal(1);
		});
		BinarySearch(fixtureString, 'a', function(result) {
			expect(result).to.be.equal(0);
			done();
		});
	});
	it('should throw an exception when target is not found', function() {
		var actual = function() {
			BinarySearch(fixtureInt, 4, function(result) {});
		};
		expect(actual).to.throw(RangeError);

	});
});