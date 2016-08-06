// a square peg - NaN

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

var hole = Object.create(roundHole);
var c = hole.calcCircumfrence(sPeg);

console.log(c);
