//Rock, Paper, And Scissors

//the const will link of strings of choice to be picked.
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
//This is the factor of the score
let playerScore = 0;
let computerScore = 0;
//the function and its argumental for if and else
function playGame(playerChoice){
//This shows teh computer choice between 1,2,3 when playing the game. Random choices each time.
    const computerChoice = choices[Math.floor(Math.random() * 3)];
//console.log(computerChoice); this was use for runing check in the console log.
    let result = "";
//This is the loop for the game, and if and then on players choice. Making sure if one choice by player is teh same as computer, there will be a result.
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
//Display each choice, between computer and player
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

//Shows end result and keeps track of score, switches bewteen player and comuter. Loop action
    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}