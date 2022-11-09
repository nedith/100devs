//Create a dog object that has four properties and three methods
// Constructor method
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
      `I am called ${this.name}, a ${this.color} ${this.breed} dog owned by ${this.owner}`
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

Dog.prototype.legs = 4;

// Template literal
// const dog = {
//   name: 'terry',
//   breed: 'fox',
//   color: 'white',
//   owner: 'henry',
//   speak: function () {
//     console.log('woof woof');
//   },
//   profile: function () {
//     console.log(
//       `I am called ${this.name}, a ${this.color} ${this.breed} dog owned by ${this.owner}`
//     );
//   },
//   favTreat: function () {
//     console.log('I love buscuits!!!');
//   },
// };
// dog.speak();
// dog.profile();
// dog.favTreat();
