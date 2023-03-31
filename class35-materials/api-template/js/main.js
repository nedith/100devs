//Make an api request using async await
async function cuteDog() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    console.log(res);
    if (res.status === 200) {
      const data = await res.json();
      document.querySelector('button').addEventListener('click', () => {
document.querySelector('img').src = data.message; });

      console.log(data);
    } else {
      throw new Error(`Error: ${res.status}`);
    }
  } catch (err) {
    console.log(`${err}`);
  }
}

cuteDog();

const displayImage = () => {
  document.querySelector('img').src = data.message;
};

 
