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


    // Username
    const nameInput = panel.querySelector(".username");
    const nameOutput = panel.querySelectorAll(".output")[0];
    nameInput.value = currentPlayer.username || 'Player ${index+1}';
    nameOutput.textContent = nameInput.value;

    nameInput.addEventListener("input", e => {
        currentPlayer.username = e.target.value;
        nameOutput.textContent = e.target.value;
    });

    nameInput.addEventListener("focus", () => {
        currentState = "pause";
    });
    
    // Fill color
    const fillInput = panel.querySelector(".fill");
    const fillOutput = panel.querySelectorAll(".output")[0];
    fillInput.value = currentPlayer.pad.fill;
    fillOutput.textContent = currentPlayer.pad.fill;
    fillInput.addEventListener("input", e => {
        currentPlayer.pad.fill = e.target.value;
        fillOutput.textContent = e.target.value;
        drawGame();
    });

    // Stroke color
    const strokeInput = panel.querySelector(".stroke");
    const strokeOutput = panel.querySelectorAll(".output")[1];
    strokeInput.value = currentPlayer.pad.stroke;
    strokeOutput.textContent = currentPlayer.pad.stroke;
    strokeInput.addEventListener("input", e => {
        currentPlayer.pad.stroke = e.target.value;
        strokeOutput.textContent = e.target.value;
        drawGame();
    }); // <-- this closing brace was missing

    // UP key
    const upInput = panel.querySelector(".u");
    const upOutput = panel.querySelectorAll(".output")[2];
    upInput.value = currentPlayer.keys.u || "";
    upOutput.textContent = currentPlayer.keys.u || "";
    upInput.addEventListener("keydown", e => {
        e.preventDefault();
        upInput.value = e.key;
        currentPlayer.keys.u = e.key;
        upOutput.textContent = e.key;
    });
    upInput.addEventListener("focus", () => {
        currentState = "pause";
    });

    // DOWN key
    const downInput = panel.querySelector(".d");
    const downOutput = panel.querySelectorAll(".output")[3];
    downInput.value = currentPlayer.keys.d || "";
    downOutput.textContent = currentPlayer.keys.d || "";
    downInput.addEventListener("keydown", e => {
        e.preventDefault();
        downInput.value = e.key;
        currentPlayer.keys.d = e.key;
        downOutput.textContent = e.key;
    });
    downInput.addEventListener("focus", () => {
        currentState = "pause";
    });

    // STRAIGHT key
    const straightInput = panel.querySelector(".s");
    const straightOutput = panel.querySelectorAll(".output")[4];
    straightInput.value = currentPlayer.keys.s || "";
    straightOutput.textContent = currentPlayer.keys.s || "";
    straightInput.addEventListener("keydown", e => {
        e.preventDefault();
        straightInput.value = e.key;
        currentPlayer.keys.s = e.key;
        straightOutput.textContent = e.key;
    });
    straightInput.addEventListener("focus", () => {
        currentState = "pause";
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




