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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return "You lose! Paper beats Rock";
        } else if (computerSelection === "SCISSORS") {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return "You lose! Scissors beats Paper";
        } else if (computerSelection === "ROCK") {
            return "You win! Paper beats Rock";
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === "PAPER") {
            return "You win! Scissors beats Paper";
        }
    }
}

let pHand = prompt("Choose hand (Rock/Paper/Scissors)").toUpperCase();
const cHand = getComputerChoice();
console.log(playRound(pHand, cHand));