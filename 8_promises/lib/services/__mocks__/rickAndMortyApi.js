module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Morty Smith',
      species: 'Human',
      status: 'Alive'
    });
  }
};
