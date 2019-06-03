export const loggerEnhancer = createStore => (reducer, initialState, enhancers) => {
  const store = createStore(reducer, initialState, enhancers);

  // store.getState()
  // store.dispatch()
  // store.subscribe()

  const getState = () => {
    console.log('Someone is using getState');
    return store.getState();
  };

  const dispatch = action => {
    console.log('Someone is dispatching');
    return store.dispatch(action);
  };

  return {
    ...store,
    getState,
    dispatch
  };
};

export const createChain = store => (...middleware) => {
  const last = middleware[middleware.length - 1](store)(store.dispatch);
  return middleware.slice(1).reverse().reduce((prevMiddle, m) => {
    return m(store)(action => prevMiddle(action));
  }, last);
};

export const applyMiddleware = (...middleware) => createStore => (reducer, initialState, enhancers) => {
  const store = createStore(reducer, initialState, enhancers);


  const dispatch = action => {
    createChain(store)(...middleware)(action);
  };

  return {
    ...store,
    dispatch
  };
};
