class CarClass {
  
  constructor(make, model, year, color) {
    if(!CarClass.makes().includes(make)) throw 'Invalid Make';
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }

  drive(drivenMiles) {
    return this.miles +
      drivenMiles;
  }

  static makes(){
    return 'honda';
  }

}

module.exports = {
  CarClass
};

