// multiple object factory creation - refactored

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

var vehicleFactoryTypes = {
    'car': car,
    'van': van,
    'lorry': lorry
};

var vehicleFactory = (function () {
    return {
        create: function (factoryType) {
            return Object.create(factoryType);
        }
    }
})();

var collectionOfVehicles = (function(factory, types) {
    var vehicles = [];

    var vehicle1 = factory.create(types.van);
    vehicle1.init();
    vehicles.push(vehicle1);

    var vehicle2 = factory.create(types.lorry);
    vehicle2.init();
    vehicles.push(vehicle2);

    var vehicle3 = factory.create(types.car);
    vehicle3.init();
    vehicles.push(vehicle3);

    return vehicles;
})(vehicleFactory, vehicleFactoryTypes);

collectionOfVehicles[0].whoAmI();
collectionOfVehicles[1].whoAmI();
collectionOfVehicles[2].whoAmI();
