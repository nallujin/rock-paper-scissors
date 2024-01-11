// Variable assignment for game lives and limit
const MAXGAME = 5;
let pScore = 0; // p for Player
let cScore = 0; // c for Computer

// Getting choice for the computer
let getComputerChoice = () => Math.floor(Math.random() * 30) + 1;
const computerSelection = () => {
    const choice = getComputerChoice();
    if (choice <= 10) {
        return "ROCK"; // 1 to 10
    } else if (choice > 10 && choice <= 20) {
        return "PAPER"; // 11 to 20
    } else if (choice > 20) {
        return "SCISSORS"; // 21 to 30
    }
}

// Getting choice for the player
const playerSelection = () => {
    let choice;
    const getPlayerChoice = () => {
        while (true) {
            let userInput = prompt("Choose: Rock/Paper/Scissors").toUpperCase();
            if (userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS") {
                choice = userInput;
                break;
            } else {
                // repeats the loop
            }
        }
    }
    getPlayerChoice();
    return choice;
}

// Final result
const theResult = (player, computer) => {
    if (player === computer) {
        console.log(`Tied! ${player} vs ${computer}`);
    } else if (player === "ROCK") {
        if (computer === "PAPER") {
            console.log("You Lose! Paper beats Rock.");
        } else if (computer === "SCISSORS") {
            console.log("You Win! Rock beats Scissors.");
        }
    } else if (player === "PAPER") {
        if (computer === "ROCK") {
            console.log("You Win! Paper beats Rock.");
        } else if (computer === "SCISSORS") {
            console.log("You Lose! Scissors beats Paper.");
        }
    } else if (player === "SCISSORS") {
        if (computer === "ROCK") {
            console.log("You Lose! Rock beats Scissors.");
        } else if (computer === "PAPER") {
            console.log("You Win! Scissors beats Paper.");
        }
    }

}

theResult(playerSelection(), computerSelection());