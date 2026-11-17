// Store the products currently in the shopping cart.
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value with reduce().
const originalTotal = cart.reduce((total, product) => total + product.price, 0);

// Apply category-specific discounts to each product.
let discountedSubtotal = 0;
const discountedItems = [];

for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  const discountAmount = product.price * discountRate;
  const finalPrice = product.price - discountAmount;
  discountedSubtotal += finalPrice;

  discountedItems.push({
    item: product.item,
    originalPrice: product.price,
    discountRate: discountRate * 100,
    finalPrice
  });
}

// Apply an additional 5% discount if the original cart total exceeds ₹50,000.
const extraDiscount = originalTotal > 50000 ? discountedSubtotal * 0.05 : 0;
const finalTotal = discountedSubtotal - extraDiscount;

// Display each item and the final bill.
console.log("Dynamic Discount Evaluator");
console.log("--------------------------");
for (const item of discountedItems) {
  console.log(`${item.item}: ₹${item.originalPrice} | Discount: ${item.discountRate}% | Final: ₹${item.finalPrice.toFixed(2)}`);
}
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Extra cart discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final amount: ₹${finalTotal.toFixed(2)}`);