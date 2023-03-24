const eventEmitter = require('events')

// Create class
class MyEmitter extends eventEmitter {}

// Init object
const myEventEmitter = new MyEmitter()

// Add event listener
myEventEmitter.on('event', () => console.log('Event Fired!'))

// Init event
myEventEmitter.emit('event');
myEventEmitter.emit('event');
myEventEmitter.emit('event');
myEventEmitter.emit('event');
