const LetterEmitter = require('./LetterEmitter');
// const str = 'hiThere';
// const letterMockHandler = jest.fn();

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });
  it('splits a str and emits an event for each letter', () => {
    const str = 'hiThere';
    const letterMockHandler = jest.fn();
      
    letterEmitter.on('letter', letterMockHandler);
      
    letterEmitter.on('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTime(str.length);
      // [...str].forEach(letter, i) => { 
      // expect(letterMockHandler).toHaveBeenCalledWith({letter, offset});
      done();
    });
    letterEmitter.read(str);
  });

});

