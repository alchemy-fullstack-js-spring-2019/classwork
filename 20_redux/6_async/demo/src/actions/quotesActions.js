import { getQuotes } from '../services/futuramaApi';
import { createAction } from 'promise-middleware-redux';

export const FETCH_QUOTES_LOADING = 'FETCH_QUOTES_LOADING';
export const FETCH_QUOTES = 'FETCH_QUOTES';

// export const fetchQuotes = () => dispatch => {
//   dispatch({
//     type: FETCH_QUOTES_LOADING
//   });

//   return getQuotes()
//     .then(quotes => {
//       dispatch({
//         type: FETCH_QUOTES,
//         payload: quotes
//       });
//     });
// };

export const fetchQuotes = () => ({
  type: FETCH_QUOTES,
  pendingType: FETCH_QUOTES_LOADING,
  payload: getQuotes()
});

// export const [
//   fetchQuotes,
//   FETCH_QUOTES,
//   FETCH_QUOTES_LOADING
// ] = createAction('FETCH_QUOTES', getQuotes);
