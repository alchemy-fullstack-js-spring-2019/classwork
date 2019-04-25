require('dotenv').config();
require('./lib/utils/connect')();
const seedData = require('./test/seed-data');

seedData()
  .then(console.log);
