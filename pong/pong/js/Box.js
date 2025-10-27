var c = document.querySelector("#pong");
var ctx = c.getContext("2d");

class Box
{
    constructor()
    {
        this.x = c.width/2
        this.y = c.height/2
        this.w = 100
        this.h = 100
        this.color = `blue`
        this.vx = 0
        this.vy = 0
        this.force = 1;
    }

    draw()
    {
        ctx.save()
            ctx.translate(this.x, this.y)
            ctx.fillStyle = this.color
            ctx.fillRect(0-this.w/2, 0-this.h/2, this.w, this.h)
        ctx.restore()
    }

    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    left(){return this.x - this.w/2}
    right(){return this.x + this.w/2}
    top(){return this.y - this.h/2}
    bottom(){return this.y + this.h/2}

    collide(obj)
    {
        if(
            this.right() > obj.left() &&
            this.left() < obj.right() &&
            this.bottom() > obj.top() &&
            this.top() < obj.bottom()
        )
        {
            return true
        }
        return false
    }

    

}

var p1 = new Box();
p1.w = 20;
p1.h = 150;
p1.x = p1.w / 2;
p1.y = c.height / 2;

p1.color = "blue";

var p2 = new Box();
p2.w = 20;
p2.h = 150;
p2.x = c.width - p2.w / 2;
p2.y = c.height /2;
p2.color = "red";

