const { EventEmitter } = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  constructor(){
    super();
  }
  read(str) {
    const pattern = /[a-z]/i;
    [...str].forEach((letter, offset) => {
      if(pattern.test(letter)) {
        this.emit('letter', {
          letter,
          offset
        });
      }
    });
    this.emit('end');
  }
};
