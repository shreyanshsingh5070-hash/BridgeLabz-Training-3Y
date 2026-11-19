// Fetch products from the Fake Store API and print the requested fields.
async function fetchAndDisplayProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const products = await response.json();
    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("------------------------------");
    });
  } catch (error) {
    console.error("Failed to load products. Please try again.", error);
  }
}
// Requires internet access and a modern browser or Node.js with fetch support.
fetchAndDisplayProducts();
