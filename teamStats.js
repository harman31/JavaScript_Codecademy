const team = {
    _players: [
        {firstName: "John", lastName: "Smith", age: 25},
        {firstName: "James", lastName: "Wilson", age: 24},
        {firstName: "Joe", lastName: "Jefferson", age: 26}
    ],
    _games: [
        {opponent: "Hornets", teamPoints: 46, opponentPoints: 22},
        {opponent: "Bulls", teamPoints: 78, opponentPoints: 46},
        {opponent: "Cavs", teamPoints: 76, opponentPoints: 104}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(oppName, points, oppPoints) {
        const game = {
            opponent: oppName,
            points: points,
            opponentPoints: oppPoints
        }
        this.games.push(game);
    }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Sea Lions", 100, 50);
team.addGame("Wolves", 56, 90);
team.addGame("Tigers", 30, 47);

console.log(team.games);