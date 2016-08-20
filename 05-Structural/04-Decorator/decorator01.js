//

var circle = {
    get radius() {
        return this._radius || 0;
    },
    set radius (r) {
        this._radius = r;
    }
};

var square = {
    get width() {
        return this._width || 0;
    },
    set width (w) {
        this._width = w;
    }
};

var _position = {
    get xPos() {
        return this._xPos || 0;
    },
    set xPos (x) {
        this._xPos = x;
    },
    get yPos() {
        return this._yPos || 0;
    },
    set yPos (y) {
        this._yPos = y;
    }
};

var circleBuild = Object.assign(circle, _position);
var squareBuild = Object.assign(square, _position);

var decorateCanRotate = function(shape) {
    Object.defineProperty(shape, 'rotate', {
        get: function() { return this._angle || 0; },
        set: function(angle) { this._angle = angle; }
    });
};


var square1 = Object.create(squareBuild);
var square2 = Object.create(squareBuild);

decorateCanRotate(square1);
square1.rotate = 10;

console.log(square1.rotate);
console.log(square2.rotate);
