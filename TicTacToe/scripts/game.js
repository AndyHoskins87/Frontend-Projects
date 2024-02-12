function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names!");
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    return;
  }
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1; //* minus one to get the index value
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1; //* plus one to get if it was player 1 or 2
  console.log(gameData);

  switchPlayer();
}