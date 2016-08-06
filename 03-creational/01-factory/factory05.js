// multiple object factory creation - spelling mistake issues

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

var vehicleFactory = (function () {
    return {
        create: function (factoryType) {
            switch(factoryType) {
                case 'car':
                    return Object.create(car);
                    break;
                case 'van':
                    return Object.create(van);
                    break;
                case 'lorry':
                    return Object.create(lorry);
                    break;
            }
        }
    }
})();

var collectionOfVehicles = (function(factory) {
    var vehicles = [];

    var vehicle1 = factory.create('van');
    vehicle1.init();
    vehicles.push(vehicle1);

    var vehicle2 = factory.create('lorry');
    vehicle2.init();
    vehicles.push(vehicle2);

    var vehicle3 = factory.create('carr');
    vehicle3.init();
    vehicles.push(vehicle3);

    return vehicles;
})(vehicleFactory);

collectionOfVehicles[0].whoAmI();
collectionOfVehicles[1].whoAmI();
collectionOfVehicles[2].whoAmI();
