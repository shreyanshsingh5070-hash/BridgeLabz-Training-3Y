// Store the counter value in the outer function scope.
function createCounter() {
  let count = 0;

  // Increase the count to simulate an increment button click.
  function increment() {
    count++;
    console.log(`Current count: ${count}`);
  }

  // Decrease the count to simulate a decrement button click.
  function decrement() {
    count--;
    console.log(`Current count: ${count}`);
  }

  // Nested function can access and display the outer count variable.
  function showCount() {
    console.log(`Count from nested function: ${count}`);
  }

  return { increment, decrement, showCount };
}

// Manually call the functions to simulate click events.
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.showCount();