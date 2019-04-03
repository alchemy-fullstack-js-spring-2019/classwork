function animalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

animalConstructor.prototype.speak = function(){
  return `I am ${this.name}, a ${this.species}`;
};


function animalFactory(name, species) {
  return {
    name,
    species,
    speak() {
      return `I am ${this.name}, a ${this.species}`;
    }
  };
}

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `I am ${this.name}, a ${this.species}`;
  }
}

module.exports = {
  animalConstructor,
  animalFactory,
  AnimalClass
};


// animalConstructor.prototype.speak = animalConstructor('spot', 'dog');
// {
//   console.log(`This is a ${this.name} and I'm a ${this.animal}`);
// };
