// Local storage practice
// storing data
const myObj = {
  name: 'Edith',
  age: 34,
  city: 'Kampala',
};

const myJSON = JSON.stringify(myObj);
localStorage.setItem('testJSON', myJSON);

// Retrieving data
const text = localStorage.getItem('testJSON');
const obj = JSON.parse(text);
document.querySelector(
  'h2'
).innerHTML = `My name is ${obj.name}, I am ${obj.age} years old and I live in ${obj.city}`;
