const ee = require('./ee');


ee.on('userCreate', () => {
  console.log('notify manager');
});
