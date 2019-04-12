function getCharacter() {
  return Promise.resolve({
    name: 'Ryan',
    status: 'Alive',
    species: 'Human'
  });
}

module.exports = {
  getCharacter
};
