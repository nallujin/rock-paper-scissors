let gameCount = 1;
const MAX_ROUNDS = 5;
let pScore = 0; // Player's score
let cScore = 0; // Computer's score

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNum > 100 * (1 / 3) && randomNum <= 100 * (2 / 3)) {
        return "ROCK"; // 33.333... < randomNum <= 66.666...
    } else if (randomNum <= 100 * (1 / 3)) {
        return "PAPER"; // randomNum <= 33.333...
    } else if (randomNum > 100 * (2 / 3)) {
        return "SCISSORS"; // randomNum > 66.666...
    }
}

function game() {
    while (gameCount <= MAX_ROUNDS) {
        let playerSelection = prompt("Your choice? (Select: Rock, Paper, Scissors)").toUpperCase();
        const computerSelection = getComputerChoice();
        console.log(`Round ${gameCount}`);

        function playRound() {
            if (playerSelection === computerSelection) {
                return `You tied with Computer! ${playerSelection} X ${computerSelection}`;
            } else if (playerSelection === "ROCK") {
                if (computerSelection === "PAPER") {
                    cScore += 1;
                    return `You Lose! Paper beats Rock`;
                } else if (computerSelection === "SCISSORS") {
                    pScore += 1;
                    return `You Win! Rock beats Scissors`;
                }
                gameCount += 1;
            } else if (playerSelection === "PAPER") {
                if (computerSelection === "ROCK") {
                    pScore += 1;
                    return `You Win! Paper beats Rock`;
                } else if (computerSelection === "SCISSORS") {
                    cScore += 1;
                    return `You Lose! Scissors beats Paper`;
                }
                gameCount += 1;
            } else if (playerSelection === "SCISSORS") {
                if (computerSelection === "ROCK") {
                    cScore += 1;
                    return `You Lose! Scissors beats Rock`;
                } else if (computerSelection === "PAPER") {
                    pScore += 1;
                    return `You Win! Scissors beats Paper`;
                }
                gameCount += 1;
            }
        }
        console.log(`${playRound()}. Player: ${pScore}, Computer: ${cScore}.`);
    }
    if (pScore > cScore) {
        console.log(`You Win!`);
    } else if (pScore < cScore) {
        console.log(`You Lose!`);
    }
}

game();
