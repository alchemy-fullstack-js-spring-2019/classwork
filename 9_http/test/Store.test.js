const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const Store = require('../lib/Store');

describe('Store', () => {
  let store = null;

  beforeAll(done => {
    mkdirp('./testData/store', done);
  });

  beforeEach(() => {
    store = new Store('./testData/store');
  });

  beforeEach(() => {
    return store.drop();
  });

  afterAll(done => {
    rimraf('./testData', done);
  });

  it('creates an object in my store', () => {
    return store.create({ name: 'ryan' })
      .then(createdPerson => {
        expect(createdPerson).toEqual({ name: 'ryan', _id: expect.any(String) });
      });
  });

  it('finds an object by id', () => {
    return store.create({ name: 'uncle bob' })
      .then(createdUncle => {
        return Promise.all([
          Promise.resolve(createdUncle),
          store.findById(createdUncle._id)
        ]);
      })
      .then(([createdUncle, foundUncle]) => {
        expect(foundUncle).toEqual(createdUncle);
      });
  });

  it('find all objects tracked by the store', () => {
    // [undefined, undefined, undefined, undefined, undefined]
    // [{ item: 0 }, { item: 1 }, { item: 2 },  { item: 3 }, { item: 4 }]
    // [store.create({ item: 0 }), store.create({ item: 1 }, store.create({ item: 2 }, store.create({ item: 3 }, store.create({ item: 4 }, store.create({ item: 5 }]
    const undefinedArray = [...Array(5)];
    const arrayOfItems = undefinedArray.map((_, index) => {
      return {
        item: index
      };
    });
    const createPromises = arrayOfItems
      .map(item => store.create(item));

    return Promise.all(createPromises)
      .then(items => {
        return Promise.all([
          Promise.resolve(items),
          store.find()
        ]);
      })
      .then(([items, foundItems]) => {
        const [item1, item2, item3, item4, item5] = items;
        expect(foundItems).toHaveLength(5);
        expect(foundItems).toContainEqual(item1);
        expect(foundItems).toContainEqual(item2);
        expect(foundItems).toContainEqual(item3);
        expect(foundItems).toContainEqual(item4);
        expect(foundItems).toContainEqual(item5);
      });
  });

  it('deletes an object with an id', () => {
    return store.create({ item: 'I am going to delete' })
      .then(createdItem => {
        return Promise.all([
          Promise.resolve(createdItem),
          store.findByIdAndDelete(createdItem._id)
        ]);
      })
      .then(([createdItem, deleteResult]) => {
        expect(deleteResult).toEqual({ deleted: 1 });
        return store.findById(createdItem._id);
      })
      .catch(err => {
        expect(err).toBeTruthy();
      });
  });

  it('updates an existing object', () => {
    return store.create({ name: 'rayn' })
      .then(createdItem => {
        return store.findByIdAndUpdate(createdItem._id, {
          name: 'ryan'
        });
      })
      .then(updatedItem => {
        expect(updatedItem.name).toEqual('ryan');
      });
  });
});
