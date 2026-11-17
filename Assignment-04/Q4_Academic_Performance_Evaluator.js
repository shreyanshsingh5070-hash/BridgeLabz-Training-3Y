const marks = [88, 76, 91, 82, 79];

if (marks.length !== 5 || marks.some(mark => mark < 0 || mark > 100)) {
    console.log("Invalid input: enter exactly five marks between 0 and 100.");
} else {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / marks.length;
    const percentage = (totalMarks / 500) * 100;

    let result;
    if (marks.some(mark => mark < 35)) {
        result = "Detained";
    } else if (percentage >= 85) {
        result = "Promoted with Distinction";
    } else if (percentage >= 50) {
        result = "Promoted";
    } else {
        result = "Detained";
    }

    console.log(`Total Marks: ${totalMarks}/500`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Result: ${result}`);
}
