//Create a dog object that has four properties and three methods
function Dog(name, breed, color, owner) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.owner = owner;
  this.speak = function () {
    console.log('woof woof');
  };
  this.profile = function () {
    console.log(
      `I am called ${this.name}, a ${this.color} ${this.breed} dog onwed by ${this.owner}`
    );
  };
  this.favTreat = function () {
    console.log('I love buscuits!!!');
  };
}

const fido = new Dog('fido', 'labrador', 'black', 'edith');
fido.speak();
fido.profile();
fido.favTreat();
