const { EventEmitter } = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  constructor(){
    super();
  }
  read(str) {
    // [...str].forEach(letter, offset) =>
    str.split('').forEach(letter => {
      this.emit('letter', letter);
    });
    this.emit('end');
  }
};

// letters.split turns to str.split()
// ee.emit becomes this.emit


