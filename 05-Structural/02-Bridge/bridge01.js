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
        this._tap = !(this._tap || false);
        if(this._tap){
            this._on();
        } else {
            this._off();
        }
    }
};


var switchPrinterbridgeBuild = Object.assign({}, _abstraction, _implementor, printerImplementor, switchAbstraction);
var gesturePrinterbridgeBuild = Object.assign({}, _abstraction, _implementor, printerImplementor, gestureAbstraction);
var switchScreenbridgeBuild = Object.assign({}, _abstraction, _implementor, screenImplementor, switchAbstraction);
var gestureScreenbridgeBuild = Object.assign({}, _abstraction, _implementor, screenImplementor, gestureAbstraction);

var switchPrinterbridge = Object.create(switchPrinterbridgeBuild);
switchPrinterbridge.switchOn();
switchPrinterbridge.switchOff();

var gesturePrinterbridge = Object.create(gesturePrinterbridgeBuild);
gesturePrinterbridge.tap();
gesturePrinterbridge.tap();

var switchScreenbridge = Object.create(switchScreenbridgeBuild);
switchScreenbridge.switchOn();
switchScreenbridge.switchOff();

var gestureScreenbridge = Object.create(gestureScreenbridgeBuild);
gestureScreenbridge.tap();
gestureScreenbridge.tap();
