// just the one

var pattern = {
    init: function() {
        this.firstNumber = parseInt(Math.random()*100);
        this.secondNumber = parseInt(Math.random()*100);
    },
    whoAmI: function () {
        console.log('Pattern:' + this.firstNumber + this.secondNumber);
    }
};

var patternFactory = (function(pattern){
    return {
        create: function(){
            return Object.create(pattern)
        }
    };
})(pattern);

var patt = patternFactory.create();

patt.init();
patt.whoAmI();

patt.init();
patt.whoAmI();

patt.init();
patt.whoAmI();
