const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
  if (document.getElementById("result")) {
    const result = document.getElementById("result");
    result.remove();
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {

  const image1 = document.querySelector(".move__img#player-one-move__img")
  image1.src="./images/" + moveOne + ".png"

  const image2 = document.querySelector(".move__img#player-two-move__img")
  image2.src="./images/" + moveTwo + ".png"

  const headerTwo = document.createElement("h2");
  headerTwo.id = "result"
  headerTwo.style.color = "red";
  headerTwo.textContent = outcome;
  document.querySelector("body").append(headerTwo);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
