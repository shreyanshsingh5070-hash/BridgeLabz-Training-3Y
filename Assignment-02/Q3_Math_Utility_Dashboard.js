// Define the number used by the math dashboard.
const x = 16.75;

// Calculate the requested mathematical values.
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubeValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display all results using a template literal.
const summary = `
Math Utility Dashboard
----------------------
Original number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Cube (x^3): ${cubeValue.toFixed(3)}
Random number (10-50): ${randomNumber}
`;

console.log(summary);