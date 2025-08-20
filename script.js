//--Getting Computer Choice--
const getComputerChoice = () => {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}

//--Getting Player Choice--
const getHumanChoice = () => {
  let playerChoice = prompt('Please enter your move', '');
  return playerChoice;
}
