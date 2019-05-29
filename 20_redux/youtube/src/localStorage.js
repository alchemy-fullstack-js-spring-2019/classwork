import { applyMiddleware, compose } from 'redux';

export const localStorageMiddleware = store => next => action => {
  next(action);
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
};

export const localStorageEnhancer = (...enhancers) => createStore => reducer => {
  const localStorageReduxState = window.localStorage.getItem('redux');
  const initialState = localStorageReduxState ?
    JSON.parse(localStorageReduxState) :
    reducer(undefined, {
      type: '@@INIT'
    });

  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(localStorageMiddleware),
      ...enhancers
    )
  );
};
