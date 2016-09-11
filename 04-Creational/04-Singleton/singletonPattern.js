
var heater = {
    get temp() { return this._temp || 0; },
    set temp(t) { this._temp = t; },
    on: function() {
        var self = this;
        self.heatTimer = setInterval(function () {
            if(self.temp >= 100) {
                console.log('boiled');
                clearInterval(self.heatTimer);
                self.off();
            } else {
                console.log(self.temp);
                self.temp += 10;
            }
        }, 50);
    },
    off: function() {
        var self = this;
        self.heatTimer = setInterval(function () {
            if(self.temp > 0) {
                self.temp -= 10;
                console.log(self.temp);
            } else {
                clearInterval(self.heatTimer);
            }
        }, 50);
    }
};


var kitchenItems = {
    kettle: {}
};

// var boil = function(item) {
//     if(!item.isBeingBoiled) {
//         item.isBeingBoiled = true;
//         item.boilTemp = 0;
//         var timer = setInterval(function () {
//             if (item.boilTemp >= 100) {
//                 clearInterval(timer);
//                 item.isBeingBoiled = false;
//                 console.log('boiled');
//             } else {
//                 console.log(item.boilTemp);
//                 item.boilTemp += 10;
//             }
//         }, 10);
//     }
// };
//
// var kettle = Object.create(kitchenItems.kettle);
// boil(kettle);
//
// var kettle = Object.create(kitchenItems.kettle);
// boil(kettle);


heater.on();