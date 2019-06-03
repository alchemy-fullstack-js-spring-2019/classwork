import { isPromise } from './middleware';

describe('promise middleware', () => {
  it('returns false if not a promise', () => {
    expect(isPromise({})).toBeFalsy();
  });

  it('returns true if it is a promise', () => {
    expect(isPromise(Promise.resolve('hi'))).toBeTruthy();
  });
});
