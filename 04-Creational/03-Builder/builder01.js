// kitchen items

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
