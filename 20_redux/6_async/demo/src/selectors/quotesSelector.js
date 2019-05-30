export const getQuotes = state => state.quotes.list;
export const getQuotesLoading = state => state.quotes.loading;
export const getQuotesError = state => state.quotes.error;
export const getQuote = state => getQuotes(state)[state.quotes.currentQuote];

export const getCharacters = state => {
  return Object.values(getQuotes(state)
    .reduce((acc, { name, image }) => {
      acc[name] = { name, image };
      return acc;
    }, {}));
};

export const getScore = state => state.quotes.points;
