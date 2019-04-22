const bcrypt = require('bcryptjs');

describe('bcrypt', () => {
  it('hashes a password', () => {
    const password = 'password';
    return bcrypt.hash(password, 10)
      .then(hashedPassword => {
        return Promise.all([
          Promise.resolve(hashedPassword),
          bcrypt.hash(password, 10)
        ]);
      })
      .then(([hash1, hash2]) => {
        expect(hash1).not.toEqual(hash2);
      });
  });

  it('creates the same hash given the same salt', () => {
    const password = 'password';
    const salt = '$2b$10$AAAAAAAAAAAAAAAAAAAAAA';

    return bcrypt.hash(password, salt)
      .then(hashedPassword => {
        return Promise.all([
          Promise.resolve(hashedPassword),
          bcrypt.hash(password, salt)
        ]);
      })
      .then(([hash1, hash2]) => {
        expect(hash1).toEqual(hash2);
      });
  });
});
