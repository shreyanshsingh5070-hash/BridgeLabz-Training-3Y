// Each step is asynchronous and may randomly fail.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function boilWater() {
  return delay(1000 + Math.random() * 1000).then(() => {
    if (Math.random() < 0.1) throw new Error("Water boiling failed");
    console.log("Water boiled");
    return "Hot water";
  });
}
function brewCoffee(water) {
  return delay(1000 + Math.random() * 1000).then(() => {
    if (Math.random() < 0.1) throw new Error("Coffee brewing failed");
    console.log(`Coffee brewed using ${water}`);
    return "Fresh coffee";
  });
}
function pourIntoCup(coffee) {
  return delay(1000 + Math.random() * 1000).then(() => {
    if (Math.random() < 0.1) throw new Error("Pouring coffee failed");
    console.log(`${coffee} poured into a cup`);
    return "Coffee ready for the team!";
  });
}
// then() chains the steps; catch() handles any rejection.
boilWater().then(brewCoffee).then(pourIntoCup)
  .then(console.log)
  .catch((error) => console.error(`Coffee process failed: ${error.message}`));
