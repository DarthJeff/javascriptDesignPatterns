// builder functions

var kitchenItemLink = {
    name: {
        get: function() { return this._name || ''; },
        set: function(n) { this._name = n; }
    }
};

var kitchenStorageItemLink = {
    items: {
        get: function() { return this._items; }
    },
    clean: {
        value: function() { this._items = []; }
    },
};

var kitchenitems = {
    spoon: {
        value: {
            stir: function(direction, speed){
                // code for stiring spoon
            }
        }
    },
    pan: {
        value: {
            heat: function(temperature){
                // code for heating pan
            }
        }
    },
    cupboard: {
        value: {
            openDoor: function() {
                // code for opening the cupboard door
            },
            closeDoor: function() {
                // code for closing the cupboard door
            }
        },
    },
    tree: {
        value: {}
    }
};

var itemBuilder = function(itemLink) {
    return {
        build: function(item) {
            Object.defineProperties(item, itemLink);
        }
    };
};

var kitchenInitialBuilder = itemBuilder(kitchenitems);
var kitchenItemBuilder = itemBuilder(kitchenItemLink);
var kitchenStorageItemBuilder = itemBuilder(kitchenStorageItemLink);

var kitchenBuilder = (function(initialBuilder, itemBuilder, storageItemBuilder) {
    return {
        build: function() {
            var builtKitchenItems = {};
            initialBuilder.build(builtKitchenItems);

            itemBuilder.build(builtKitchenItems.spoon);
            itemBuilder.build(builtKitchenItems.pan);
            itemBuilder.build(builtKitchenItems.cupboard);
            itemBuilder.build(builtKitchenItems.tree);

            storageItemBuilder.build(builtKitchenItems.cupboard);
            storageItemBuilder.build(builtKitchenItems.tree);

            return builtKitchenItems;
        }
    };
})(kitchenInitialBuilder, kitchenItemBuilder, kitchenStorageItemBuilder);

var builtKitchenItems = kitchenBuilder.build();

var kitchenFactory = (function (items) {
    return {
        create: function (itemName) {
            switch (itemName) {
                case 'Pan Cupboard':
                    return Object.create(items.cupboard);
                case 'Saucepan':
                    return Object.create(items.pan);
                case 'Spoon Tree':
                    return Object.create(items.tree);
                case 'Tea Spoon':
                    return Object.create(items.spoon);
                case 'Dessert Spoon':
                    return Object.create(items.spoon);
            }
        }
    }
})(builtKitchenItems);

var kitchen = (function(factory){

    var panCupboardName = 'Pan Cupboard';
    var panCupboard = factory.create(panCupboardName);
    panCupboard.name = panCupboardName;
    panCupboard.clean();

    var saucepanName = 'Saucepan';
    var saucepan = factory.create(saucepanName);
    saucepan.name = saucepanName;
    panCupboard.items.push(saucepan);

    var spoonTreeName = 'Spoon Tree';
    var spoonTree = factory.create(spoonTreeName);
    spoonTree.name = spoonTreeName;
    spoonTree.clean();

    var teaSpoonName = 'Tea Spoon';
    var teaSpoon = factory.create(teaSpoonName);
    teaSpoon.name = teaSpoonName;
    spoonTree.items.push(teaSpoon);

    var dessertSpoonName = 'Dessert Spoon';
    var dessertSpoon = factory.create(dessertSpoonName);
    dessertSpoon.name = dessertSpoonName;
    spoonTree.items.push(dessertSpoon);

    return {
        units: [panCupboard, spoonTree]
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
