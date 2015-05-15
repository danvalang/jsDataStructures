var expect = require("chai").expect;
var stack = require("../src/stack.js")();

describe("DataStructures", function() {
  describe("Stack", function() {
    it('should have initial length of 0', function() {
      expect(stack.length()).to.be.equal(0);
    });
    describe("should be LIFO", function() {
      it('should push', function () {
        stack.push(2);
        stack.push(3);
        expect(stack.length()).to.be.equal(2);
      });
      it('should peek on top', function () {
        expect(stack.peek()).to.be.equal(3);
      });
      it('should let you pop the last element', function () {
        expect(stack.pop()).to.be.equal(3);
      });
      it('should have final length of 1', function () {
        expect(stack.length()).to.be.equal(1);
      });
    });
  });
});