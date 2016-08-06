// object creation

var car = {
    init: function() {
        this.vehicleType = 'car';
    },
    whoAmI: function () {
        console.log('I am a ' + this.vehicleType);
    }
};

var vehicle1 = Object.create(car);
vehicle1.init();
vehicle1.whoAmI();
