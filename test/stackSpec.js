var expect = require("chai").expect;
var should = require('chai').should();
var Stack = require("../src/stack.js");

describe("DataStructures", function() {
  describe("Stack", function() {
    it("should build a stack on the constructor", function() {
      var stack = new Stack(1, 2, 3, 4, 5);
      stack.should.not.have.a.property('index');
      stack.should.have.a.property('elements');
    });
    it("should be LIFO", function() {
      var stack = new Stack(1, 2, 3, 4, 5);
      expect(stack.pop()).to.be.equal(5);
      expect(stack.pop()).to.be.equal(4);
      stack.push("test");
      expect(stack.pop()).to.be.equal("test");
    });
    describe("#pop()", function() {
      it("should return null on empty stacks", function() {
        var stack = new Stack(1);
        expect(stack.pop()).to.be.equal(1);
        expect(stack.pop()).to.be.equal(null);
      });
    });
    it('should return the length', function() {
      var stack = new Stack(1, 2, 3);
      expect(stack.length()).to.be.equal(3);
      stack.pop();
      expect(stack.length()).to.be.equal(2);
    });
    it('should let you peek', function() {
      var stack = new Stack(1, 2, 3);
      expect(stack.peek()).to.be.equal(3);
      stack.pop();
      expect(stack.peek()).to.be.equal(2);
    });
  });
});