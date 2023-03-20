// Create a Character class that will be used create objects with four properties (name, health, strength and xp) and a describe() method.

// Character class
class Character {
  constructor(name, weight, strength) {
    this.name = name;
    this.weight = weight;
    this.strength = strength;
    this.xp = 0;
  }
  describe() {
    return ` ${this.name} weighs ${this.weight} pounds, has a strength of ${this.strength} and xp of ${this.xp}`;
  }
}

const aurora = new Character('aurora', 150, 20);
const edith = new Character('edith', 140, 25);

aurora.weight -= 20;
edith.strength += 10;
aurora.xp += 5;

console.log(aurora.describe());
console.log(edith.describe());
