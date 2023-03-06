// A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

// Account class
class Account {
  constructor(name) {
    this.balance = 0; // balance is always 0 for new accounts
    this.name = name;
  }
  credit(amount) {
    return (this.balance += amount);
  }
  describe() {
    console.log(`owner: ${this.name}, balance: ${this.credit(1000)}`);
  }
}

const sean = new Account('sean');
const brad = new Account('brad');
const george = new Account('george');

console.log(sean.describe());
console.log(brad.describe());
console.log(george.describe());
