//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [2, 4, 5, 8, 10, 14, 20];
// Solution 1
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// alert(sum);

// Solution 2
// alert(numbers.reduce((sum, c) => sum + c, 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrNumbers(nums) {
  // let newArray = [];
  // for (let i = 0; i < nums.length; i++) {
  //   newArray.push(nums[i] * nums[i]);
  // }
  // return newArray;

  // Solution 2
  return nums.map((num) => num ** 2);
}
console.log(arrNumbers([1, 2, 3, 4, 5]));

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = (str) => {
  console.log(str.split('').reverse().join(''));
};
reverseString('edith');

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string) {
  let reversed = string.split('').reverse().join('');
  reversed === string ? alert('palindrome!!!') : alert('not a palindrome!');
}
palindrome('anna');
palindrome('bob');
palindrome('edith');
