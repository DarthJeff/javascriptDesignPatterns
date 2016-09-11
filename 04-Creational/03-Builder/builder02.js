// additional kitchen items - duplicated logic

var kitchenitems = {
    spoon: {
        get name() { return this._name || ''; },
        set name(n) { this._name = n; },
        stir: function(direction, speed){
            // code for stiring spoon
        }
    },
    pan: {
        get name() { return this._name || ''; },
        set name(n) { this._name = n; },
        heat: function(temperature){
            // code for heating pan
        }
    },
    cupboard: {
        get name() { return this._name || ''; },
        set name(n) { this._name = n; },
        get items() { return this._items; },
        clean: function() {
            this._items = [];
        },
        openDoor: function() {
            // code for opening the cupboard door
        },
        closeDoor: function() {
            // code for closing the cupboard door
        }
    },
    tree: {
        get name() { return this._name || ''; },
        set name(n) { this._name = n; },
        get items() { return this._items; },
        clean: function() {
            this._items = [];
        }
    }
};
