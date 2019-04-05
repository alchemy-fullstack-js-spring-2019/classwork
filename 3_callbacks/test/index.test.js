const Store = require('../lib/index');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

describe('Store', () => {
  let store;
  beforeEach(done => {
    store = new Store('./data');
    mkdirp('./data', done);
  });

  afterEach(done => {
    rimraf('./data', done);
  });

  it('can create a new json file', () => {

  });

  it('find all', () => {
    store.create({}, (err, createdObj) => {
      store.create({}, (err, createdObj1) => {
        store.create({}, (err, createdObj2) => {
          store.create({}, (err, createdObj3) => {
            store.create({}, (err, createdObj4) => {
              store.create({}, (err, createdObj5) => {
                store.find((err, foundItems) => {
                  expect(foundItems).toHaveLength(6);
                  [
                    createdObj,
                    createdObj1,
                    createdObj2,
                    createdObj3,
                    createdObj4,
                    createdObj5
                  ].forEach(item => {
                    expect(foundItems).toContainEqual(item);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
