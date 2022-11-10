//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
  const drink = document.querySelector('input').value;
  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) =>
      res
        .json() // parse response as JSON
        .then((data) => {
          console.log(data.drinks);
          // console.log(data.drinks[1].strDrink);
          // console.log(data.drinks[1].strDrinkThumb);
          // let userChoice = document.querySelector('input').value;
          data.drinks.forEach((item) => {
            document.querySelector('img').src = item.strDrinkThumb;
            document.querySelector('h3').innerText = item.strInstructions;
            document.querySelector('h2').innerText = item.strDrink;
          });
          // document.querySelector('img').src = data.drinks[0].strDrinkThumb;
          // document.querySelector('h3').innerText +=
          //   data.drinks[1].strInstructions;
          // document.querySelector('h2').innerText += data.drinks[0].strDrink;
        })
    )
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
