// Student class stores a student's name and marks.
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Calculate the average using reduce().
  calculateAverage() {
    const totalMarks = this.marks.reduce((total, mark) => total + mark, 0);
    return totalMarks / this.marks.length;
  }

  // Return a grade based on the student's average.
  getGrade() {
    const average = this.calculateAverage();
    if (average >= 80) return "A";
    if (average >= 60) return "B";
    if (average >= 40) return "C";
    return "F";
  }
}

const students = [
  new Student("Aarav", [85, 90, 78, 88]),
  new Student("Meera", [70, 65, 72, 68]),
  new Student("Kabir", [35, 42, 30, 38])
];

students.forEach((student) => {
  console.log(`${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`);
});