const fs = require('fs');
const bcrypt = require('bcryptjs')

const salt = '$2a$10$2y8wvZnbmh22KqN1trIShe'
const hash = '$2a$10$2y8wvZnbmh22KqN1trIShe0ooKV5Lp1lrrTPcUiycR3t6StQbustO';

const passwordsFile = fs.readFileSync('./passwords.txt', { encoding: 'utf8' })

const passwords = passwordsFile.split('\n');


const startAt = Date.now();
const found = passwords
  .slice(999700)
  .map(password => {
    return { password, hash: bcrypt.hashSync(password, salt) };
  })
  .find(commonHash => commonHash.hash === hash)

console.log(found)
console.log(Date.now() - startAt)