import {
  createStore,
  applyMiddleware
} from 'redux';
import reducer from './reducers';
import { myMiddleware } from './middleware/myMiddleware.js';

export default createStore(
  reducer,
  applyMiddleware(
    myMiddleware
  )
);
