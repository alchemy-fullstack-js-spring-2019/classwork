import { getQuotes } from '../services/futuramaApi';

export const FETCH_QUOTES_LOADING = 'FETCH_QUOTES_LOADING';
export const FETCH_QUOTES = 'FETCH_QUOTES';

export const fetchQuotes = () => dispatch => {
  dispatch({
    type: FETCH_QUOTES_LOADING
  });

  return getQuotes()
    .then(quotes => {
      dispatch({
        type: FETCH_QUOTES,
        payload: quotes
      });
    });
};
