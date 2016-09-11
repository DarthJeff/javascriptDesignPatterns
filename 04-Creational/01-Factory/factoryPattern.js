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

var kitchenFactory = (function(items){
    return {
        create: function (itemName) {
            switch (itemName) {
                case 'Pan Cupboard':
                    return Object.create(items.cupboard);
                case 'Saucepan':
                    return Object.create(items.pan);
                case 'Spoon Cupboard':
                    return Object.create(items.cupboard);
                case 'Tea Spoon':
                    return Object.create(items.spoon);
                case 'Dessert Spoon':
                    return Object.create(items.spoon);
            }
        }
    };
})(kitchenitems);

var kitchen = (function(factory){

    var panCupboardName = 'Pan Cupboard';
    var panCupboard = factory.create(panCupboardName);
    panCupboard.name = panCupboardName;
    panCupboard.clean();

    var saucepanName = 'Saucepan';
    var saucepan = factory.create(saucepanName);
    saucepan.name = saucepanName;
    panCupboard.items.push(saucepan);

    var spoonCupboardName = 'Spoon Cupboard';
    var spoonCupboard = factory.create(spoonCupboardName);
    spoonCupboard.name = spoonCupboardName;
    spoonCupboard.clean();

    var teaSpoonName = 'Tea Spoon';
    var teaSpoon = factory.create(teaSpoonName);
    teaSpoon.name = teaSpoonName;
    spoonCupboard.items.push(teaSpoon);

    var dessertSpoonName = 'Dessert Spoon';
    var dessertSpoon = factory.create(dessertSpoonName);
    dessertSpoon.name = dessertSpoonName;
    spoonCupboard.items.push(dessertSpoon);

    return {
        units: [panCupboard, spoonCupboard]
    };

})(kitchenFactory);

// log results
for(var u = 0; u < kitchen.units.length; u++){
    var unit = kitchen.units[u];
    for(var i = 0; i < unit.items.length; i++){
        var item = unit.items[i];
        console.log(unit.name, 'contains:', item.name);
    }
}
