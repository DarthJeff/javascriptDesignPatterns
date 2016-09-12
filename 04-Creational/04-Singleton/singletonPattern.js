// just the one

var logger = {
    log: function(message) {
        this.logs.push(message);
    }  ,
    get logs() {
        this._logs = this._logs || [];
        return this._logs;
    },
    output: function(){
        for(var i = 0; i < this.logs.length; i++){
            console.log(this.logs[i]);
        }
    }
};

var loggerFactory = (function(logger){
    return {
        create: function(){
            return Object.create(logger);
        }
    };
})(logger);

// somewhere in your code
var messageLogger = loggerFactory.create();
messageLogger.log('1111');
messageLogger.log('2222');


// somewhere else in your code
var anotherMessageLogger = loggerFactory.create();
anotherMessageLogger.log('3333');
anotherMessageLogger.log('4444');


// get logger results
console.info('messageLogger');
messageLogger.output();

console.info('anotherMessageLogger');
anotherMessageLogger.output();
