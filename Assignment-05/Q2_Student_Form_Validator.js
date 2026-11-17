const studentForm = document.getElementById("studentForm");
const fields = {
    name: {
        input: document.getElementById("name"),
        pattern: /^[A-Za-z ]+$/,
        message: "Name must contain alphabets only."
    },
    email: {
        input: document.getElementById("email"),
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address."
    },
    phone: {
        input: document.getElementById("phone"),
        pattern: /^\d{10}$/,
        message: "Phone number must contain exactly 10 digits."
    },
    password: {
        input: document.getElementById("password"),
        pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
        message: "Password needs an uppercase letter, a number, and a special character."
    }
};

function validateField(field) {
    const value = field.input.value.trim();
    const isValid = field.pattern.test(value);
    const errorElement = field.input.nextElementSibling;

    field.input.classList.toggle("valid", isValid);
    field.input.classList.toggle("invalid", !isValid);
    errorElement.textContent = isValid ? "" : field.message;

    return isValid;
}

Object.values(fields).forEach(field => {
    field.input.addEventListener("input", () => validateField(field));
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();
    const isFormValid = Object.values(fields).map(validateField).every(Boolean);
    document.getElementById("formMessage").textContent = isFormValid
        ? "Registration successful!"
        : "Please correct the highlighted fields.";
    document.getElementById("formMessage").style.color = isFormValid ? "green" : "red";
});
