const request = require('superagent');

function getCharacter(id) {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      species: res.body.species,
      status: res.body.status
    }));
}

module.exports = {
  getCharacter
};
