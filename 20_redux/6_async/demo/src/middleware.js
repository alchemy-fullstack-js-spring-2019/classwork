export const thunk = store => next => action => {
  if(typeof action === 'function') return action(store.dispatch);
  return next(action);
};

export const isPromise = potentialPromise => {
  // if potentialPromise is 'hi'
  // -> Promise.resolve('hi')

  // if potentialPromise is a Promise
  // -> Promise.resolve(Promise)
  // -> Promise
  return Promise.resolve(potentialPromise) === potentialPromise;
};

export const promiseMiddleware = store => next => action => {
  // if the action.payload is a promise
  if(isPromise(action.payload)) {
    // wait for the promise to resolve
    // -> then dispatch an action with:
    // -> type as action.type
    // -> payload as the fulfilled value of the promise

    store.dispatch({
      type: action.pendingType || 'PENDING'
    });

    return action.payload.then(data => {
      store.dispatch({
        type: action.type,
        payload: data
      });
    })
      .catch(err => {
        store.dispatch({
          type: action.rejectedType || 'REJECTED',
          payload: err
        });
      });
  }

  // otherwise do the normal thing
  return next(action);
};
