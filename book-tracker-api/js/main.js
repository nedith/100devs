//Example fetch using openlibrary.org
document.querySelector('button').addEventListener('click', getTitle);

function getTitle() {
  const choice = document.querySelector('input').value;
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);

      document.querySelector('h2').innerText += data.title;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
