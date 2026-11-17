const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userDetails = document.getElementById("userDetails");

function displayUser() {
    userDetails.textContent = JSON.stringify(user, null, 2);
}

document.getElementById("userName").value = user.name;
document.getElementById("userEmail").value = user.email;
document.getElementById("userAge").value = user.age;
displayUser();

userForm.addEventListener("submit", event => {
    event.preventDefault();

    user.name = document.getElementById("userName").value.trim();
    user.email = document.getElementById("userEmail").value.trim();
    user.age = Number(document.getElementById("userAge").value);

    displayUser();
});
