//Create a stopwatch object that has four properties and three methods
const stopwatch = {
 color: 'black',
 size: 'large',
 shape: 'oval',
 brand: 'rolex',
 showColor() {
  // console.log(`My stopwatch is ${this.color}`)
  return `${this.color}`;
 },
 showSize() {
   console.log(`My stopwatch is ${this.size}`);
 }
}

stopwatch.showColor();
stopwatch.showSize();