const { Transform } = require('stream');

module.exports = class JSONTransform extends Transform {
  constructor(options = {}) {
    super({ ...options, objectMode: true });
    this.array = !!options.array;
    this.body = '';
    this.first = true;
  }

  _transform(chunk, encoding, callback) {
    let data = JSON.stringify(chunk);
    if(this.array) {
      if(this.first) data = '[' + data;
      if(!this.first) data = ',' + data;
      this.first = false;
    }
    callback(null, data);
  }

  _flush(callback) {
    callback(null, ']');
  }
};
