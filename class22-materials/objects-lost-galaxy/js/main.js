//Create a mouse object that has four properties and three methods
// Solution 1
const mouse = {
  color: 'grey',
  size: 'large',
  name: 'squeeke',
  speak() {
    return `Iam ${this.name} and I am ${this.size} and ${this.color}`;
  },
};
console.log(mouse.speak());

// Solution 2
const rat = {};
rat.color = 'white';
(rat.size = 'small'), (rat.name = 'ratou');
rat.speak = function () {
  return `Iam ${this.name} and I am ${this.size} and ${this.color}`;
};
console.log(rat.speak())
