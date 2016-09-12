function baseShapeClass(width, height) {
    this.width = width;
    this.height = height;
}

baseShapeClass.prototype.area = function() {
    console.log(this.width * this.height);
};

function square(width) {
    baseShapeClass.call(this, width, width)
}

square.prototype = Object.create(baseShapeClass.prototype);

square.prototype.area = function() {
    baseShapeClass.prototype.area.call(this);
};

var s1 = new square(10);
var s2 = new square(20);

s1.area();
s2.area();