function baseShapeClass(width, height) {
    this.width = width;
    this.height = height;
}

baseShapeClass.prototype.area = function() {
    console.log(this.width * this.height);
}

function square(width) {
    baseShapeClass.call(this, width, width)
}

square.prototype = Object.create(baseShapeClass.prototype);

square.prototype.area = function() {
    baseShapeClass.prototype.area.call(this);
}

var s = new square(100);
s.area();