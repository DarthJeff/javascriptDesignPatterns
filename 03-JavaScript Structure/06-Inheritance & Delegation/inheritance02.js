var baseShape = {
    area: function() {
        console.log(this._width * this._height);
    }
};

var square = {
    set width (w) {
        this._width = w;
        this._height = w;
    }
};

Object.assign(square, baseShape);

var s = Object.create(square);
s.width = 100;
s.area();
