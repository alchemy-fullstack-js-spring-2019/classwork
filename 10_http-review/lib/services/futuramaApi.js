const request = require('superagent');

function getRandomQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body)
    .then(body => body.quote);
}

module.exports = getRandomQuote;
