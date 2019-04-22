const request = require('superagent');

function getQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body);
}

async function getQuoteByCharacter(character) {
  const res = await request
    .get(`futuramaapi.herokuapp.com/api/characters/${character}/1`);

  const [one, two, three] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);

  return {
    character: res.body[0].character,
    quote: res.body[0].quote,
    image: res.body[0].image
  };
}

module.exports = {
  getQuote,
  getQuoteByCharacter
};
