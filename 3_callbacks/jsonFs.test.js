const fs = require('fs');
const {
  readJSON,
  writeJSON
} = require('./jsonFs');

describe('jsonFs', () => {
  afterEach(done => {
    fs.unlink('./myJSON', done);
  });

  it('can read a json file', done => {
    const dog = {
      name: 'spot',
      age: 15
    };
    fs.writeFile('./myJSON', JSON.stringify(dog), () => {
      readJSON('./myJSON', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(dog);
        done();
      });
    });
  });

  it('can write a json file', done => {
    const dog = {
      name: 'spot',
      age: 15
    };

    writeJSON('./myJSON', dog, err => {
      expect(err).toBeFalsy();

      readJSON('./myJSON', (err, data) => {
        expect(data).toEqual(dog);
        done();
      });
    });
  });
});
