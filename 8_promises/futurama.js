const request = require('superagent');

// POST - create a new thing
// GET - get a thing
// PUT - update a thing in its entirety (put it there)
// PATCH - partially update thing (patch some of it)
// DELETE - delete a thing
function getCharacterQuotes(character, count = 1) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
}

getCharacterQuotes('Bender', 5)
  .then(console.log);
