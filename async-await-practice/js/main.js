// Using async/await syntax
async function fetchProducts() {
  try {
    const response = await fetch(
      'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
    );
    console.log(response);
    if(!response.ok)
    throw new Error(`HTTP Error: ${response.status}`)
    const data = await response.json()
    console.log(data[0].name)
  } catch (error) {
    console.log(`Failed to fetch: ${error}`);
  }
}

fetchProducts();
