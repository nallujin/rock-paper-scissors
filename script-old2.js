// Get the elements that had been made in the index.html
const pValue = document.querySelector("#p-value");  // Player's hand field
const cValue = document.querySelector("#c-value");  // Computer's hand field
const pHandContainer = document.querySelector(".player-hand1"); // Container for the player hands (btn)
const resultField = document.querySelector("#result");


// Computer hand value
const computerSelection = () => {
    let getComputerChoice = () => Math.floor(Math.random() * 30) + 1;
    const choice = getComputerChoice();
    if (choice <= 10) {
        return "Rock"; // 1 to 10
    } else if (choice <= 20) {
        return "Paper"; // 11 to 20
    } else {
        return "Scissors"; // 21 to 30
    }
}


// Added element - Play again button
const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Play again?";
playAgainBtn.style.width = "80%";


// Added element - Player hand buttons
const handBtns = ["Rock", "Paper", "Scissors"];
handBtns.forEach((hand) => {
    const handBtn = document.createElement("button");
    handBtn.type = "button";
    handBtn.id = hand.toLowerCase();
    handBtn.textContent = hand;
    pHandContainer.appendChild(handBtn);
});


// Selector for player hands (btns)
const rockHand = document.querySelector("#rock");
const paperHand = document.querySelector("#paper");
const scissorsHand = document.querySelector("#scissors");
const allBtn = [rockHand, paperHand, scissorsHand, playAgainBtn];


// To impersonate button:hover and button:active
let classSwitch = true;  // true = style on; false = style off
const switchOnOff = () => {
    if (classSwitch) {
        allBtn.forEach((btn) => {
            btn.addEventListener("mouseenter", () => {
                btn.classList.toggle("btnHover");
            });
            btn.addEventListener("mouseleave", () => {
                btn.classList.toggle("btnHover")
            });
            btn.addEventListener("mousedown", () => {
                btn.classList.toggle("btnActive");
            });
            btn.addEventListener("mouseup", () => {
                btn.classList.toggle("btnActive");
            });
        });

    }
};
switchOnOff();


// Game scores
let playerS = 0;
let computerS = 0;
const pScore = document.querySelector("#p-score");  // Player's score count
const cScore = document.querySelector("#c-score");  // Computer's score count
pScore.textContent = playerS.toString();
cScore.textContent = computerS.toString();

// Game count
const MAXCOUNT = 5;
const roundCount = document.querySelector("#rounds");
let roundNow = 1;
if (roundNow === MAXCOUNT) {
    while (pHandContainer.firstChild) {
        pHandContainer.removeChild(pHandContainer.firstChild);
    }
    pHandContainer.style.justifyContent = "center";
    pHandContainer.appendChild(playAgainBtn);
} else {
    const handChildren = [rockHand, paperHand, scissorsHand];
    handChildren.forEach((handChild) => {
        pHandContainer.appendChild(handChild);
        pHandContainer.style.justifyContent = "space-between";
    });
}

// Rounds count & display
roundCount.textContent = `${roundNow.toString()}/5`;

function whenRandom() {
    allBtn.forEach((buttonS) => {
        buttonS.disabled = true;
        buttonS.style.cursor = "not-allowed";
    });
    classSwitch = false;
    resultField.textContent = "";
}

function afterRandom(cHand, pHand) {
    allBtn.forEach((btn) => {
        btn.disabled = false;
        btn.style.cursor = "default";
    });

    classSwitch = true;
    cValue.textContent = cHand;
    resultField.textContent = validateResult(cHand, pHand);
}

function startARound(playerHand) {
    const compDis = computerSelection();

    const displayRandom = () => {
        // console.log("This will be logged");
        cValue.textContent = computerSelection();
    }
    whenRandom();
    pValue.textContent = playerHand;
    classSwitch = false;
    const intervalId = setInterval(displayRandom, 50);
    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval after 1 second
        afterRandom(compDis, playerHand);
        console.log(roundNow);
        classSwitch = true;
    }, 1000);
}

function validateResult(computer, player) {
    if (player === computer) {
        return "Tied."
    } else if (player === "Rock") {
        if (computer === "Paper") {
            computerS += 1;
            roundNow += 1;
            cScore.textContent = computerS.toString();
            return "You Lose! Paper beats Rock.";
        } else if (computer === "Scissors") {
            playerS += 1;
            roundNow += 1;
            pScore.textContent = playerS.toString();
            return "You Win! Rock beats Scissors.";
        }
    } else if (player === "Paper") {
        if (computer === "Rock") {
            playerS += 1;
            roundNow += 1;
            pScore.textContent = playerS.toString();
            return "You Win! Paper beats Rock.";
        } else if (computer === "Scissors") {
            computerS += 1;
            roundNow += 1;
            cScore.textContent = computerS.toString();
            return "You Lose! Scissors beats Paper.";
        }
    } else if (player === "Scissors") {
        if (computer === "Paper") {
            playerS += 1;
            roundNow += 1;
            pScore.textContent = playerS.toString();
            return "You Win! Scissors beats Paper.";
        } else if (computer === "Rock") {
            computerS += 1;
            roundNow += 1;
            cScore.textContent = computerS.toString();
            return "You Lose! Rock beats Scissors.";
        }
        roundNow += 1;
    }
};

rockHand.addEventListener("click", () => {
    startARound("Rock");
});
paperHand.addEventListener("click", () => {
    startARound("Paper");
});
scissorsHand.addEventListener("click", () => {
    startARound("Scissors");
});
