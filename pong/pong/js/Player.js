class Player
{
    constructor(name, color, x, y, w = 20, h = 150)
    {
        this.name = name;
        this.score = 0;
        this.highScore = 0;
        this.pad = new Box();
        this.pad.w = w;
        this.pad.h = h;
        this.pad.x = x;
        this.pad.y = y;
        this.pad.color = color;
        this.pad.force = 1;

    }

    draw()
    {
        this.pad.draw();
    }

    
}
