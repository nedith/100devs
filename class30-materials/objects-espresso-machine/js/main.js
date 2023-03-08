//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor(model, color, size, volume) {
    this.model = model;
    this.color = color;
    this.size = size;
    this.volume = volume;
  }
  describe() {
    console.log(
      `${this.model} is ${this.color}, ${this.size} size and has a capacity of ${this.volume}`
    );
  }
  start() {
    console.log('Starting...');
  }
  stop() {
    console.log('Stopping...');
  }
  reset() {
    console.log('Resetting...');
  }
}

const espressoMax = new EspressoMachine('EspressoMax', 'red', 'medium', '5l');
const espressoPro = new EspressoMachine('espressoPro', 'green', 'large', '10l');

espressoMax.describe();
espressoPro.describe();
