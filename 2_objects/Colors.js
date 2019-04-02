module.exports = class Colors {
  constructor() {
    this.favorites = [];
  }

  addColor(color) {
    this.favorites.push(color);
  }

  hasColor(color) {
    return this.favorites.includes(color);
  }
};
