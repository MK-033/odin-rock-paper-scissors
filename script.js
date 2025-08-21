//--Getting Computer Choice--
const getComputerChoice = () => {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "Scissors";
  }
  return computerMove;
};

//--Getting Player Choice--
const getHumanChoice = () => {
  let playerChoice = prompt("Please enter your move", "");
  return (
    playerChoice.toLowerCase()[0].toUpperCase() +
    playerChoice.toLowerCase().slice(1)
  );
};

//--Single Round Function--
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("It's a tie.");
    return "tie";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
};

//--Play Game Function-- Calls playRound 5 times, keeps track of scores and declares a winner at the end of 5 rounds.--
const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  let numberOfRounds = 5;
  console.log(`--Game starting. Best of ${numberOfRounds} rounds.--`);
  for (let round = 1; round <= numberOfRounds; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);
    if (roundResult === "win") {
      humanScore++;
      console.log(
        `You win this round! ${humanSelection} beats ${computerSelection}.`
      );
    } else if (roundResult === "lose") {
      computerScore++;
      console.log(
        `You lose this round! ${computerSelection} beats ${humanSelection}.`
      );
    } else {
      console.log("This round is a tie.");
    }
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
  }

  console.log("--Game Over!--");

  //--Declaring the winner--
  if (humanScore > computerScore) {
    console.log("Congratulations. You win!");
  } else if (computerScore > humanScore) {
    console.log("The Computer wins. Better luck next time.");
  } else {
    console.log("The final result is a tie.");
  }
};
playGame();
