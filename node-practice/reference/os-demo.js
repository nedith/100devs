const os = require('os')

// Check OS platform
console.log(os.platform())

// Check OS Architecture
console.log(os.arch())

// Check CPU core info
console.log(os.cpus())

// Free memory
console.log(os.freemem())

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());