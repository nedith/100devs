const Logger = require('./logger')

const logInfo = new Logger()

logInfo.on('message', data => console.log('Called Listener', data))

logInfo.log('Hello World')
logInfo.log('Hello ');
logInfo.log('Hi');

