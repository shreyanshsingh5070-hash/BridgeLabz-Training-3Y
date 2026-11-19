// Each delivery stage resolves or rejects after a random 1–2 second delay.
function runDeliveryStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error(`${stepName} failed`));
      else { console.log(successMessage); resolve(); }
    }, delay);
  });
}
async function runPipeline() {
  console.log("Start Pipeline");
  try {
    // await pauses this function until a step settles; the steps run sequentially.
    await runDeliveryStep("takeOrder", "Step 1: Order taken");
    await runDeliveryStep("prepare", "Step 2: Food prepared");
    await runDeliveryStep("pack", "Step 3: Package ready");
    await runDeliveryStep("dispatch", "Step 4: Out for delivery");
    await runDeliveryStep("deliver", "Delivery completed!");
  } catch (error) {
    console.error("Pipeline failed!", error.message);
  }
}
// Pending timers do not block JavaScript from processing other event-loop tasks.
runPipeline();
