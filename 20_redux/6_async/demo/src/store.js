import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
// import thunk from 'redux-thunk';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';


export default createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
