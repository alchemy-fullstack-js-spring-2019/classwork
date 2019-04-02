const Car = require('../lib/Car');

describe('CAR.JS**car**', ()=>{
    it('test to see that car has make, model, yaer, color, and 0 miles', ()=>{
        const car = new Car('Toyota', 'Tundra', '2019', 'Silver');
        expect(car.make).toBe('Toyota');
        expect(car.model).toBe('Tundra');
        expect(car.year).toBe('2019');
        expect(car.color).toBe('Silver');
        expect(car.miles).toBe(0);
    });
    it('test to seet miles get incremented with drive method', ()=>{
        const car = new Car('Toyota', 'Tundra', '2019', 'Silver');
        car.drive(100);
        car.drive(10);
        expect(car.miles).toBe(110);
    });
    it('test to see that car has a static function that returns valid car makes', ()=>{
        const validMakes = Car.makes();
        expect(validMakes).toEqual(['Toyota', 'Ford']);
       
    });
    it('making a car with invalid make will throw an eror', ()=>{
        expect(()=>{
            const car = new Car('apple', 'Tundra', '2019', 'Silver');
        }).toThrow();    
    });
});
