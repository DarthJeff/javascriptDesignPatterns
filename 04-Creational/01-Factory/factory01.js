// object creation

var car = {
    get make() {
        return this._make || '';
    },
    set make (ma) {
        this._make = ma;
    },
    get model() {
        return this._model || '';
    },
    set model (mo) {
        this._model = mo;
    }
};

var car = {
    make: 'Mercedes',
    model: 'A Class'
};

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


vehicle1.name = 'jeff';

var vehicle2 = Object.create(car);
vehicle2.name = 'susie';


console.log(vehicle1.name);
console.log(vehicle2.name);

var carMercedes = Object.create(car);
carMercedes.make = 'Mercedes';
carMercedes.model = 'A Class';

var carAudi = Object.create(car);
carMercedes.make = 'Audi';
carMercedes.model = 'A3';
