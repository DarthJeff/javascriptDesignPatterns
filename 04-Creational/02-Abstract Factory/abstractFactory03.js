//

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

var kitchenItemFactory = function (item) {
    return {
        create: function (itemName) {
            var itemInstance = Object.create(item);
            itemInstance.name = itemName;
            return itemInstance;
        }
    }
};

var cupboardItemFactory = kitchenItemFactory(kitchenitems.cupboard);
var spoonItemFactory = kitchenItemFactory(kitchenitems.spoon);
var panItemFactory = kitchenItemFactory(kitchenitems.pan);

var kitchenFactory = (function(cupboardFactory, spoonFactory, panFactory){
    return {
        createCupboard: function(itemName){
            var cupboardInstance =  cupboardFactory.create(itemName);
            cupboardInstance.clean();
            return cupboardInstance;
        },
        createSpoon: function(itemName){
            return spoonFactory.create(itemName);
        },
        createPan: function(itemName){
            return panFactory.create(itemName);
        }
    };
})(cupboardItemFactory, spoonItemFactory, panItemFactory);

var kitchen = (function(factory){

    var panCupboard = factory.createCupboard('Pan Cupboard');

    var saucepan = factory.createPan('Saucepan');
    panCupboard.items.push(saucepan);

    var spoonCupboard = factory.createCupboard('Spoon Cupboard');

    var teaSpoon = factory.createSpoon('Tea Spoon');
    spoonCupboard.items.push(teaSpoon);

    var dessertSpoon = factory.createSpoon('Dessert Spoon');
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
