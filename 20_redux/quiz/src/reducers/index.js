import { combineReducers } from 'redux';
import pokemon from './pokemonReducer';
import detail from './pokemonDetailReducer';

export default combineReducers({
  pokemon,
  detail
});
