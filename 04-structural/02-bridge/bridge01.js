// Adapter makes things work after they're designed; Bridge makes them work before they are.

var _implementor = {
    _output: function(val) {
        if(this.output){
            this.output(val);
        }
    }
};

var _abstraction = {
    _on: function() {
        this._output('Switched On');
    },
    _off: function() {
        this._output('Switched Off');
    }
};

var bridgeBuild = Object.assign({}, _abstraction, _implementor);




var printerImplementor = {
    output: function(val) {
        console.log('Printer: ' + val);
    }
};

var screenImplementor = {
    output: function(val) {
        console.log('Screen: ' + val);
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






