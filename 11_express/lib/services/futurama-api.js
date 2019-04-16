const request = require('superagent');

function getQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body);
}

function getQuoteByCharacter(character) {
  return request
    .get(`futuramaapi.herokuapp.com/api/characters/${character}/1`)
    .then(res => {
      return {
        character: res.body[0].character,
        quote: res.body[0].quote,
        image: res.body[0].image
      };
    });
}

module.exports = {
  getQuote,
  getQuoteByCharacter
};
