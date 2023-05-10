// console.log('May Node and Express be with you');
console.log(__dirname);
// Creating server using express
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('listening on 3000');
});

// CRUD- READ
app.get('/', (req, res) => {
  res.sendFile('/home/edith/100Devs/100devs/crud-practice' + '/index.html');
});
