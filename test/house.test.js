const { HouseClass } = require('../lib/house.js');

describe('create house', () => {
  let house = null;

  beforeEach(() => {
    house = new HouseClass('Portland', 2, 3, 1);
  });

  test('create house location', () => {
    expect(house.location).toEqual('Portland');
  });

  test('create house floor', () => {
    expect(house.floors).toEqual(2);
  });

  test('create house bed', () => {
    expect(house.bed).toEqual(3);
  });

  test('create house bath', () => {
    expect(house.bath).toEqual(1);
  });

  test('create house price', () => {
    expect(house.price()).toEqual(3200);
  });
});


