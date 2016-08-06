//

var _componentAttributes = {
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
    },
    translations: {
        get scale() {
            return this._scale || 1;
        },
        set scale (s) {
            this._scale = s;
        },
        get rotate() {
            return this._rotate || 0;
        },
        set rotate (r) {
            this._rotate = r;
        }
    }
};

var _componentActions = {
    scale: function(ratio) {
        this.translations.scale = this.translations.scale * ratio;
        if(this.childComponents) {
            this.childComponents.forEach(function (com) {
                com.scale(ratio);
            });
        }
    },
    rotate: function(angle) {
        this.translations.rotate += angle;
        if(this.childComponents) {
            this.childComponents.forEach(function (com) {
                com.rotate(angle);
            });
        }
    }
};

var composite = {
    addComponent: function(component) {
        component.translations = Object.assign({}, this.translations);
        if(!this.childComponents) this.childComponents = [];
        this.childComponents.push(component);
    }
};

var baseCompositeBuild = Object.assign({}, composite, _componentActions, _componentAttributes);

var circleComponent = {
    get radius() {
        return this._radius * this.translations.scale;
    },
    set radius (r) {
        this._radius = r;
    }
};
var circleComponentBuild = Object.assign(circleComponent, baseCompositeBuild);

var squareComponent = {
    get width() {
        return (this._width || 0) * this.translations.scale;
    },
    set width (w) {
        this._width = w;
    }
};
var squareComponentBuild = Object.assign(squareComponent, baseCompositeBuild);


var tree = Object.create(baseCompositeBuild);

var circle1 = Object.create(circleComponentBuild);
circle1.radius = 100;
tree.addComponent(circle1);

var circle2 = Object.create(circleComponentBuild);
circle2.radius = 10;
circle1.addComponent(circle2);

var square1 = Object.create(squareComponentBuild);
square1.width = 20;
circle1.addComponent(square1);

tree.scale(4);
square1.scale(8);
console.log(circle1.radius);
console.log(circle2.radius);
console.log(square1.width);
