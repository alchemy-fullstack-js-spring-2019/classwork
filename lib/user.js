const uuid = require('uuid/v4');

class Users {
  constructor(name, email, password) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  toString() {
    return `${this.name} | ${this.email}`;
  }

  resetPassword(oldPassword, newPassword) {
    if(oldPassword === this.password) {
      this.password = newPassword;
    } else {
      throw ('Invalid Password');
    }

    return `${this.name} | ${this.email}`;
  }
}

module.exports = {
  Users
};

