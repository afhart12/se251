/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
const optionsHeading = document.querySelector("#options h2");
const sidesDiv = document.querySelector("#options .sides");

optionsHeading.addEventListener("click", () => {
    sidesDiv.classList.toggle("hidden");
});
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
const fillInputs = document.querySelectorAll(".fill");
const outputs = document.querySelectorAll(".output");

function drawGame() {
    ctx.clearRect(0, 0, c.width, c.height);
    players.forEach(player => {
        player.pad.draw();
    })
    ball.draw();
}
fillInputs.forEach((input, index) => {
    const player = players[index];
    const output = outputs[index];

    input.value = player.pad.fill;
    output.innerHTML = player.pad.fill;

    input.addEventListener("input", (e) => {
        const newColor = e.target.value;

        player.pad.fill = newColor;

        output.innerHTML = newColor;

        drawGame();
    });
});

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
