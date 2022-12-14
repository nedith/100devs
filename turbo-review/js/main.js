// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'What is your name?';
// solution 1
// sentence.endsWith('?')
  // ? alert('I am a question!!!')
//   : alert('I am a statement!!');

// Solution 2
alert(sentence.endsWith('?')); 

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multipleWords = 'I am a jr.dev at 100 Devs agency';
// console.log(multipleWords.replace('jr.dev', 'software engineer'));
console.log(multipleWords.replaceAll('jr.dev', 'software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
  let choice = Math.random();
  if (choice <= 0.33) return 'rock';
  else if (choice <= 0.66) return 'paper';
  else return 'scissor';
}
// console.log(rockPaperScissor());
// console.log(rockPaperScissor());
// console.log(rockPaperScissor());
// console.log(rockPaperScissor());
// console.log(rockPaperScissor());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function game(myChoice) {
  if (rockPaperScissor() === myChoice) { // better to store rockPaperScissor in a variable for ease of use
    return 'It is a tie!!!';
  } else if (
    (rockPaperScissor() === 'rock' && myChoice === 'paper') ||
    (rockPaperScissor() === 'rock' && myChoice === 'scissor') ||
    (rockPaperScissor() === 'paper' && myChoice === 'scissor')
  ) {
    return 'You won!!';
  } else return 'You lost!!!';
}
console.log(game('scissor'));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function choicesGame(arrChoices) {
  arrChoices.forEach((item) => console.log(item));
}
choicesGame(['xbox', 'death con', 'vampires', 'dragons']);
