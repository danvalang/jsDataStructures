var expect = require("chai").expect;
var Stack = require("../src/stack.js");

describe("Stack", function() {
	var stack;
	beforeEach(function () {
		stack = Stack();
	});
	it('should have initial length of 0', function() {
		expect(stack.length()).to.be.equal(0);
	});
	describe("should be LIFO", function() {
		it('should push', function() {
			stack.push(2);
			stack.push(3);
			expect(stack.length()).to.be.equal(2);
		});
		it('should peek on top', function() {
			stack.push(3);
			expect(stack.peek()).to.be.equal(3);
		});
		it('should let you pop the last element', function() {
			stack.push(3);
			expect(stack.pop()).to.be.equal(3);
		});
		it('should have final length of 1', function() {
			stack.push(3);
			expect(stack.length()).to.be.equal(1);
		});
	});
});