class Car{
   
    constructor(make, model, year, color){
        const makes = Car.makes();
        if(makes.includes(make))
        {
            this.make = make;
            this.model = model;
            this.year = year;
            this.color = color;
            this.miles = 0;
        }
        else
        {
            throw 'invalid make';
        }
    }
    drive(drivenMiles){
        this.miles = this.miles + drivenMiles;
        return this.miles;
    }
    static makes(){
        return [
            'Toyota',
            'Ford'  
        ];
    }
}

module.exports = Car;
