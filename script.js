let playerScore = 0;
let computerScore = 0;
startGame();

function startGame() {
    let playerSelection = window.prompt ("Enter your selection: ");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let msg = playRound(computerSelection, playerSelection);
    console.log(msg);
    if (playerScore <= 4 && computerScore <= 4) {
        console.log("Current Score : Player - " + playerScore + ", Computer - " + computerScore);
        setTimeout(startGame, 0);
    } else {
        winCondition();
    }
}

function computerPlay () {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else if (random === 2) {
        return 'scissors';
    }
}

function playRound (computer, player) {
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

function winCondition() {
    console.log("Final Score : Player - " + playerScore + ", Computer - " + computerScore);
    if (playerScore >= 5){
        console.log("Player wins!");
    } 
    if (computerScore >= 5) {
        console.log("Computer wins!");
    }
}