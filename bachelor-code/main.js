const andi = document.querySelector('#andi');
const claire = document.querySelector('#claire');
const sharleen = document.querySelector('#sharleen');
const contestant = document.querySelectorAll('.contestant');


Array.from(contestant).forEach((element) => {
  element.addEventListener('click', revealMe);
});

function revealMe(e) {
  if (e.target.classList.contains('andiNext')) {
    andi.classList.toggle('hidden');
    claire.classList.add('hidden');
    sharleen.classList.add('hidden');
  } else if (e.target.classList.contains('claireNext')) {
    andi.classList.add('hidden');
    claire.classList.toggle('hidden');
    sharleen.classList.add('hidden');
  } else {
    andi.classList.add('hidden');
    claire.classList.add('hidden');
    sharleen.classList.toggle('hidden');
  }
}
