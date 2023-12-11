let choiceArray = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;
let tie = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choiceArray[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    tie++;
    return "It's a tie!";
  }

  // rock
  if (playerSelection === choiceArray[0].toLowerCase()) {
    switch (computerSelection) {
      case "paper":
        computerWins++;
        return "Computer Wins!";
      case "scissors":
        playerWins++;
        return "Player Wins!";
      default:
        break;
    }
  }

  // paper
  if (playerSelection === choiceArray[1].toLowerCase()) {
    switch (computerSelection) {
      case "scissors":
        computerWins++;
        return "Computer Wins!";
      case "rock":
        playerWins++;
        return "Player Wins!";
      default:
        break;
    }
  }
  // scissors
  if (playerSelection === choiceArray[2].toLowerCase()) {
    switch (computerSelection) {
      case "rock":
        computerWins++;
        return "Computer Wins!";
      case "paper":
        playerWins++;
        return "Player Wins!";
      default:
        break;
    }
  }
}

let playerSelection = getComputerChoice();
let computerSelection = getComputerChoice();

//console.log(playRound(playerSelection[0], computerSelection));

for(let i = 0; i < 10; i++) {
    playerSelection = getComputerChoice();
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
}

console.log(`Player Wins: ${playerWins}, Computer Wins: ${computerWins}, Ties: ${tie}`);
