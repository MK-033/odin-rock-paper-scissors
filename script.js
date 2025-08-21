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
