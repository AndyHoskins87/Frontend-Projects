function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //* using the data element in the HTML file to access the playerid.
  playerConfigOverlay.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); //* another way to create an object
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    //* an empty string is a falsey value
    event.target.firstElementChild.classList.add("error"); //* The first child element in the form is a div, which we add a css class to.
    errorsOutput.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatedPlayerData.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName; //* using minus 1 to get the index of 0 and 1 (ref player 1 & 2)

  closePlayerConfig();
}
