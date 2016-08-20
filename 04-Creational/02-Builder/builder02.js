// linked objects

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

var vanBuild = Object.assign({}, vehicleLink, van);
var vanInstance = Object.create(vanBuild);
vanInstance.init();
vanInstance.whoAmI();

var lorryBuild = Object.assign({}, vehicleLink, lorry);
var lorryInstance = Object.create(lorryBuild);
lorryInstance.init();
lorryInstance.whoAmI();

var carBuild = Object.assign({}, vehicleLink, car);
var carInstance = Object.create(carBuild);
carInstance.init();
carInstance.whoAmI();
