// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }

class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }

  get role() {
    return this._role;
  }
  sayHello() {
    console.log(`Hello, I am on the ${this._role} team at #100Devs!`);
  }

  sayBye() {
    console.log('Its been a pleasure working with you folks!');
  }
}

class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);

    this._tech = tech;
  }

  get tech() {
    return this._tech;
  }

  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`
    );
  }

  sayBye() {
    super.sayBye();
    console.log('BYEEEEEE!!!');
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }

  get tech() {
    return this._tech;
  }

  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`
    );
  }
}

const edith = new Contractor('Edith', 'Back-end');
const machi = new Front('Machi', 'Front-end', 'React');
const bob = new Back('Bob', 'Back-end', 'Node');

let agency = [edith, machi, bob];

for (person of agency) {
  person.sayHello();
}
