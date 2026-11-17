function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const firstCar = new Car("Toyota", "Fortuner");
const secondCar = new Car("Hyundai", "Creta");

firstCar.getDetails();
secondCar.getDetails();

console.log(
    "Both car objects share the same prototype method:",
    firstCar.getDetails === secondCar.getDetails
);
