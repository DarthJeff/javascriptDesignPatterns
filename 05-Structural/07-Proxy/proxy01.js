//

var api = {
    getAllTeams: function() {
        console.log('I am a long API call');
        return [
            'WBA', 'Aston Villa', 'Birmingham City'
        ];
    }
};

var teams1 = api.getAllTeams();
console.log(teams1);

var teams2 = api.getAllTeams();
console.log(teams2);
