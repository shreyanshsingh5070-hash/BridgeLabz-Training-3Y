// Promise-based replacement for the callback-based fetchBugs().
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;
      if (shouldFail) reject(new Error("Bug-tracker API request failed."));
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}
getBugs()
  .then((bugs) => console.table(bugs.map((bug, index) => ({ No: index + 1, Bug: bug }))))
  .catch((error) => console.error(`Unable to fetch bugs: ${error.message}`));
