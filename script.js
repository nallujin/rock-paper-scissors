// Intention of this block is to make all text input field on read-only mode
const allInputs = document.querySelectorAll("input");
allInputs.forEach(input => {
    input.readOnly = true;
});

// Variable assignment for game lives and limit
const MAXGAME = 5;


const rpsGame = () => {
    let pScore = 0; // p for Player
    let cScore = 0; // c for Computer
    const gameStart = () => {
        let gameCount = 0;
        while (gameCount < MAXGAME) {
            // Getting choice for the computer
            const computerSelection = () => {
                let getComputerChoice = () => Math.floor(Math.random() * 30) + 1;
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
                const theScore = `- Player: ${pScore}, Computer: ${cScore}`;
                if (player === computer) {
                    console.log(`Tied! ${player} vs ${computer} ${theScore}`);
                } else if (player === "ROCK") {
                    if (computer === "PAPER") {
                        console.log(`You Lose! Paper beats Rock. ${theScore}`);
                    } else if (computer === "SCISSORS") {
                        console.log(`You Win! Rock beats Scissors. ${theScore}`);
                    }
                } else if (player === "PAPER") {
                    if (computer === "ROCK") {
                        console.log(`You Win! Paper beats Rock. ${theScore}`);
                    } else if (computer === "SCISSORS") {
                        console.log(`You Lose! Scissors beats Paper. ${theScore}`);
                    }
                } else if (player === "SCISSORS") {
                    if (computer === "ROCK") {
                        console.log(`You Lose! Rock beats Scissors. ${theScore}`);
                    } else if (computer === "PAPER") {
                        console.log(`You Win! Scissors beats Paper. ${theScore}`);
                    }
                }

            }

            theResult(playerSelection(), computerSelection());
            gameCount += 1;
        }

    }
        gameStart()
        const repeatOrNo = () => {
            const askUser = confirm("Do you want to play again?");
            if (askUser === true) {
                gameStart();
            }
        };
}