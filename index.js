let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cells = document.querySelectorAll(".cell");
function makeMove(cellIndex) {
  if (gameState[cellIndex] === "" && gameActive) {
    gameState[cellIndex] = currentPlayer;
    cells[cellIndex].textContent = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);
    if (checkWin()) {
      announceWinner();
      gameActive = false;
      return;
    }
    if (checkDraw()) {
      announceDraw();
      gameActive = false;
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}
function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      gameState[a] !== "" &&
      gameState[a] === gameState[b] &&
      gameState[b] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}
function checkDraw() {
  return gameState.every((cell) => cell !== "");
}
function announceWinner() {
  alert("Player " + currentPlayer + " wins!");
}
function announceDraw() {
  alert("It's a draw!");
}
function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
}

