const registrationForm = document.getElementById("registrationForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const successMessage = document.getElementById("success");

const fields = [
  { input: nameField, error: document.getElementById("nameError"), validate: (value) => value.trim().length > 0, message: "Name is required." },
  { input: emailField, error: document.getElementById("emailError"), validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()), message: "Enter a valid email containing @." },
  { input: passwordField, error: document.getElementById("passwordError"), validate: (value) => value.length >= 6, message: "Password must be at least 6 characters." }
];

function validateField(field) {
  const isValid = field.validate(field.input.value);
  field.error.textContent = isValid ? "" : field.message;
  return isValid;
}

fields.forEach((field) => {
  field.input.addEventListener("input", () => {
    validateField(field);
    successMessage.textContent = "";
  });
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formIsValid = fields.map(validateField).every(Boolean);
  if (!formIsValid) {
    successMessage.textContent = "";
    return;
  }

  successMessage.textContent = "Form Submitted Successfully";
  registrationForm.reset();
  fields.forEach((field) => { field.error.textContent = ""; });
});