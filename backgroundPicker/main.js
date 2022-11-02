const purple = document.querySelector('#purple');
const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');

purple.addEventListener('click', purpleParty)
green.addEventListener('click', greenParty)
yellow.addEventListener('click', yellowParty)

function purpleParty() {
 document.querySelector('body').style.backgroundColor = 'purple';
}

function greenParty() {
 document.querySelector('body').style.backgroundColor = 'green';
}

function yellowParty() {
 document.querySelector('body').style.backgroundColor = 'yellowGreen';
}