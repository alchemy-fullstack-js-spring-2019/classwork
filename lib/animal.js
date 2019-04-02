function animalConstructor(name, species){
    this.name = name;
    this.specices = species;
}

animalConstructor.prototype.sayHi = function(){
    const string = `my name is ${this.name}`;
    return string;
};


function animalFactory(name, species){
    return {
        name,
        species,
        speak(){
            return `my name is ${this.name}`;
        }
    };
}

class AnimalClass {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }
    speak(){
        return `my name is ${this.name}`;
    }
}



module.exports = { animalConstructor, animalFactory, AnimalClass };
