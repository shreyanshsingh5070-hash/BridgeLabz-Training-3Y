// Each module has a different delay and may randomly reject.
function loadModule(name, delay) {
  return new Promise((resolve, reject) => setTimeout(() => {
    if (Math.random() < 0.25) reject(new Error(`${name} service unavailable`));
    else resolve(`${name} Loaded`);
  }, delay));
}
async function loadDashboard() {
  const startTime = Date.now();
  // allSettled waits for every module, even if some reject.
  const results = await Promise.allSettled([
    loadModule("Profile", 2000), loadModule("Posts", 1500), loadModule("Messages", 1000)
  ]);
  results.forEach((result, index) => {
    const names = ["Profile", "Posts", "Messages"];
    if (result.status === "fulfilled") console.log(`${names[index]} succeeded: ${result.value}`);
    else console.log(`${names[index]} failed: ${result.reason.message}`);
  });
  console.log(`Total loading time: ${Date.now() - startTime} ms`);
}
loadDashboard().catch((error) => console.error("Dashboard error:", error));
