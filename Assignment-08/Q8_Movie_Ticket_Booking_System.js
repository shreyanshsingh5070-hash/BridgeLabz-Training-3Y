// Base class represents a standard movie ticket.
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Add a shared printTicket() method to the base prototype.
MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket Price: ₹${this.price}`);
};

// OnlineTicket inherits MovieTicket and adds a convenience fee.
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const firstTicket = new OnlineTicket("The Great Adventure", "A12", 250, 30);
const secondTicket = new OnlineTicket("The Great Adventure", "A13", 250, 30);

// OnlineTicket instances access printTicket() through the prototype chain.
firstTicket.printTicket();
console.log(`Total amount: ₹${firstTicket.getTotalAmount()}`);
secondTicket.printTicket();
console.log(`Total amount: ₹${secondTicket.getTotalAmount()}`);