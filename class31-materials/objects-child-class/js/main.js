//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is speaking!!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const simba = new Dog('Simba', 'Sheperd');
