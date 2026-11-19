// Menu contains valid food items and their prices.
const menu = [
  { name: "Pizza", price: 250 },
  { name: "Burger", price: 120 },
  { name: "Pasta", price: 180 },
  { name: "Sandwich", price: 100 }
];

// Map order names to prices, then reduce prices into a bill total.
function calculateBill(orderItems) {
  const priceList = orderItems.map((orderedName) => {
    const menuItem = menu.find((item) => item.name.toLowerCase() === orderedName.toLowerCase());
    if (!menuItem) {
      throw new Error(`"${orderedName}" is not available on the menu.`);
    }
    return menuItem.price;
  });

  return priceList.reduce((total, price) => total + price, 0);
}

try {
  console.log(`Your total food bill is ₹${calculateBill(["Pizza", "Burger", "Pasta"])}.`);
} catch (error) {
  console.log(`Unable to place order: ${error.message}`);
}

try {
  console.log(`Your total food bill is ₹${calculateBill(["Pizza", "Sushi"])}.`);
} catch (error) {
  console.log(`Unable to place order: ${error.message}`);
}