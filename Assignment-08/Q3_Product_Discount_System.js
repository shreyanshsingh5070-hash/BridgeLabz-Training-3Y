// Constructor function creates products with a name and price.
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Shared prototype method applies a percentage discount.
Product.prototype.applyDiscount = function (percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Discount must be between 0 and 100 percent.");
  }
  return this.price - (this.price * percent) / 100;
};

const products = [
  new Product("Laptop", 50000),
  new Product("Headphones", 3000),
  new Product("Keyboard", 2000)
];

const discounts = [10, 15, 5];

products.forEach((product, index) => {
  const discountedPrice = product.applyDiscount(discounts[index]);
  console.log(`${product.name}: Original ₹${product.price}, Discount ${discounts[index]}%, Final ₹${discountedPrice.toFixed(2)}`);
});

// Abstraction lets callers use applyDiscount() without repeating its formula.