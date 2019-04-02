const { animalConstructor, animalFactory, AnimalClass } = require('../lib/animal');

describe('ANIMAL.JS**animalConstructor', ()=>{
    it('creates new animal and it can speak its name', ()=>{
        const giraffe = new animalConstructor('willard', 'giraffe');
        expect(giraffe.sayHi()).toBe('my name is willard');


    });
});

describe('ANIMAL.JS**animalFactory', ()=>{
    it('creates new animal and it can speak its name', ()=>{
        const giraffe = animalFactory('willard', 'giraffe');
        expect(giraffe.speak()).toBe('my name is willard');


    });
});

describe('ANIMAL.JS**animalClass', ()=>{
    it('creates new animal and it can speak its name', ()=>{
        const giraffe = new AnimalClass('willard', 'giraffe');
        expect(giraffe.speak()).toBe('my name is willard');


    });
});
