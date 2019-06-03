import { createChain } from './loggerEnhancer';

describe('createChain', () => {
  it('creates a chain of middleware', () => {
    const store = {
      dispatch() {

      }
    };

    const middle = jest.fn();

    const middleware = [
      store => next => action => {
        middle(action);
        next({ ...action, times: action.times + 1 });
      },
      store => next => action => {
        middle(action);
        next({ ...action, times: action.times + 1 });
      },
      store => next => action => {
        middle(action);
        next({ ...action, times: action.times + 1 });
      }
    ];

    const chain = createChain(store)(...middleware);
    chain({ times: 0 });

    expect(middle).toHaveBeenCalledTimes(3);
    expect(middle.mock.calls[0][0]).toEqual({
      times: 0
    });

    expect(middle.mock.calls[1][0]).toEqual({
      times: 1
    });

    expect(middle.mock.calls[2][0]).toEqual({
      times: 2
    });
  });
});
