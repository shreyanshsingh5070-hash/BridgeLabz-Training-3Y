// Global bonus value shared by the script.
let bonus = 5000;

// Calculate salary using local function variables.
function calculateSalary(isPermanent) {
  let salary = 40000;

  // Add the global bonus only for permanent employees.
  if (isPermanent === true) {
    salary += bonus;
  }

  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Total salary: ₹${salary}`);

  // A local variable does not change the global bonus.
  let isPermanentLocal = isPermanent;
  isPermanentLocal = !isPermanentLocal;
  console.log(`Changed local isPermanent value: ${isPermanentLocal}`);
  console.log(`Global bonus remains: ₹${bonus}`);
}

calculateSalary(true);
calculateSalary(false);