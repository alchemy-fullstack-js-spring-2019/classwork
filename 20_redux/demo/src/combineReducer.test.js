import combineReducer from './combineReducer';

describe('combine reducers', () => {
  it('returns combined state', () => {
    const dogs = (state = [], action) => {
      switch(action.type) {
        case 'ADD_DOG':
          return [...state, action.payload];
        default:
          return state;
      }
    };

    const cats = (state = [], action) => {
      return state;
    };

    const cr = combineReducer({
      dogs: dogs,
      cats: cats
    });

    const initialState = {
      dogs: ['spot', 'rover'],
      cats: []
    };

    const action = {
      type: 'ADD_DOG',
      payload: 'bingo'
    };

    expect(cr(initialState, action)).toEqual({
      dogs: ['spot', 'rover', 'bingo'],
      cats: []
    });
  });
});
