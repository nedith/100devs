//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, strength, move, lives) {
  this.name = name;
  this.strength = strength;
  this.move = move;
  this.lives = lives;
  this.specialMove = function () {
    alert('KICK!!!');
  };
  this.profile = function () {
    alert(`${this.name} and my move is ${this.move} and I have ${lives} lives`);
  };
  this.superPower = function () {
    alert(`My strength is ${strength}`);
  };
}

const sudo = new StreetFighter('sudo', 'cute', 'kick', 9);
