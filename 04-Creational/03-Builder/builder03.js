// seperate duplicated logic

var kitchenItemLink = {
    get name() { return this._name || ''; },
    set name(n) { this._name = n; }
};

var kitchenStorageItemLink = {
    get items() { return this._items; },
    clean: function() {
        this._items = [];
    }
};

var kitchenitems = {
    spoon: {
        stir: function(direction, speed){
            // code for stiring spoon
        }
    },
    pan: {
        heat: function(temperature){
            // code for heating pan
        }
    },
    cupboard: {
        openDoor: function() {
            // code for opening the cupboard door
        },
        closeDoor: function() {
            // code for closing the cupboard door
        }
    },
    tree: {}
};
