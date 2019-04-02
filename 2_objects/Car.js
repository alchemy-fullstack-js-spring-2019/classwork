module.exports = class Car {
  constructor(color, make, model) {
    if(!Car.makes().includes(make)) throw 'Invalid Make';

    this.color = color;
    this.make = make;
    this.model = model;
    this.miles = 0;
  }

  drive(miles) {
    this.miles += miles;
  }

  static makes() {
    return [
      'honda',
      'toyota',
      'ford',
      'dodge'
    ];
  }


};
