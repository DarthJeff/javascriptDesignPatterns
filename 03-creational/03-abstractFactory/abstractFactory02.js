// abstract factory

var vehicleLink = {
    whoAmI: function () {
        console.log('I am a ' + this.vehicleType);
    }
};

var car = {
    init: function() {
        this.vehicleType = 'car';
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

var vehicleBuilder = (function(vehicleLinkedObject){
    return {
        build: function(vehicleType) {
            return Object.assign({}, vehicleLinkedObject, vehicleType);
        }
    };
})(vehicleLink);

var vehicleAbstractFactory = (function(builder){
    return {
        create: function (factoryType) {
            var vehicleBuild = builder.build(factoryType);
            return Object.create(vehicleBuild);
        }
    };
})(vehicleBuilder);

var vanInstance = vehicleAbstractFactory.create(van);
vanInstance.init();
vanInstance.whoAmI();

var lorryInstance = vehicleAbstractFactory.create(lorry);
lorryInstance.init();
lorryInstance.whoAmI();

var carInstance = vehicleAbstractFactory.create(car);
carInstance.init();
carInstance.whoAmI();
