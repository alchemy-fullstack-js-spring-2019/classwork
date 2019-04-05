const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('we did it with data', data => {
  console.log(`yaaaas ${data.name}`);
});
ee.emit('we did it with data', { name: 'laura' });


