const fsPromises = require('fs').promises;


// fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
//   .then(data => {
//     return Promise.all([
//       Promise.resolve(data),
//       fsPromises.readFile('./package.json', { encoding: 'utf8' })
//     ]);
//   })
//   .then(([promisesMd, packageJson]) => console.log(packageJson))
//   .catch(err => {
//     console.error(err);
//   });

// Promise.all([
//   fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }),
//   fsPromises.readFile('./package.json', { encoding: 'utf8' }),
//   fsPromises.readFile('./files.js', { encoding: 'utf8' })
// ])
//   .then(([promisesMd, packageJson, filesJs]) => {
//     console.log(promisesMd);
//   });


// dog API
Promise.resolve({
  name: 'spot',
  age: 10
});
