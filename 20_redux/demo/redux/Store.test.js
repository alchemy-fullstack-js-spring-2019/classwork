import { createStore } from './Store';

describe('redux store thing', () => {
  it('gets the current state with getState()', () => {
    const reducer = (state = [], action) => {
      return state;
    };

    const store = createStore(reducer);

    expect(store.getState()).toEqual([]);
  });

  it('dispatches an action and updates state', () => {

    const factoryMethod = {
      'ADD_STUFF': (state, action) => [...state, action.payload]
    };

    const reducer = (state = [], action) => {
      return factoryMethod[action.type](state, action.payload);
    };

    const store = createStore(reducer);

    store.dispatch({
      type: 'ADD_STUFF',
      payload: 'hi'
    });

    expect(store.getState()).toEqual(['hi']);
  });

  it('subscribes to state changes', done => {
    const reducer = (state = [], action) => {
      switch(action.type) {
        case 'ADD_STUFF':
          return [...state, action.payload];
        default:
          return state;
      }
    };

    const store = createStore(reducer);

    store.subscribe(() => {
      expect(store.getState()).toEqual(['hi']);
      done();
    });

    store.dispatch({
      type: 'ADD_STUFF',
      payload: 'hi'
    });

  });
});
