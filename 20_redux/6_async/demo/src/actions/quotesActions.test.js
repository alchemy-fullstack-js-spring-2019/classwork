import {
  fetchQuotes,
  FETCH_QUOTES,
  FETCH_QUOTES_LOADING
} from './quotesActions';

jest.mock('../services/futuramaApi.js');

describe('quotes actions', () => {
  it('fetches a list of quotes then dispatches an action', () => {
    expect(fetchQuotes()).toEqual({
      type: FETCH_QUOTES,
      pendingType: FETCH_QUOTES_LOADING,
      payload: expect.any(Promise)
    });

    // const dispatch = jest.fn();
    // return fetchQuotes()(dispatch)
    //   .then(() => {
    //     expect(dispatch).toHaveBeenCalledWith({
    //       type: FETCH_QUOTES,
    //       payload: []
    //     });
    //   });
  });
});
