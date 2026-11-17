const currentSalary = 40000;
const annualIncrementRate = 8; // Percentage
let projectedSalary = currentSalary;

const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary += projectedSalary * (annualIncrementRate / 100);
    salaryReport.push({
        Year: year,
        "Projected Salary (₹)": Math.round(projectedSalary)
    });
}

console.table(salaryReport);
