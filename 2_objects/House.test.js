const House = require('./House');

describe('House', () => {
  let house = null;

  beforeEach(() => {
    house = new House('Portland', 2, 5, 3);
  });

  it('has a location', () => {
    expect(house.location).toEqual('Portland');
  });

  it('has floors', () => {
    expect(house.floors).toEqual(2);
  });

  it('has a bedrooms', () => {
    expect(house.bedrooms).toEqual(5);
  });

  it('has a bathrooms', () => {
    expect(house.bathrooms).toEqual(3);
  });

  it('has a price method', () => {
    expect(house.price()).toEqual(1000000);
  });

  it('has a colors static method', () => {
    // House.findWithRooms(5);
    // House.location
    // -> 'String'
    // House.floors
    // -> 'Number'
    expect(House.colors()).toEqual([
      'red',
      'blue',
      'green'
    ]);
  });
});
