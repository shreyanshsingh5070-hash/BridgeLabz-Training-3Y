// User stores common user details.
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

// Driver inherits User and adds vehicle details.
class Driver extends User {
  constructor(name, rating, vehicle, vehicleNumber) {
    super(name, rating);
    this.vehicle = vehicle;
    this.vehicleNumber = vehicleNumber;
  }
}

// Trip stores journey information and calculates a sample fare.
class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || this.distance < 0) {
      throw new Error("A valid non-negative trip distance is required.");
    }
    return 40 + this.distance * 12;
  }
}

const driver = new Driver("Vikram", 4.8, "Sedan", "UP 85 AB 1234");
console.log(`Driver: ${driver.name}, Rating: ${driver.rating}, Vehicle: ${driver.vehicle}`);

try {
  const trip = new Trip("GLA University", "Mathura Junction", 12);
  console.log(`Trip fare: ₹${trip.calculateFare().toFixed(2)}`);
} catch (error) {
  console.log(`Trip error: ${error.message}`);
}

try {
  const invalidTrip = new Trip("Station", "Airport", -5);
  console.log(`Trip fare: ₹${invalidTrip.calculateFare()}`);
} catch (error) {
  console.log(`Trip error: ${error.message}`);
}