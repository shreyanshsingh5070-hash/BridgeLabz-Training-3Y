// Workout records contain each user's steps and calories burned.
const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(workouts) {
    if (!Array.isArray(workouts) || workouts.length === 0) {
      throw new Error("Workout dataset cannot be empty.");
    }
    this.workouts = workouts;
  }

  // Find users who completed more than 7,000 steps.
  getActiveUsers() {
    return this.workouts.filter((record) => record.steps > 7000);
  }

  // Calculate average calories using reduce().
  getAverageCalories() {
    const totalCalories = this.workouts.reduce((total, record) => total + record.calories, 0);
    return totalCalories / this.workouts.length;
  }

  // Format workout records as readable messages using map().
  getUserSummary() {
    return this.workouts.map((record) =>
      `${record.user} walked ${record.steps} steps and burned ${record.calories} calories.`
    );
  }
}

try {
  const analytics = new FitnessAnalytics(workoutData);
  console.log("Active users:", analytics.getActiveUsers());
  console.log(`Average calories: ${analytics.getAverageCalories().toFixed(2)}`);
  console.log("User summaries:");
  analytics.getUserSummary().forEach((summary) => console.log(summary));
} catch (error) {
  console.log(`Analytics error: ${error.message}`);
}

// Confirm that an empty dataset throws a meaningful error.
try {
  new FitnessAnalytics([]);
} catch (error) {
  console.log(`Dataset error: ${error.message}`);
}