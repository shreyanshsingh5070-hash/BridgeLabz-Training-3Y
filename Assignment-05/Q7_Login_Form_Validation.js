const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("loginPassword").value;
    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>_\-+=]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }

    const result = document.getElementById("loginResult");
    result.textContent = errors.length ? errors.join("\n") : "Login validation successful!";
    result.style.color = errors.length ? "red" : "green";
});
