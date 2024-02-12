const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function decimalToBinary(input) {
  return toString(" ");
}

function checkUserInput() {
  // Check if not a number and parse it to check for special characters.
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    window.alert("Please provide a decimal number");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = ""; //Reset the input to an empty string
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  //check for the event object by passing e as a parameter.
  // use an if statement to check the enter/return key is pressed.
  if (e.key === "Enter") {
    checkUserInput();
  }
});
