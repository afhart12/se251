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
ball.color = "black"

let player = [];
player[0] = new Player("Player 1", "blue", 30, c.height / 2);
player[1] = new Player("Player 2", "red", c.width - 30, c.height / 2);

function resetBall() {
    ball.x = c.width / 2;
    ball.y = c.height / 2;
    ball.vx = -2;
    ball.vy = -2;

    console.log(`${player[0].score} | ${player[1].score}`);
}

const scoreDivs = document.querySelectorAll("#score div");

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    for (let i = 0; i < player.length; i++) {
    const upKey = i === 0 ? "w" : "ArrowUp";
    const downKey = i === 0 ? "s" : "ArrowDown";

    if (keys[upKey]) player[i].pad.vy += -player[i].pad.force;
    if (keys[downKey]) player[i].pad.vy += player[i].pad.force;

    player[i].pad.vy *= fy;
    player[i].move(upKey, downKey, keys, fy, c.height);

    if (player[i].pad.y < player[i].pad.h / 2) {
        player[i].pad.y = player[i].pad.h / 2;
    }
    if (player[i].pad.y > c.height - player[i].pad.h / 2) {
        player[i].pad.y = c.height - player[i].pad.h / 2;
    }
        }
    //applies friction
    player[0].pad.vy *= fy
    //player movement
    player[0].move("w", "s", keys, fy, c.height);
    

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
    if (ball.x < 0) {
    player[1].score++; // Player 2 scores
    resetBall();
    }
    if (ball.x > c.width) {
    player[0].score++; // Player 1 scores
    resetBall();
    }
    ctx.fillStyle = "black"; //displays score on screen
    ctx.font = "30px Arial";
    ctx.fillText(`${player[0].score} | ${player[1].score}`, c.width / 2 - 40, 40);
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

    for (let i = 0; i < scoreDivs.length; i++) {
    scoreDivs[i].innerText = player[i].score; //updates divs with scores
}
}
