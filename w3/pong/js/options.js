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
const playerOptions = document.querySelectorAll(".op");


playerOptions.forEach((panel, index) => {
    const currentPlayer = player[index];

    // Fill color
    const fillInput = panel.querySelector(".fill");
    const fillOutput = panel.querySelectorAll(".output")[0];
    fillInput.value = currentPlayer.pad.fill;
    fillOutput.textContent = currentPlayer.pad.fill;
    fillInput.addEventListener("input", e => {
        currentPlayer.pad.fill = e.target.value;
        fillOutput.textContent = e.target.value;
        drawGame();
    }); });

    // Stroke color
    const strokeInput = panel.querySelector(".stroke");
    const strokeOutput = panel.querySelectorAll(".output")[1];
    strokeInput.value = currentPlayer.pad.stroke;
    strokeOutput.textContent = currentPlayer.pad.stroke;
    strokeInput.addEventListener("input", e => {
        currentPlayer.pad.stroke = e.target.value;
        strokeOutput.textContent = e.target.value;
        drawGame();
});

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
