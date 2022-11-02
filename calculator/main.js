const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const result = document.querySelector('#result');

let total = 0;

first.addEventListener('click', makeZero);

second.addEventListener('click', addThree);

third.addEventListener('click', addNine = () => {
   total += 9;
  result.innerText = total;
});

fourth.addEventListener('click', subTwo)


// const makeZero = () => {
//   total = 0;
//   result.innerText = total;
// };

function makeZero() {
  // total = 0;
  return (result.innerText = total);
}

function addThree() {
  total += 3;
  result.innerHTML = total;
}

function subTwo(){
  total -= 2;
  result.textContent = total;
};
