// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
// Synchronous statements run first. Promise.then() queues a microtask.
// setTimeout queues a macrotask, which runs after the microtask queue is empty.
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");
// Actual output should match the prediction above.
