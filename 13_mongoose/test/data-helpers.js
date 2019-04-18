require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const seedData = require('./seed-data');
const Warehouse = require('../lib/models/Warehouse');
const Employee = require('../lib/models/Employee');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData();
});

afterAll(() => {
  return mongoose.connection.close();
});

const prepare = model => JSON.parse(JSON.stringify(model));
const createGetters = Model => ({
  [`get${Model.modelName}`]: query => Model.findOne(query).then(prepare),
  [`get${Model.modelName}s`]: query => Model.find(query).then(models => models.map(prepare))
});

module.exports = {
  ...createGetters(Warehouse),
  ...createGetters(Employee)
};
