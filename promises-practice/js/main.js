// Getting data from can-store API using fetch() API
const fetchedPromise = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/product.json'
);

console.log(fetchedPromise);

fetchedPromise
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  else return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

console.log('Started Request...');
