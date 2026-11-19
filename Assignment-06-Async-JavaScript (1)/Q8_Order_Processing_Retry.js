// The mock order API fails approximately 50% of the time.
function submitOrder() {
  return new Promise((resolve, reject) => setTimeout(() => {
    Math.random() < 0.5 ? reject(new Error("Temporary order service error")) : resolve("Order submitted successfully");
  }, 500));
}
async function processOrder() {
  // Await each attempt before deciding whether another retry is needed.
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      console.log(result);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed (${error.message})`);
    }
  }
  throw new Error("Order could not be processed");
}
processOrder().catch((error) => console.error(`Final order status: ${error.message}`));
