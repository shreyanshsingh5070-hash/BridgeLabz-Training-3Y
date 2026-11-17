// Create an array containing numbers from 1 to 30 using a loop.
const numbers = [];
for (let number = 1; number <= 30; number++) {
  numbers.push(number);
}

// Classify each number according to the given conditions.
const classifications = [];

for (const number of numbers) {
  if (number % 3 === 0 && number % 5 === 0) {
    classifications.push(`${number}: FizzBuzz`);
  } else if (number % 2 === 0) {
    classifications.push(`${number}: Even`);
  } else {
    classifications.push(`${number}: Odd`);
  }
}

// Display the resulting classification array.
console.log("Odd-Even Number Analyzer");
console.log(classifications);