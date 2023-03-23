const path = require('path')

// Base file name
console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))

// file extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))

console.log(path.parse(__filename).base); // you can access any property in the above path object

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))