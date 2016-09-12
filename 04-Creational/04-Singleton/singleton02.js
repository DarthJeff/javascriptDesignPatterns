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

var loggerSingleton = (function(logger){
    return {
        create: function(){
            if(!this._loggerInstance) {
                this._loggerInstance = Object.create(logger);
            }
            return this._loggerInstance;
        }
    };
})(logger);

// somewhere in your code
var messageLogger = loggerSingleton.create();
messageLogger.log('1111');
messageLogger.log('2222');


// somewhere else in your code
var anotherMessageLogger = loggerSingleton.create();
anotherMessageLogger.log('3333');
anotherMessageLogger.log('4444');

// get logger results
messageLogger.output();
