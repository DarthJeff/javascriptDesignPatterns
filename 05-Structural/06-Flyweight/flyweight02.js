// optimizing code that is repetitive, slow and inefficiently shares data
// intrinsic states
// extrinsic states

// data normalisation

var carFactory = function(make, model) {
    var car = {
        make: make,
        model: model
    };
    return Object.create(car);
};
var carManager = function(make, model) {
    var carCollection = [];
    var car = carCollection[make + model];
    if(!car) {
        car = carFactory(make, model);
        carCollection[make + model] = car;
    }
    return car;
};

var driverFactory = function(driverID, driverName) {
    var driver = {
        driverID: driverID,
        driverName: driverName
    };
    return Object.create(driver);
};

var rentalCar = {
    carType: null,
    registrationNumber: null,
    miles: null,
    status: 0,
    driver: null
};
