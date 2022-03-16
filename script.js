let playerScore = 0; //initializing variables to keep scores
let computerScore = 0; 

let computerSelection;
let playerSelection;
let msg;

const btnRock = document.querySelector('.btn-rock');
btnRock.addEventListener('click', () => {
    let x = document.getElementById('results');
    results.innerHTML = 'Play-by-Play!';
    let y = document.getElementById('score');
    score.innerHTML = 'Score!';
    playerSelection = 'rock';
    let computerSelection = computerPlay();
    msg = playRound(computerSelection, playerSelection);
    displayResultsPerGame();
    displayScore();
    remove();
});

const btnPaper = document.querySelector('.btn-paper');
btnPaper.addEventListener('click', () => {
    let x = document.getElementById('results');
    results.innerHTML = 'Play-by-Play!';
    let y = document.getElementById('score');
    score.innerHTML = 'Score!';
    playerSelection = 'paper';
    let computerSelection = computerPlay();
    msg = playRound(computerSelection, playerSelection);
    displayResultsPerGame();
    displayScore();
    remove();
    });

const btnScis = document.querySelector('.btn-scissors');
btnScis.addEventListener('click', () => {
    let x = document.getElementById('results');
    results.innerHTML = 'Play-by-Play!';
    let y = document.getElementById('score');
    score.innerHTML = 'Score!';
    playerSelection = 'scissors';
    let computerSelection = computerPlay();
    msg = playRound(computerSelection, playerSelection);
    displayResultsPerGame();
    displayScore();
    remove();
});

function displayResultsPerGame() {
    const results = document.querySelector('.results');
    const displayResults = document.createElement('div');
    displayResults.classList.add('displayResults');
    displayResults.textContent = msg;
    results.appendChild(displayResults);
}

function displayScore() {
    const score = document.querySelector('.score');
    const displayScores = document.createElement('div');
    displayScores.classList.add('displayScores');
    if (playerScore <= 4 && computerScore <= 4) {
        displayScores.textContent = ("Current Score : Player - " + playerScore + ", Computer - " + computerScore);
    } else {
        winCondition(); //call win condition function to annouce winner
    }
    score.appendChild(displayScores);
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
    const winner = document.querySelector('.winner');
    const displayWinner = document.createElement('div');
    displayWinner.classList.add('displayWinner');
    let y = document.getElementById('score');
    score.innerHTML = '';
    let x = document.getElementById('results');
    results.innerHTML = '';
    
    if (playerScore >= 5){
        displayWinner.textContent = 'Player Wins!'
    } 
    if (computerScore >= 5) {
        displayWinner.textContent = 'Computer Wins!'
    }
    winner.appendChild(displayWinner);
} 
