const expenses = {
    food: 6000,
    travel: 2500,
    rent: 10000,
    bills: 1800,
    leisure: 1200
};

let totalExpense = 0;

for (const category in expenses) {
    totalExpense += expenses[category]; // Assignment operator
}

const averageExpense = totalExpense / Object.keys(expenses).length;
const taxRate = 0.10;
const taxAmount = totalExpense * taxRate;
const finalAmount = totalExpense + taxAmount;

console.log(`Total Expense: ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmount.toFixed(2)}`);
