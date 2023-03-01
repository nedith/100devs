// Create an object literal named aurora with four properties (name, health, strength and xp)
// and a describe() method.

const aurora = {
  name: 'aurora',
  weight: 150,
  strength: 20,
  xp: 0,
  describe() {
    return ` ${this.name} weighs ${this.weight} pounds, has a strength of ${this.strength} and xp of ${this.xp}`;
  },
};

aurora.weight -= 20;
aurora.strength += 10;
aurora.xp += 5;

console.log(aurora.describe());
