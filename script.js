// Getting DOM elements for the script.js
const buttons = document.getElementsByClassName("buttons")[0];
const playerRock = document.getElementById("brock");
const playerPaper = document.getElementById("bpaper");
const playerScissors = document.getElementById("bscissors");
const levelOrFinal = document.getElementById("levels");
const playerScore = document.getElementById("p-score");
const computerScore = document.getElementById("c-score");
const result = document.getElementById("show-here");

// For the 'Computer hand' value
function getComputerChoice(){
    let numValue = Math.floor(Math.random()*3)+1;
    switch (numValue) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

// For the scores and the results
let resultValue;
let pScore = 0;
let cScore = 0;
playerScore.textContent = pScore.toString();
computerScore.textContent = cScore.toString();
levelOrFinal.textContent = "Level"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultValue = "Draw!";
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            resultValue = "You lose! Paper beats Rock";
            cScore += 1;
        } else if (computerSelection === "SCISSORS") {
            resultValue = "You win! Rock beats Scissors";
            pScore += 1;
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            resultValue = "You lose! Scissors beats Paper";
            cScore += 1;
        } else if (computerSelection === "ROCK") {
            resultValue = "You win! Paper beats Rock";
            pScore += 1;
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            resultValue = "You lose! Rock beats Scissors";
            cScore += 1;
        } else if (computerSelection === "PAPER") {
            resultValue = "You win! Scissors beats Paper";
            pScore += 1;
        }
    }
    result.textContent = resultValue;
}

function bestOfFive(player, computer) {
    // The arguments are referred to Player's and Computer's score
    // v This makes an element for the disclaimer after the game ends
    const resultContainer = document.getElementsByClassName("results")[0]
    const howToRes = document.createElement("p");
    howToRes.textContent = "Please refresh the page to restart the game.";
    // ^ This makes an element for the disclaimer after the game ends
    if (player === 5 || computer === 5) {
        buttons.textContent = "";
        levelOrFinal.textContent = "Final"
        resultContainer.append(howToRes);
        if (player > computer) {
            result.textContent = "You Win!"
        } else if (computer > player) {
            result.textContent = "Computer Wins!"
        }
    }
}
// --- Ignore this block, these were on first development ---
// let pHand = prompt("Choose hand (Rock/Paper/Scissors)").toUpperCase();
// const cHand = getComputerChoice();
// console.log(playRound(pHand, cHand));
// playRound("ROCK", getComputerChoice());
// --- Ignore these blocks, these were on first development ---

playerRock.addEventListener("click", ()=> {
    playRound("ROCK", getComputerChoice());
    playerScore.textContent = pScore.toString();
    computerScore.textContent = cScore.toString();
    bestOfFive(pScore, cScore);
})

playerPaper.addEventListener("click", ()=> {
    playRound("ROCK", getComputerChoice());
    playerScore.textContent = pScore.toString();
    computerScore.textContent = cScore.toString();
    bestOfFive(pScore, cScore);
})

playerScissors.addEventListener("click", ()=> {
    playRound("ROCK", getComputerChoice());
    playerScore.textContent = pScore.toString();
    computerScore.textContent = cScore.toString();
    bestOfFive(pScore, cScore);
})