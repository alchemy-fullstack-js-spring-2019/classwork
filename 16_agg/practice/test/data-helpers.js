require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

const agent = request.agent(app);
beforeEach(() => {
  return agent
    .post('/api/v1/auth/signup')
    .send({ email: 'hacker@test.com', password: 'vjkjkrbyf' });
});

afterAll(() => {
  return mongoose.connection.close();
});


module.exports = {
  getAgent: () => agent
};
