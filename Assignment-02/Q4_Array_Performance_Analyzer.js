// Generate eight random integer scores from 30 through 100.
const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30
);

// Analyze the scores using array methods.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedScores = scores.filter((score) => score >= 50);
const scoreReport = scores.map((score, index) => `Student ${index + 1}: ${score}`);

// Display the complete performance summary.
console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log(scoreReport.join("\\n"));
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedScores.length} out of ${scores.length}`);