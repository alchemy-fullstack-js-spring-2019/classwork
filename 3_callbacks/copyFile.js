const {
  readFile,
  writeFile
} = require('fs');


// readFile('./1_callbacks.md, 'utf8', andThen)
readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;

  // writeFile('./1_callbacks-copy.md', data, andThen)
  writeFile('./1_callbacks-copy.md', data, err => {
    if(err) throw err;

    console.log('done');
  });
});
