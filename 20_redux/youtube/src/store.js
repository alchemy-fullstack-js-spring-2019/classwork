import {
  createStore,
} from 'redux';
import reducer from './reducers';
import { loggerEnhancer } from './loggerEnhancer';

export default createStore(
  reducer,
  loggerEnhancer
);
