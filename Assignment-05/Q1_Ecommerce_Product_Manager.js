class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercent) {
        this.price -= this.price * discountPercent / 100;
    }

    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(101, "Laptop", 55000, "Electronics"),
    new Product(102, "Headphones", 1800, "Electronics"),
    new Product(103, "Notebook", 120, "Stationery"),
    new Product(104, "Smart Watch", 3200, "Electronics")
];

products[1].applyDiscount(10);

const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products priced above ₹1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));
