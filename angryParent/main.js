const btn = document.getElementById('btn');
btn.addEventListener('click', run);

function run() {
  const fname = document.querySelector('#firstName').value;
  const firstMiddle = document.querySelector('#firstMiddle').value;
  const lastMiddle = document.querySelector('#lastMiddle').value;
  const lastName = document.querySelector('#lastName').value;
  const yell = document.querySelector('#yell');
  yell.innerText = `${fname} ${firstMiddle} ${lastMiddle} ${lastName}`;
}
