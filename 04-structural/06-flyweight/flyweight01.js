//

var car = {
    make: null,
    model: null,
    registrationNumber: null,
    miles: null,
    driverID: null,
    driverName: null,
    dateOut: null,
    dateReturnTo: null,
    status: 0,

    checkOut: function(driverID, driverName, numberOfDays) {
        this.driverID = driverID;
        this.driverName = driverName;
        this.dateOut = new Date();
        var returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + numberOfDays);
        this.dateReturnTo = returnDate;
        this.status = 1;
    },
    checkIn: function() {
        this.status = 0;
        this.driverID = null;
        this.driverName = null;
        this.dateOut = null;
        this.dateReturnTo = null;
    },
    checkOverDue: function() {
        if (this.status != 2 && new Date() > this.dateReturnTo) {
            this.status = 2;
        }
    }
};


var c = Object.create(car);

c.checkOut(1, 'jeff', 10);

console.log(c.dateOut);
console.log(c.dateReturnTo);
console.log(c.status);

c.checkOverDue();
c.checkIn();

console.log(c.status);
