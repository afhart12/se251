//canvas and context
var c = document.querySelector("#pong");
var ctx = c.getContext("2d");

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//ball setup
let ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

var p1 = new Player("Player 1", "blue", 20, c.height/2);
var p2 = new Player("Player 2", "red", c.width - 20, c.height/2);
let player = [];
player[0] = new Player();
player[1] = new Player();

player[0].pad = new Box();
player[1].pad = new Box();

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       player[0].pad.vy += -player[0].pad.force
    }

    if(keys[`s`])
    {
        player[0].pad.vy += player[0].pad.force
    }
    //applies friction
    player[0].pad.vy *= fy
    //player movement
    player[0].move("w", "s", keys, fy, c.height);
    //p2 accelerates when key is pressed
    if(keys['w'])
    {
        player[1].pad.vy += -player[1].pad.force;
    }
    if(keys['s'])
    {
        player[1].pad.vy += player[1].pad.force;
    }

    //friction
    player[1].pad.vy *= fy;
    player[1].move("ArrowUp", "ArrowDown", keys, fy, c.height);
    if(player[1].pad.y < 0 + player[1].pad.h/2)
    {
        player[1].pad.y = 0 + player[1].pad.h/2;
    }
    if(player[1].pad.y > c.height - player[1].pad.h/2)
    {
        player[1].pad.y = c.height - player[1].pad.h/2;
    }
    //ball movement
    ball.move()

    //p1 collision
    if(player[0].pad.y < 0+player[0].pad.h/2)
    {
        player[0].pad.y = 0+player[0].pad.h/2
    }
    if(player[0].pad.y > c.height-player[0].pad.h/2)
    {
        player[0].pad.y = c.height-player[0].pad.h/2
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //p1 with ball collision
    if(ball.collide(player[0].pad))
    {
        ball.x = player[0].pad.x + player[0].pad.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    else if(ball.collide(player[1].pad))
    {
        ball.x = player[1].pad.x + player[1].pad.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2;
        ball.y = c.height/2;
        ball.vx = -2;
    }
    
    
    //draw the objects
    player[0].draw()
    player[1].draw()
    ball.draw()
}
