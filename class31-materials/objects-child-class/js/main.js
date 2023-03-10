//Create an a class and extend it - Can be anything you would like it to be! 
class Animal {
 constructor(name) {
  this.name = name;
 }
 speack() {
  console.log(`${this.name} is speaking!!`);
 }
}

class Dog extends animal {
 constructor(name, breed) {
  super(name);
  this.breed = breed;
 }
}
