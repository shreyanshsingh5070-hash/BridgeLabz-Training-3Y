// Inventory contains products from several categories.
const inventory = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
  { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 25 },
  { id: 3, name: "T-Shirt", category: "Fashion", price: 700, stock: 5 },
  { id: 4, name: "Jeans", category: "Fashion", price: 1800, stock: 12 },
  { id: 5, name: "Notebook", category: "Education", price: 100, stock: 3 },
  { id: 6, name: "Pen Set", category: "Education", price: 250, stock: 40 }
];

// Return products with fewer than 10 units in stock.
function getLowStockProducts(products) {
  return products.filter((product) => product.stock < 10);
}

// Return a copy sorted from lowest to highest price.
function sortProductsByPrice(products) {
  return [...products].sort((first, second) => first.price - second.price);
}

// Calculate the total value of all units in inventory.
function calculateTotalInventoryValue(products) {
  return products.reduce((total, product) => total + product.price * product.stock, 0);
}

// Group product objects by category using reduce().
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product);
    return groups;
  }, {});
}

console.log("Low-stock products:", getLowStockProducts(inventory));
console.log("Products sorted by price:", sortProductsByPrice(inventory));
console.log(`Total inventory value: ₹${calculateTotalInventoryValue(inventory).toFixed(2)}`);
console.log("Products grouped by category:", groupByCategory(inventory));