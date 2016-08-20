// solution 2

var roundPeg = {
    get diameter() {
        return this._diameter || 0;
    },
    set diameter (d) {
        this._diameter = d;
    }
};

var squarePeg = {
    get width() {
        return this._width || 0;
    },
    set width (w) {
        this._width = w;
    }
};

var roundHole = {
    calcCircumfrence: function(roundPeg) {
        return Math.PI * roundPeg.diameter;
    }
};

var squarePegInRoundHoleAdapter = {
    adapt: function() {
        this.diameter = this.width;
    }
};

Object.assign(squarePegInRoundHoleAdapter, squarePeg, roundPeg);
var adapter = Object.create(squarePegInRoundHoleAdapter);

adapter.width = 100;
adapter.adapt();

var hole = Object.create(roundHole);
var c = hole.calcCircumfrence(adapter);

console.log(c);
