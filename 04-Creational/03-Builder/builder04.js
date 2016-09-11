// refactor object structure

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
