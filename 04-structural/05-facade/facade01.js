//

var databaseConnection = {
    open: function() {
        this._open = true;
        console.log('Open Database Connection');
    },
    close: function() {
        this._open = false;
        console.log('Close Database Connection');
    },
    query: function(q) {
        if(this._open || false) {
            console.log('Query Database: ' + q);
        } else {
            console.log('ERROR: Database Connection is Closed');
        }
    }
};

var customerFacade = {
    getCustomerBySurname: function(surname) {
        var conn = Object.create(databaseConnection);
        conn.open();
        conn.query('SELECT * FROM tbCustomer WHERE surname = ' + surname);
        conn.close();
    }
};


var facade = Object.create(customerFacade);
facade.getCustomerBySurname('Skywalker');