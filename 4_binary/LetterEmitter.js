const { EventEmitter } = require('events');

// const arr = [1, 2, 3];
// const anotherArray = [...arr, 4, 5, 6];
module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
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
