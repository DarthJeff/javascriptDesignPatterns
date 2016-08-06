// singleton pattern

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

var patternsingleton = (function(factory){
    var patternInstance;
    return {
        getPattern: function(){
            if(!patternInstance){
                patternInstance = factory.create();
                patternInstance.init();
            }
            return patternInstance;
        }
    };
})(patternFactory);

patternsingleton.getPattern().whoAmI();
patternsingleton.getPattern().whoAmI();
patternsingleton.getPattern().whoAmI();
