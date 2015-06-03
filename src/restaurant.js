var _ = require('lodash');
function restaurant() {
    return  ({
    name: "Osteria",
    zipcode: 15478,
    book: book,
    slots: [{
        time: "12:00",
        tables: [{
            id: 1,
            chairs: 3
        }],
        booked: false,
    }]

});
}

function book(dinners) {
    var numberOfDinners = dinners.length;
    var reservation = {};
    this.slots.forEach(function(slot) {
        if(slot.booked === false) {
            slot.tables.forEach(function(table) {
                if(table.chairs >= numberOfDinners) {
                    reservation.table = table.id;
                    reservation.time = slot.time;
                }
            });
        }
    });
    if(_.isEmpty(reservation)) {
        throw(new Error("No slots found for the number of dinners"));
    }
    return reservation;
}

module.exports =  restaurant;