const request = require('superagent');

function getQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body);
}

module.exports = getQuote;
