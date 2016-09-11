//  factories of a type

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

var kitchenFactory = (function (items) {
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
    }
})(kitchenitems);
