const characterQuotes = {
  Bender: [{
    character: 'Bender',
    quote: 'Yes!',
    image: 'http://imagee.com'
  }]
};

function getQuoteByCharacter(character) {
  return Promise.resolve(characterQuotes[character]);
}
