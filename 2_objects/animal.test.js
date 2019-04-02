const {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
} = require('./animal');

describe('animal object creators', () => {
  describe('AnimalConstructor', () => {
    it('has a name property', () => {
      const dog = new AnimalConstructor('rover', 'dog');
      expect(dog.name).toEqual('rover');
    });

    it('has a species property', () => {
      const dog = new AnimalConstructor('rover', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('has a species property', () => {
      const dog = new AnimalConstructor('rover', 'dog');
      expect(dog.speak()).toEqual('My name is rover and I am a dog');
    });
  });

  describe('AnimalFactory', () => {
    it('has a name property', () => {
      const dog = AnimalFactory('rover', 'dog');
      expect(dog.name).toEqual('rover');
    });

    it('has a species property', () => {
      const dog = AnimalFactory('rover', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('has a speak method', () => {
      const dog = AnimalFactory('rover', 'dog');
      expect(dog.speak()).toEqual('My name is rover and I am a dog');
    });
  });

  describe('AnimalClass', () => {
    it('has a name property', () => {
      const dog = new AnimalClass('rover', 'dog');
      expect(dog.name).toEqual('rover');
    });

    it('has a species property', () => {
      const dog = new AnimalClass('rover', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('has a method speak', () => {
      const dog = new AnimalClass('rover', 'dog');
      expect(dog.speak()).toEqual('My name is rover and I am a dog');


      // [{ name: rover, species: dog }, ....]
      // ['rover', 'spot', 'dog']
      //   .map(name => new AnimalClass(name, 'dog'));
    });
  });
});
