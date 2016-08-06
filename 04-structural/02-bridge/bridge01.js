// Adapter makes things work after they're designed; Bridge makes them work before they are.

var implementor = {
    _output: function(val) {
        this.output(val);
    }
};

var printerImplementor = {
    output: function(val) {
        console.log('Printer: ' + val);
    }
};
var printerImplementorBuild = Object.assign(printerImplementor, implementor);


var screenImplementor = {
    output: function(val) {
        console.log('Screen: ' + val);
    }
};
var screenImplementorBuild = Object.assign(screenImplementor, implementor);

var abstraction = {
    _on: function() {
        this._output('Switched On');
    },
    _off: function() {
        this._output('Switched Off');
    }
};

var switchAbstraction = {
    switchOn: function() {
        this._on();
    },
    switchOff: function() {
        this._off();
    }
};
var switchAbstractionBuild = Object.assign(switchAbstraction, abstraction);

var gestureAbstraction = {
    tap: function() {
        this._tap = !(_tap || false);
        if(this._tap){
            this._on();
        } else {
            this._off();
        }
    }
};
var gestureAbstractionBuild = Object.assign(gestureAbstraction, abstraction);




