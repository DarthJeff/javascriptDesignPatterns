//

var footballTeams = function() {
    return [
        'WBA', 'Aston Villa', 'Birmingham City'
    ];
};

var footballTeamApi = {
    getAllTeams: function() {
        if(!this._teams) {
            this._teams = footballTeams();
        }
        return this._teams;
    }
};

var teams1 = footballTeamApi.getAllTeams();
teams1.push('Wolves');
console.log(teams1);

var teams2 = footballTeamApi.getAllTeams();
console.log(teams2);
