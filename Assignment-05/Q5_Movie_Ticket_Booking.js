const bookingForm = document.getElementById("bookingForm");

const bookingPatterns = {
    name: /^[A-Za-z ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    seats: /^(?:[1-9]|10)$/
};

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const seats = document.getElementById("bookingSeats").value.trim();

    const errors = [];
    if (!bookingPatterns.name.test(name)) errors.push("Name must contain alphabets only.");
    if (!bookingPatterns.email.test(email)) errors.push("Enter a valid email address.");
    if (!bookingPatterns.seats.test(seats)) errors.push("Seats must be a number from 1 to 10.");

    const message = document.getElementById("bookingMessage");
    const ticket = document.getElementById("ticketDetails");

    if (errors.length > 0) {
        message.textContent = errors.join(" ");
        message.style.color = "red";
        ticket.textContent = "";
        return;
    }

    const booking = { name, email, seats: Number(seats) };
    message.textContent = "Booking confirmed!";
    message.style.color = "green";
    ticket.textContent = `Movie Ticket\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    console.log(booking);
});
