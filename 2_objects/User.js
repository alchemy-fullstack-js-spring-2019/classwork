let count = 0;

class User {
  constructor(name, email, password) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;

    count += 1;
  }

  static count() {
    return count;
  }

  toString() {
    return `${this.name} | ${this.email}`
  }

  resetPassword(oldPassword, newPassword) {
    if (this.password !== oldPassword) {
      throw 'Invalid old password'
    }

    this.password = newPassword;
  }
}

const a = new User()
const b = new User()
const c = new User()
const d = new User()

console.log(a.toString());

console.log(User.count())
