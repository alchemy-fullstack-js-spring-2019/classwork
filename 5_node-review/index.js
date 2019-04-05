const dogs = [
  { name: 'spot', age: 10 },
  { name: 'rover', age: 5 },
  { name: 'bingo', age: 15 },
  { name: 'fido', age: 1 }
];

// map
// iterate over item in an array
// and replace each one with a different value
const result = dogs.map((dog, i, arr) => {
  console.log('dog', dog);
  console.log('index', i);
  console.log('arr', arr);
  return { name: dog.age, age: dog.name };
});

console.log('result of map', result);

// filter
// iterates over the items in an array
// keep ones that match some condition
const oldDogs = dogs.filter((dog, index, arr) => {
  return dog.age > 8;
});

console.log('filtered dogs', oldDogs);

// find
// iterates over the items in an array
// and returns the first one that matches a condition
const oldDog = dogs.find((dog, index, arr) => {
  return dog.age > 8;
});

console.log('found dog', oldDog);

// every
// iterates over items and returns true if all match a condition
// it returns false if any do not match a condition
// stop short or short circuit.
const allOldDogs = dogs.every((dog, index, arr) => {
  console.log('on dog', dog);
  return dog.age > 8;
});

console.log('all dogs are old', allOldDogs);

// some
// iterates over items in an array
// it returns true if any match a condition
// it return false if none match a condation
const someOldDogs = dogs.some((dog, index, arr) => {
  console.log('some dog', dog);
  return dog.age > 8;
});

console.log('some dogs are old', someOldDogs);

const indexOfOldDog = dogs.findIndex((dog, index, arr) => {
  return dog.age > 8;
});

console.log('index of old dog', indexOfOldDog);

const users = [
  { name: 'a', role: 'user' },
  { name: 'b', role: 'admin' },
  { name: 'c', role: 'admin' },
  { name: 'd', role: 'user' },
  { name: 'e', role: 'admin' },
  { name: 'f', role: 'user' },
  { name: 'g', role: 'admin' }
];

// reduce
const afterReduce = users.reduce((acc, user, index, arr) => {
  if(!acc[user.role]) acc[user.role] = [];
  acc[user.role].push(user);
  return acc;
  // return {
  //   ...acc,
  //   [user.role]: [...acc[user.role], user]
  // };
}, {});

console.log('reduce result', afterReduce);
