const fs = require('fs');
const fsPromises = fs.promises;

fs.readFile('./README.md', { encoding: 'utf8' }, (err, data) => {
  console.log(data);
});

const readStream = fs.createReadStream('./README.md', { encoding: 'utf8' });

// this.emit or ee.emit('data', chunk)
readStream.on('data', chunk => {
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('DONE');
});

readStream.on('error', err => {
  console.error(err);
});

fsPromises.readFile('./README.md', { encoding: 'utf8' })
  .then(console.log)
  .catch(err => console.error(err));
