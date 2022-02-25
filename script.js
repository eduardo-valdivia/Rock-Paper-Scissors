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
        return comWin;
    } else if (computer === 'rock' && player === 'rock') {
        return tie;
    } else if (computer === 'scissors' && player === 'rock') {
        return playWin;
    } else if (computer === 'paper' && player === 'paper') {
        return tie;
    } else if (computer === 'rock' && player === 'paper') {
        return playWin;
    } else if (computer === 'scissors' && player === 'paper') {
        return comWin;
    } else if (computer === 'paper' && player === 'scissors') {
        return playWin;
    } else if (computer === 'rock' && player === 'scissors') {
        return comWin;
    } else if (computer === 'scissors' && player === 'scissors') {
        return tie;
    }

}

let computerSelection = computerPlay();
let playerSelection = window.prompt ("Enter your selection: ");
playerSelection = playerSelection.toLowerCase();
playRound(computerSelection, playerSelection);


console.log(playRound(computerSelection, playerSelection));