// Alter an object's behavior when its state changes

var fruitStockList = [];

var fruit = {
    get name() {
        return this._name || '';
    },
    set name (n) {
        this._name = n;
    },
    get quantity() {
        return this._quantity || 0;
    },
    set quantity (q) {
        this._quantity = q;
    }
};

var fruitBuilder = function(name, quantity) {
    var fruitBuild = Object.create(fruit);
    fruitBuild.name = name;
    fruitBuild.quantity = quantity;
    return fruitBuild;
};

var apple = function(quantity) {
    return fruitBuilder('apple', quantity)
};
var banana = function(quantity) {
    return fruitBuilder('banana', quantity)
};
var pear = function(quantity) {
    return fruitBuilder('pear', quantity)
};

Array.prototype.firstOrDefault = function(name) {
    return this.filter(function(element){
            return element.name == name;
        })[0];
};

Array.prototype.exists = function(name) {
    return this.firstOrDefault(name) != null;
};

var fruitStockSaveNewState = {
    updateStock: function(fruitToUpdate) {
        fruitStockList.push(fruitToUpdate);
    }
};

var fruitStockUpdateState = {
    updateStock: function(fruitToUpdate) {
        var element = fruitStockList.firstOrDefault(fruitToUpdate.name);
        if(element != null) {
            element.quantity = fruitToUpdate.quantity;
        }
    }
};

var fruitStockStateManager = {
    getState: function(fruitToUpdate) {
        var states = [fruitStockSaveNewState, fruitStockUpdateState];
        return states[fruitStockList.exists(fruitToUpdate.name) ? 1 : 0];
    }
};

var fruitStockManager = {
    updateStock: function(fruitToUpdate) {
        var currentState = fruitStockStateManager.getState(fruitToUpdate);
        currentState.updateStock(fruitToUpdate);
    }
};

fruitStockManager.updateStock(banana(20));
fruitStockManager.updateStock(apple(18));
fruitStockManager.updateStock(banana(2));

console.log(fruitStockList);
