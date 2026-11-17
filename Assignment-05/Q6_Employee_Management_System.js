class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aarav", "IT", 45000),
    new Employee(2, "Diya", "HR", 38000),
    new Employee(3, "Kabir", "Finance", 52000),
    new Employee(4, "Meera", "Marketing", 41000),
    new Employee(5, "Ishaan", "IT", 60000)
];

employees[0].applyBonus(10);

const employeeReport = employees.map(employee => ({
    id: employee.id,
    name: employee.name,
    department: employee.department,
    monthlySalary: employee.salary.toFixed(2),
    annualSalary: employee.getAnnualSalary().toFixed(2)
}));

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.table(employeeReport);
console.log(`Total Annual Company Payout: ₹${totalAnnualPayout.toFixed(2)}`);
