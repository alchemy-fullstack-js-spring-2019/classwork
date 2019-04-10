const fsPromises = require('fs').promises;

function copy(src, dst) {
  return fsPromises.readFile(src)
    .then(data => fsPromises.writeFile(dst, data));
}

module.exports = copy;
