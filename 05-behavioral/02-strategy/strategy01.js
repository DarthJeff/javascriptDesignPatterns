// Encapsulates an algorithm inside a class
//
// The Strategy pattern is really about having a different implementation that accomplishes (basically) the same thing,
//     so that one implementation can replace the other as the strategy requires.
//     For example, you might have different sorting algorithms in a strategy pattern.
//     The callers to the object does not change based on which strategy is being employed, but regardless of strategy the goal is the same (sort the collection).
//
//
// The State pattern is about doing different things based on the state, while leaving the caller releaved from the burden of accommodating every possible state.
//     So for example you might have a getStatus() method that will return different statuses based on the state of the object,
//     but the caller of the method doesn't have to be coded differently to account for each potential state.
//

var unorderedList = [
    {
        name: 'Wolves',
        position: 2
    },
    {
        name: 'Villa',
        position: 4
    },
    {
        name: 'WBA',
        position: 1
    },
    {
        name: 'Birmingham',
        position: 3
    }
];

var sortByPositionStrategy = {
    sort: function() {
        unorderedList.sort(function(obj1, obj2){
            return obj1.position - obj2.position;
        });
    }
};

var sortByNameStrategy = {
    sort: function () {
        unorderedList.sort(function (obj1, obj2) {
            return obj1.name > obj2.name;
        });
    }
};

var footballTeams = {
    teams: unorderedList,
    sort: function() {
        this.strategy.sort();
    },
    strategy: sortByNameStrategy
};

console.info('unordered teams');
console.log(footballTeams.teams);

console.info('team name sorted teams');
footballTeams.sort();
console.log(footballTeams.teams);

console.info('position sorted teams');
footballTeams.strategy = sortByPositionStrategy;
footballTeams.sort();
console.log(footballTeams.teams);
