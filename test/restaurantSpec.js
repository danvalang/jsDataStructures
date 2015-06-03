var expect = require('chai').expect;
var Restaurant = require('../src/restaurant')();

describe('rest', function() {
    var dinners;
    beforeEach(function() {
        dinners = [{
            name: "Dan"
        }, {
            name: "John"
        }];
    });
    it('should be able to book a slot', function() {
        expect(Restaurant.book(dinners)).to.be.eql({
            table: 1,
            time: "12:00"
        });
    });
    it('should throw an exception on a slot not found', function() {
        var invocation = function() {
            Restaurant.book([1, 2, 3, 5]);
        };
        expect(invocation).to.throw(Error, "No slots found for the number of dinners");
    });

});