const moment = require('moment');

console.log('Hello from JavaScript!');
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());
