const btn = document.querySelector('#check');

btn.addEventListener('click', day);

function day() {
  // const print = document.querySelector('#print');
  const today = document.querySelector('#today').value.toLowerCase();
  // if (today === 'saturday' || today === 'sunday') {
  //   print.innerHTML = 'Issa Weekend!!!!';
  //   // print.style.color = 'green';
  // } else {
  //   print.innerText = 'BORING!!!!';
  //   // print.style.color = 'red';
  // }
  const print = document.createElement('h2');
  document.body.appendChild(print);
  if (today === 'saturday' || today === 'sunday') {
    print.innerText = 'Issa Weekend!!!!';
    print.style.color = 'green';
    // document.body.appendChild(print);
  } else {
    print.innerText = 'BORING!!!!';
    print.style.color = 'red';
     // document.body.appendChild(print);
  }
}
