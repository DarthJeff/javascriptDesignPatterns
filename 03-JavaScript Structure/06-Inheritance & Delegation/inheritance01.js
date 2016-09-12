function BaseShapeClass(width, height) {
    this.width = width;
    this.height = height;
}

BaseShapeClass.prototype.area = function() {
    console.log(this.width * this.height);
};

function Square(width) {
    BaseShapeClass.call(this, width, width)
}

Square.prototype = Object.create(BaseShapeClass.prototype);

Square.prototype.area = function() {
    BaseShapeClass.prototype.area.call(this);
};

var s1 = new Square(10);
var s2 = new Square(20);

s1.area();
s2.area();
