class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  price() {
    return (this.floors +
      this.bedrooms +
      this.bathrooms) *
      100000;
  }

  static colors() {
    return [
      'red',
      'blue',
      'green'
    ];
  }
}

module.exports = House;
