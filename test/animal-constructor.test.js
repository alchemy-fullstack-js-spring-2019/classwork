const { animalConstructor, animalFactory, AnimalClass } = require('../lib/animal-constructor');

describe('create animal', () => {
  test('create dog name', () => {
    const dog = new animalConstructor('rover', 'dog');
    expect(dog.name).toEqual('rover');
    expect(dog.species).toEqual('dog');
  });

  test('create dog species', () => {
    const dog = new animalConstructor('rover', 'dog');
    expect(dog.name).toEqual('rover');
    expect(dog.species).toEqual('dog');
  });

  test('it speaks', () => {
    const dog = new animalConstructor('rover', 'dog');
    expect(dog.speak()).toEqual('I am rover, a dog');
  });
});

describe('create animal in factory', () => {
  test('create dog name', () => {
    const dog = animalFactory('rover', 'dog');
    expect(dog.name).toEqual('rover');
    expect(dog.species).toEqual('dog');
  });

  test('create dog species', () => {
    const dog = animalFactory('rover', 'dog');
    expect(dog.name).toEqual('rover');
    expect(dog.species).toEqual('dog');
  });
  test('create dog species', () => {
    const dog = animalFactory('rover', 'dog');
    expect(dog.speak()).toEqual('I am rover, a dog');
  });
});

describe('create animal in class', () => {
  test('create dog name', () => {
    const dog = new AnimalClass('rover', 'dog');
    expect(dog.name).toEqual('rover');
    expect(dog.species).toEqual('dog');
  });

  test('create dog species', () => {
    const dog = new AnimalClass('rover', 'dog');
    expect(dog.name).toEqual('rover');
    expect(dog.species).toEqual('dog');
  });
  test('create dog species', () => {
    const dog = new AnimalClass('rover', 'dog');
    expect(dog.speak()).toEqual('I am rover, a dog');
  });
});
