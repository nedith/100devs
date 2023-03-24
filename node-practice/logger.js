const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
 log(msg) {
  // call event
  this.emit('message', {id: uuid.v4(), msg})
 }
}

// module.exports = Logger

const Logger = require('./logger');

const logInfo = new Logger();

logInfo.on('message', (data) => console.log('Called Listener', data));

logInfo.log('Hello World');
logInfo.log('Hello ');
logInfo.log('Hi');
