import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import reducers from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);
