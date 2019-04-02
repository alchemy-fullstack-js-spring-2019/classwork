const { House } = require('../lib/House');

describe('HOUSE.JS**House**', ()=>{
    it('test that new house has location, floors, bedrooms, bathrooms', ()=>{
        const house = new House('portland', 3, 2, 4);
        expect(house.location).toBe('portland');
        expect(house.floors).toBe(3);
        expect(house.bedrooms).toBe(2);
        expect(house.bathrooms).toBe(4);
    });
    it('test house price function', ()=>{
        const house = new House('portland', 3, 2, 4);
        expect(house.price()).toBe(2400);
    });
   
});

