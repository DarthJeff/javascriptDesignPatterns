var baseShape = {
    area: {
        value: function() {
            console.log(this._width * this._height);
        }
    }
};

var squareShape = {
    width: {
        set: function(w) {
            this._width = w;
            this._height = w;
        }
    }
};

var square = {};
Object.defineProperties(square, squareShape);
Object.defineProperties(square, baseShape);

var s1 = Object.create(square);
s1.width = 10;

var s2 = Object.create(square);
s2.width = 20;

s1.area();
s2.area();
