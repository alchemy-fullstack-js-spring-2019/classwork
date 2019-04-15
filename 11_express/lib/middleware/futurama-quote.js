const getQuote = require('../services/futuramaApi');

module.exports = (req, res, next) => {
  return getQuote()
    .then(quoteObjs => {
      const firstQuote = quoteObjs[0];
      req.quote = firstQuote.quote;
      next();
    });
};
