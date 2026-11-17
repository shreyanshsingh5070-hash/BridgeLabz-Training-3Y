const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const optionsList = document.getElementById("options");

dropdownButton.addEventListener("click", () => {
  optionsList.classList.toggle("open");
});

optionsList.addEventListener("click", (event) => {
  const selectedOption = event.target.closest("li[data-value]");
  if (!selectedOption) return;

  dropdownButton.textContent = selectedOption.dataset.value;
  optionsList.classList.remove("open");
});

// Capturing phase: close the dropdown before events reach their targets.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    optionsList.classList.remove("open");
  }
}, true);