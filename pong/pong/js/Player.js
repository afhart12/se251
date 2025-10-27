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

    move(upKey, downKey, keys, friction, canvasHeight)
    {
        if (keys[upKey]) this.pad.vy -= this.pad.force;
        if (keys[downKey]) this.pad.vy += this.pad.force;
        this.pad.vy *= friction;
        this.pad.move();

        
    }
    draw()
    {
        this.pad.draw();
    }

    
}
