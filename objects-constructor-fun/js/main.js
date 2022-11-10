//Create a pizza constructor with 4 properties and 3 methods
function Pizza(name, size, toppings, shape) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.shape = shape;
  this.type = function () {
    console.log(`${this.name}`);
  };
  this.ingredients = function () {
    console.log(`${this.toppings}`);
  };
  this.servings = function () {
    console.log(`This ${this.name} serves 4 people`);
  };
}

const campione = new Pizza(
  'campione',
  'large',
  ['minced meat', 'mushrooms', 'onions'],
  'circle'
);
