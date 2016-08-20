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
            var vehicleBuild = Object.assign({}, vehicleLinkedObject, vehicleType);
            return Object.create(vehicleBuild);
        }
    };
})(vehicleLink);

var vanBuild = vehicleBuilder.build(van);
var vanInstance = Object.create(vanBuild);
vanInstance.init();
vanInstance.whoAmI();

var lorryBuild = vehicleBuilder.build(lorry);
var lorryInstance = Object.create(lorryBuild);
lorryInstance.init();
lorryInstance.whoAmI();

var carBuild = vehicleBuilder.build(car);
var carInstance = Object.create(carBuild);
carInstance.init();
carInstance.whoAmI();
