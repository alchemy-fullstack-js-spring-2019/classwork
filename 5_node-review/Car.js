class Car {

  // this.property is a property
  constructor(color, mpg, make) {
    this.color = color;
    this.mpg = mpg;
    this.make = make;
  }

  isEfficent() {
    if(this.mpg < 30) return false;

    return true;
  }

  sayEfficient() {
    if(this.isEfficent()) console.log('I am efficient');
    else console.log('NOPE');
  }

  static milesToKm(miles) {
    return (3 * miles) / 2;
  }
}


const myCar = new Car('red', 40, 'ford');
console.log(myCar.isEfficent());
myCar.sayEfficient();

console.log(Car.milesToKm(1));
