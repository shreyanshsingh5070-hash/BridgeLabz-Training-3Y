// Base class represents a general employee.
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is completing assigned ${this.department} work.`;
  }
}

// Manager inherits Employee and overrides work().
class Manager extends Employee {
  work() {
    return `${this.name} is managing the ${this.department} team and reviewing progress.`;
  }
}

const employee = new Employee("Riya", "Support");
const manager = new Manager("Arjun", "Technology");

// Same method call, different behavior: runtime polymorphism.
[employee, manager].forEach((member) => console.log(member.work()));