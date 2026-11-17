const messageBox = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remainingCharacters = maximumCharacters - messageBox.value.length;
  counter.textContent = `${remainingCharacters} characters remaining`;
  counter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
  counter.classList.toggle("limit", remainingCharacters === 0);
}

messageBox.addEventListener("keydown", (event) => {
  const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"];
  const isShortcut = event.ctrlKey || event.metaKey;
  if (messageBox.value.length >= maximumCharacters &&
      !allowedKeys.includes(event.key) && !isShortcut) {
    event.preventDefault();
  }
});

messageBox.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
});

updateCounter();