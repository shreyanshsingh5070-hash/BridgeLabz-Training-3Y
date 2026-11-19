// Simulate two deployment servers with different response times.
function deployToServer(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error(`${name} deployment failed`));
      else resolve(`${name} deployment completed`);
    }, delay);
  });
}
const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);
// all() waits for both successes; race() reports the first settled result.
Promise.all([serverA, serverB])
  .then((results) => { console.log(results); console.log("Deployment completed for all servers"); })
  .catch((error) => console.error(`Deployment group error: ${error.message}`));
Promise.race([serverA, serverB])
  .then((result) => console.log(`Fastest response: ${result}`))
  .catch((error) => console.error(`Fastest response failed: ${error.message}`));
