export default function combineReducer(objOfReducers) {
  return (state = {}, action) => {

    // ['dogs', 'cats']
    return Object.keys(objOfReducers)
      .reduce((newState, reducerName) => {
        // reducerName is dogs
        // reducerName is cats


        // dogs state is ['spot', 'rover']
        // cats state is []
        const reducerState = state[reducerName];

        // dogs or cats reducer
        const reducer = objOfReducers[reducerName];

        // ['spot', 'rover', 'bingo']
        // []
        const newReducerState = reducer(reducerState, action);

        // { dogs: ['spot', 'rover', 'bingo']}
        // { dogs: ['spot', 'rover', 'bingo'], cats: []}
        newState[reducerName] = newReducerState;

        return newState;
      }, {});
  };
}
