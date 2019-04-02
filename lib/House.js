class House{
    constructor(location, floors, bedrooms, bathrooms){
        this.location = location;
        this.floors = floors;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }
    price(){
        const price = this.floors * this.bedrooms * this.bathrooms * 100;
        return price;
    }
}

module.exports = { House };
