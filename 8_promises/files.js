const fsPromises = require('fs').promises;
const fs = require('fs');

function readFilePromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);

      resolve(data);
    });
  });
}

readFilePromise('./1_promises.md')
  .then(data => console.log('success', data))
  .catch(err => console.error('error', err));


// const readFilePromise = new Promise((resolve, reject) => {
//   fs.readFile('./1_promises.md', { encoding: 'utf8' }, (err, data) => {
//     if (err) return reject(err);

//     resolve(data);
//   });
// });





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
// Promise.resolve({
//   name: 'spot',
//   age: 10
// });

// fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
//   .then(data => data.replace(/[A-Z]/g, ''))
//   .then(noCaps => noCaps.toUpperCase())
//   .then(allCaps => [...allCaps].reverse().join(''))
//   .then(console.log);
