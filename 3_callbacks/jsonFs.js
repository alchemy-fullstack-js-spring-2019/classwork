const fs = require('fs');

function readJSON(path, callback) {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);

    const json = JSON.parse(data);
    callback(null, json);
  });
}

function writeJSON(path, data, callback) {
  const strData = JSON.stringify(data);
  fs.writeFile(path, strData, callback);
}

module.exports = {
  readJSON,
  writeJSON
};
