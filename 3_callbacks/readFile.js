const fs = require('fs');

fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  console.log(data);
});
