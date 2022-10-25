//Create a mouse object that has four properties and three methods
const mouse = {
 color: 'grey',
 size: 'large',
 name: 'squeeke',
 speak() {
 return `Iam ${this.name} and I am ${this.size} and ${this.color}`
 }
}
console.log(mouse.speak());