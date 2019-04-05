const { EventEmitter } = require('events');
const ee = new EventEmitter();

const letters = 'letter';

ee.on('letter', letters => {
  console.log(`RECEIVED: ${letters}`);
}); 

letters.split('').forEach(letter => {
  ee.emit('letter', letter);
});
