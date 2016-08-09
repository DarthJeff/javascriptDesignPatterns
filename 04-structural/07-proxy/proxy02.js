// cache to increase efficiency

var api = {
    getAllTeams: function() {
        console.log('I am an API call');
        return [
            'WBA', 'Aston Villa', 'Birmingham City'
        ];
    }
};

var proxyFootballApi = {
    getAllTeams: function() {
        if(!this._teams) {
            this._teams = api.getAllTeams();
        }
        return this._teams;
    }
};

var teams1 = proxyFootballApi.getAllTeams();
console.log(teams1);

var teams2 = proxyFootballApi.getAllTeams();
console.log(teams2);
