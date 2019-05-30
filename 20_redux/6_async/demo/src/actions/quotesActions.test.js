import { fetchQuotes, FETCH_QUOTES } from './quotesActions';

jest.mock('../services/futuramaApi.js');

describe('quotes actions', () => {
  it('fetches a list of quotes then dispatches an action', () => {
    const dispatch = jest.fn();
    return fetchQuotes()(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_QUOTES,
          payload: []
        });
      });
  });
});
