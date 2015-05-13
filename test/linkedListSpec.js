var LinkedList = require('../src/linkedList').LinkedList;
var Node = require('../src/linkedList').Node;
var expect = require("chai").expect;
var should = require('chai').should();
describe('DataStructures', function() {
    describe('LinkedList', function() {
        beforeEach(function() {
            list = new LinkedList('hello');
        });
        it('should be able to insert a node at the beggining', function() {
            list.insertBeggining('dan says');
            expect(list.startNode.data).to.be.equal('dan says');
            expect(list.startNode.next.data).to.be.equal('hello');
        });
        it('should be able to go to the beggining', function() {
            list.insertBeggining('dan says3');
            list.goStart();
            expect(list.currentNode.data).to.be.equal('dan says3');
        });
        it('should be able to insert a node at the end', function() {
            list.insertEnd('end node');
            expect(list.endNode.data).to.be.equal('end node');
        });
        it('should be able to go to the end', function() {
            list.insertAfter('in the middle');
            list.insertEnd('End Point');
            list.goEnd();
            expect(list.endNode.data).to.be.equal('End Point');
        });
        it('should be able to insert a node after another', function() {
            list.insertAfter("Este nodo");
            expect(list.currentNode.data).to.be.equal(list.endNode.data);
        });
        it('should be able to insert a node before another', function() {
            var expected = list.insertAfter("Este nodo");
            list.insertBefore("antes del otro");
            expect(list.currentNode.next).to.be.equal(expected);
        });
        it('should be able to delete a node ', function() {
          list.insertAfter(" pretty ");
          list.insertAfter("World");
          list.goStart();
          list.goNext();
          list.deleteCurrent();
          expect(list.startNode.next).to.be.equal(list.endNode);
        });
        describe('#node', function() {
            before(function() {
                node = new Node("hello");
            });
            beforeEach(function() {
                node = new Node("hello");
            });
            it('should be able to be created', function() {
                node.should.have.property('data');
                node.should.have.property('next');
                node.should.have.property('previous');
            });
            it('should have a previous and next properties', function() {
                node.should.have.property('next');
                node.should.have.property('previous');
            });
            it('should be able to be linked to other nodes', function() {
                var node2 = new Node('World');
                node.linkNext(node2);
                expect(node2.previous).to.be.equal(node);
                node.linkPrevious(node2);
                expect(node2.next).be.equal(node);
            });
        });
    });
});