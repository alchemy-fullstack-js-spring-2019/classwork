const {
  numberManipulator,
  repeater
} = require('./hof.js');

describe('hof', () => {
  it('can manipulate a number', () => {
    const mock = jest.fn();

    // numberManipulator
    // numberManipulator(5, mock)
    numberManipulator(5, mock);
    // expect mock to be called once
    expect(mock).toHaveBeenCalledTimes(1);
    // expect that the mock is called with 5
    expect(mock).toHaveBeenCalledWith(5);
  });

  it('can repeat a function multiple times', () => {
    const mock = jest.fn();
    repeater(10, mock);
    expect(mock).toHaveBeenCalledTimes(10);
  });
});
