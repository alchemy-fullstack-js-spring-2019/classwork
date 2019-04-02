// * `find`
// * `splice`
// * `join`
// * `split`

const dogs = [
  { name: 'spot', age: 1 },
  { name: 'rover', age: 10 },
  { name: 'steve', age: 15 },
  { name: 'fido', age: 4 }
];

const dogsToAdd = [{ name: 'gus', age: 5 }, { name: 'gerald', age: 5 }]

dogs.splice(1, 1, ...dogsToAdd);

console.log(dogs);

console.log(dogs
  .filter(dog => dog.age < 10)
  .map(dog => dog.name)
  .join(',,,,,,,,,,,,')
  .split(',,,,,,,,,,,,'))

console.log('1356'
  .split('')
  .map(digit => Number.parseInt(digit)));


const dog = {
  name: 'spot',
  age: 10,
  sayName() {
    // [s, p, o, t]
    // [10, 10, 10, 10]
    return this.name.split('').map(letter => {
      return this.age;
    })
  }
}

console.log(dog.sayName());
