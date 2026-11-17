const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (randomOperator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = firstNumber / secondNumber;
        break;
    default:
        console.log("Invalid operator.");
}

const formattedAnswer = randomOperator === "/"
    ? correctAnswer.toFixed(2)
    : correctAnswer;

console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber} = ?`);
console.log(`Correct Answer: ${formattedAnswer}`);
