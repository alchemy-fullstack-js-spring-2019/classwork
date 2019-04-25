const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

const hash = password => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

const compare = (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = {
  hash,
  compare
};
