//

var footballTeams = function() {
    return [
        'WBA', 'Aston Villa', 'Birmingham City'
    ];
};

var footballTeamApi = {
    getAllTeams: function() {
        return footballTeams();
    }
};

var teams1 = footballTeamApi.getAllTeams();
console.log(teams1);

var teams2 = footballTeamApi.getAllTeams();
console.log(teams2);

var teams3 = footballTeamApi.getAllTeams();
teams3.push('Wolves');
console.log(teams3);

var teams4 = footballTeamApi.getAllTeams();
console.log(teams4);