function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function () {
    console.log(`Person Name: ${this.name}`);
};

function Faculty(name, facultyId) {
    Person.call(this, name);
    this.facultyId = facultyId;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function () {
    console.log(`Faculty ID: ${this.facultyId}`);
};

function Professor(name, facultyId, subject) {
    Faculty.call(this, name, facultyId);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor = new Professor("Dr. Sharma", "FAC101", "Computer Science");

professor.showPerson();
professor.showFaculty();
professor.showProfessor();

console.log("Professor inherits from Faculty:", Faculty.prototype.isPrototypeOf(professor));
console.log("Professor inherits from Person:", Person.prototype.isPrototypeOf(professor));
