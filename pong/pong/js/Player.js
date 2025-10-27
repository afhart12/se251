class Player
{
    constructor()
    {
        this.players = [];
    }

    add(name, pad) {
        this.players.push(
            {
                name: name,
                score: 0,
                highScore: 0,
                pad: pad
            }
        );
    }

    get(index)
    {
        return this.players[index];

    }

    
}
