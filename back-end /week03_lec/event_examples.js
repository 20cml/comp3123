const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event
const helloFn = () => {
    console.log('Hello, world!');
}
// Create an event handler
eventEmitter.on('hello', helloFn);
eventEmitter.addListener('hello', helloFn);

// Fire the 'hello' event 
eventEmitter.emit('hello');
eventEmitter.emit('hello');

// Remove the event handler
eventEmitter.removeListernet('hello', helloFn);

// Fire the 'hello' event again
eventEmitter.emit('hello'); //Nothing will happen 

// Create an event handler 
eventEmitter.on('greeting', (time, name) => {
    console.log(`Good ${time}, ${name}!`);
});

// Fire the 'greeting' event 
eventEmitter.emit('greetings', 'morning', 'John');
eventEmitter.emit('greetings', 'afternoon', 'Jane');
eventEmitter.emit('greetings', 'evening', 'Doe');

// Removel all listeners
eventEmitter.removeAllListeners('hello');
eventEmitter.removalAllListeners('greeting');

// Create an event handle once 
eventEmitter.once('welcome', () => {
    console.log('Welcome to the event!');
});
eventEmitter.emit('welcome');
eventEmitter.emit('welcome'); // Nothing will happen



