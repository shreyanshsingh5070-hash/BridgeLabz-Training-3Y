// Callback helper: run one stage after a one-second delay.
function runStage(name, callback) {
  setTimeout(() => { console.log(`${name} completed`); callback(); }, 1000);
}
// Nested callbacks illustrate callback hell and deeply indented control flow.
function runWithCallbacks() {
  console.log("Starting callback pipeline");
  runStage("Design", () => runStage("Build", () => runStage("Test", () =>
    runStage("Deploy", () => runStage("Celebrate", () => {
      console.log("Callback pipeline completed");
      runWithAsyncAwait();
    })))));
}
// Convert a callback-style timer into a Promise.
function stagePromise(name) {
  return new Promise((resolve) => setTimeout(() => { console.log(`${name} completed`); resolve(); }, 1000));
}
// async/await reads sequential asynchronous work from top to bottom with less nesting.
async function runWithAsyncAwait() {
  console.log("Starting async/await pipeline");
  await stagePromise("Design");
  await stagePromise("Build");
  await stagePromise("Test");
  await stagePromise("Deploy");
  await stagePromise("Celebrate");
  console.log("Async/await pipeline completed");
}
runWithCallbacks();
