// object creation - unit testing issues - proposed solution

var kitchenitems = {
    spoon: {
        get name() { return this._name || ''; },
        set name(n) { this._name = n; }
    },
    pan: {
        get name() { return this._name || ''; },
        set name(n) { this._name = n; }
    },
    cupboard: {
        get name() { return this._name || ''; },
        set name(n) { this._name = n; },
        get items() { return this._items; },
        clean: function() {
            this._items = [];
        }
    }
};

var kitchenFactory = {
    create: function(item){
        return Object.create(item);
    }
};

var kitchen = (function(items, factory){

    var panCupboardName = 'Pan Cupboard';
    var panCupboard = factory.create(items.cupboard);
    panCupboard.name = panCupboardName;
    panCupboard.clean();

    var saucepanName = 'Saucepan';
    var saucepan = factory.create(items.pan);
    saucepan.name = saucepanName;
    panCupboard.items.push(saucepan);

    var spoonCupboardName = 'Spoon Cupboard';
    var spoonCupboard = factory.create(items.cupboard);
    spoonCupboard.name = spoonCupboardName;
    spoonCupboard.clean();

    var teaSpoonName = 'Tea Spoon';
    var teaSpoon = factory.create(items.spoon);
    teaSpoon.name = teaSpoonName;
    spoonCupboard.items.push(teaSpoon);

    var dessertSpoonName = 'Dessert Spoon';
    var dessertSpoon = factory.create(items.spoon);
    dessertSpoon.name = dessertSpoonName;
    spoonCupboard.items.push(dessertSpoon);

    return {
        units: [panCupboard, spoonCupboard]
    };

})(kitchenitems, kitchenFactory);

// log results
for(var u = 0; u < kitchen.units.length; u++){
    var unit = kitchen.units[u];
    for(var i = 0; i < unit.items.length; i++){
        var item = unit.items[i];
        console.log(unit.name, 'contains:', item.name);
    }
}
