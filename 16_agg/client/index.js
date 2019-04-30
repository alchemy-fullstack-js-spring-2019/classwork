require('dotenv').config();
const authHandler = require('./handlers/auth');
const postHandler = require('./handlers/post');

authHandler()
  .then(postHandler);
