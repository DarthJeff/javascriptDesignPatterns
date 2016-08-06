// multiple object creation - unit testing issues

var car = {
    init: function() {
        this.vehicleType = 'car';
    },
    whoAmI: function () {
        console.log('I am a ' + this.vehicleType);
    }
};
var van = {
    init: function() {
        this.vehicleType = 'van';
    },
    whoAmI: function () {
        console.log('I am a ' + this.vehicleType);
    }
};
var lorry = {
    init: function() {
        this.vehicleType = 'lorry';
    },
    whoAmI: function () {
        console.log('I am a ' + this.vehicleType);
    }
};

var collectionOfVehicles = (function() {
    var vehicles = [];

    var vehicle1 = Object.create(van);
    vehicle1.init();
    vehicles.push(vehicle1);

    var vehicle2 = Object.create(lorry);
    vehicle2.init();
    vehicles.push(vehicle2);

    var vehicle3 = Object.create(car);
    vehicle3.init();
    vehicles.push(vehicle3);

    return vehicles;
})();

collectionOfVehicles[0].whoAmI();
collectionOfVehicles[1].whoAmI();
collectionOfVehicles[2].whoAmI();
