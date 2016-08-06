// solution 1

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

var sPeg = Object.create(squarePeg);
sPeg.width = 100;

var rPeg = Object.create(roundPeg);
rPeg.diameter = sPeg.width;

var hole = Object.create(roundHole);
var c = hole.calcCircumfrence(rPeg);

console.log(c);
