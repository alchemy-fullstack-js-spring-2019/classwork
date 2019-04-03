const { CarClass } = require('../lib/car.js');

describe('this makes CAR', () => {
  let car = null;

  beforeEach(() => {
    car = new CarClass('honda', 'civic', '98', 'yellow', '100,000');
  });
  
  it('should show make', () => {
    expect(car.make).toEqual('honda');
  });

  it('should show model', () => {
    expect(car.model).toEqual('civic');
  });
  
  it('should show year', () => {
    expect(car.year).toEqual('98');
  });
  
  it('should show color', () => {
    expect(car.color).toEqual('yellow');
  });
  
  it('should show miles', () => {
    expect(car.miles).toEqual(0);
  });
    
  it('should show model', () => {
    expect(car.drive(100)).toEqual(100);
  });
  
  test('make should be in static makes', () => {
    expect(CarClass.makes()).toEqual(
      'honda'
    );
  });

  // it('should throw', () => {
  //   expect(myBadCar () => car = new Car('red', 'notta', 'civic', '98', 'yellow', 0))).toEqual(100);
  // });
});
