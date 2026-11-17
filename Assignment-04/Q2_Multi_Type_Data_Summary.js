const userName = "Shreyansh";             // string
const userAge = 21;                       // number
const isStudent = true;                   // boolean
const subjects = ["JavaScript", "DBMS"];  // array
const student = { name: "Shreyansh", year: 3 }; // object
const middleName = null;                  // null
let optionalValue;                        // undefined

const report = [
    { label: "User Name", value: userName, type: typeof userName },
    { label: "User Age", value: userAge, type: typeof userAge },
    { label: "Is Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "Student Object", value: JSON.stringify(student), type: typeof student },
    { label: "Middle Name", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "Optional Value", value: String(optionalValue), type: typeof optionalValue }
];

console.table(report);
