const {
  writeFile
} = require('fs');

writeFile('./write.js', 'Hello', err => {
  if(err) throw err;
  console.log('done');
});
