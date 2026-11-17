const steps = [...document.querySelectorAll(".step")];
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");

function showStep(stepId) {
  steps.forEach((step) => step.classList.toggle("active", step.id === stepId));
  errorMessage.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById("next1").addEventListener("click", () => {
  if (!nameInput.value.trim()) {
    errorMessage.textContent = "Please enter your name.";
    return;
  }
  showStep("step2");
});

document.getElementById("back2").addEventListener("click", () => showStep("step1"));

document.getElementById("next2").addEventListener("click", () => {
  if (!isValidEmail(emailInput.value.trim())) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }
  showStep("step3");
});

document.getElementById("back3").addEventListener("click", () => showStep("step2"));

document.getElementById("finish").addEventListener("click", () => {
  if (passwordInput.value.length < 6) {
    errorMessage.textContent = "Password must contain at least 6 characters.";
    return;
  }

  document.getElementById("summaryText").textContent =
    `Name: ${nameInput.value.trim()} | Email: ${emailInput.value.trim()} | Password: ${"*".repeat(passwordInput.value.length)}`;
  showStep("summary");
});