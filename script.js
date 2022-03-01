let playerScore = 0; //initializing variables to keep scores
let computerScore = 0; 
startGame(); //Calling fucntion to start game

function startGame() {
    let playerSelection = window.prompt ("Enter your selection: "); //Asking user for selection
    playerSelection = playerSelection.toLowerCase(); //converting selection to all lower case
    let computerSelection = computerPlay(); //initializing computer selection and also calling the computerPlay function
    let msg = playRound(computerSelection, playerSelection); //initializing msg and also calling play round function and passing two arguments
    console.log(msg); //Display scores
    if (playerScore <= 4 && computerScore <= 4) { //if player score and computer score are less then 5, keep playing!
        console.log("Current Score : Player - " + playerScore + ", Computer - " + computerScore); //display current score
        setTimeout(startGame, 0);
    } else {
        winCondition(); //call win condition function to annouce winner
    }
}

function computerPlay () { //function that randomly chooses selection for computer
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else if (random === 2) {
        return 'scissors';
    }
}

function playRound (computer, player) { //function that checks whether player or computer, won lost or drew the game. Also Adds points to score depending on outcome, and returns message
    let comWin = "You lose " + computer + " beats " + player;
    let playWin = "You win " + player + " beats " + computer;
    let tie = "You tied";
    if (computer === 'paper' && player === 'rock') {
        computerScore++;
        return comWin;
    } else if (computer === 'rock' && player === 'rock') {
        return tie;
    } else if (computer === 'scissors' && player === 'rock') {
        playerScore++;
        return playWin;
    } else if (computer === 'paper' && player === 'paper') {
        console.log("Tied scores stayed the same");
        return tie;
    } else if (computer === 'rock' && player === 'paper') {
        playerScore++;
        return playWin;
    } else if (computer === 'scissors' && player === 'paper') {
        computerScore++;
        return comWin;
    } else if (computer === 'paper' && player === 'scissors') {
        playerScore++;
        return playWin;
    } else if (computer === 'rock' && player === 'scissors') {
        computerScore++;
        return comWin;
    } else if (computer === 'scissors' && player === 'scissors') {
        return tie;
    }
}

function winCondition() { //function that gets called once computer or player reachs 5 wins,annonces winner
    console.log("Final Score : Player - " + playerScore + ", Computer - " + computerScore);
    if (playerScore >= 5){
        console.log("Player wins!");
    } 
    if (computerScore >= 5) {
        console.log("Computer wins!");
    }
}