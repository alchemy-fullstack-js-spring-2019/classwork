const fs = require('fs');

function copy(src, dst, callback) {
  // src is where i read from
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    // dst is where i write to
    fs.writeFile(dst, data, callback);
    // fs.writeFile(dst, data, err => {
    //   // callback
    //   // pass callback an error if we errored
    //   if(err) return callback(err);

    //   // pass callback nothing if we are good
    //   callback();
    // });
  });
}

module.exports = copy;
