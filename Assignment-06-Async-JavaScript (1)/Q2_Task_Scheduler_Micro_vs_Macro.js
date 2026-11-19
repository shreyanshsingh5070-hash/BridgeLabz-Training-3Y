// Synchronous code runs first. Promise callbacks are microtasks.
// Microtasks are drained before the event loop starts the next macrotask.
console.log("Start");
setTimeout(() => console.log("setTimeout callback (macrotask)"), 0);
Promise.resolve().then(() => console.log("Promise callback (microtask)"));
console.log("Synchronous log");
console.log("End");
// Expected: Start, Synchronous log, End, Promise callback, setTimeout callback.
