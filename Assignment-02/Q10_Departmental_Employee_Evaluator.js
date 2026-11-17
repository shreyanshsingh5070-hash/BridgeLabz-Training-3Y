// Store department names and their performance scores.
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

// Evaluate each department using nested if-else conditions.
console.log("Departmental Employee Evaluator");
console.log("--------------------------------");

for (const department of departments) {
  const departmentName = department[0];
  const performanceScore = department[1];
  let performanceRating;

  if (performanceScore >= 90) {
    performanceRating = "Excellent";
  } else if (performanceScore >= 75) {
    performanceRating = "Good";
  } else if (performanceScore >= 60) {
    performanceRating = "Average";
  } else {
    performanceRating = "Needs Improvement";
  }

  console.log(`${departmentName}: ${performanceScore} - ${performanceRating}`);
}