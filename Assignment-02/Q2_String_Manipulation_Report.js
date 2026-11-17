// Store the product title with extra spaces.
const productName = " wireless headphones PRO ";

// Trim spaces, convert to lowercase, and capitalize each word.
const trimmedName = productName.trim().toLowerCase();
const capitalizedWords = trimmedName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Replace the word Pro with the required edition label.
const cleanedTitle = capitalizedWords.replace("Pro", "Pro Edition");

// Display the formatted title and its character count.
console.log(`Product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);