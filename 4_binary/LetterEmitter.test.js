const LetterEmitter = require('./LetterEmitter');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });
  it('splits a str and emits an event for each letter', done => {
    const str = 'hi There!';
    const pattern = /[a-z]/i;
    const letterMockHandler = jest.fn();
      
    letterEmitter.on('letter', letterMockHandler);
      
    letterEmitter.once('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(7);
      [...str].forEach((letter, offset) => { 
        if(pattern.test(letter)) {
          expect(letterMockHandler).toHaveBeenCalledWith({
            letter,
            offset
          });
        }
      });
      done();
    });

    letterEmitter.read(str);
  });
});
