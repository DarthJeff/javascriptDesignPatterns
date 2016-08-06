// builder pattern

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

var vanInstance = vehicleBuilder.build(van);
vanInstance.init();
vanInstance.whoAmI();

var lorryInstance = vehicleBuilder.build(lorry);
lorryInstance.init();
lorryInstance.whoAmI();

var carInstance = vehicleBuilder.build(car);
carInstance.init();
carInstance.whoAmI();
