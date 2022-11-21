//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector('h2').innerText += data.name;
      document.querySelector('h3').innerText += data.classes[0].name;
      console.log(data.subclasses);

      // Simpler version to put data into the DOM
      data.subclasses.forEach((obj) => {
        document.querySelector('ul').innerHTML += `<li>${obj.name}</li>`;
      });

      // Another solution to put data into the DOM
      //   data.subclasses.forEach((el) => {
      //     console.log(el);
      // create li
      // const li = document.createElement('li');
      // put text into li
      // li.textContent = el.name;
      // append to ul
      // document.querySelector('ul').appendChild(li);
      //   });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
