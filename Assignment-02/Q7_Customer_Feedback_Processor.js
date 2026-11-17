// Store a sample customer review.
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count the words in the feedback.
const wordCount = feedback.trim().split(/\\s+/).length;

// Check for negative keywords without case sensitivity.
const normalizedFeedback = feedback.toLowerCase();
const containsNegativeWord =
  normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

// Display the feedback analysis.
console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);
console.log(containsNegativeWord ? "Needs Improvement" : "Positive Feedback");