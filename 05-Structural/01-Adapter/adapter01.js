// a round peg in a round hole

var roundPeg = {
    get diameter() {
        return this._diameter || 0;
    },
    set diameter (d) {
        this._diameter = d;
    }
};

var roundHole = {
    calcCircumfrence: function(roundPeg) {
        return Math.PI * roundPeg.diameter;
    }
};

var rPeg = Object.create(roundPeg);
rPeg.diameter = 100;

var hole = Object.create(roundHole);
var c = hole.calcCircumfrence(rPeg);

console.log(c);
