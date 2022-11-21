//Example fetch using openlibrary.org
document.querySelector('button').addEventListener('click', getTitle);

// Book to persist in the DOM on page load
document.querySelector('h2').innerText = localStorage.getItem('books') + ',';

function getTitle() {
  const choice = document.querySelector('input').value;
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);

      // Store title in local storage
      localStorage.setItem('books', data.title);
      document.querySelector('h2').innerText =
        localStorage.getItem('books') + '.';
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
